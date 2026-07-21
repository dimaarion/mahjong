import {useEffect, useMemo} from "react";
import {useStore} from "./store.js";
import { Howl } from 'howler';



export function percent(n,n2){
    return n * 100 / n2
}

export const useGameAudio = () => {
    const sounds = useMemo(() => ({
        // Фоновая музыка
        bgMusic: new Howl({
            src: ['./audio/fon.mp3'],
            html5: false, // Используем Web Audio API (скрывает из трея)
            loop: true,
            volume: useStore.getState().music // начальная громкость из состояния,
        })
    }), []);

    // Автоматическая остановка всех звуков при размонтировании
    useEffect(() => {
        return () => {
            Object.values(sounds).forEach(s => s?.unload());
        };
    }, [sounds]);

    return sounds;
};

export const useGameEffectAudio = (name = "", volume = 0.5) => {
    const sounds = useMemo(() => {
       return  new Howl({
            src: [name],
            html5: false, // Используем Web Audio API (скрывает из трея)
            loop: false,
            volume: volume // начальная громкость из состояния,
        })
    }, [name,volume]);

    // Автоматическая остановка всех звуков при размонтировании


    return sounds;
};


export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const isTileOpen = (tile, allTiles) => {
     // Стандартные размеры кости в координатной сетке
     const TILE_WIDTH = 1.02;
     const TILE_HEIGHT = 1;

     let isCoveredFromAbove = false;
     let hasLeftNeighbor = false;
     let hasRightNeighbor = false;

     for (const other of allTiles) {
         if (other.id === tile.id) continue;

         // 1. АБСОЛЮТНАЯ БЛОКИРОВКА СВЕРХУ (Слой выше)
         // Если у другой плитки слой строго выше, проверяем, накрывает ли она текущую плитку
         if (other.z > tile.z) {
             // Вычисляем пересечение bounding box'ов плиток
             const xOverlap = Math.abs(other.x - tile.x) < TILE_WIDTH;
             const yOverlap = Math.abs(other.y - tile.y) < TILE_HEIGHT;

             // Если координаты пересекаются, значит верхняя плитка лежит на нижней
             if (xOverlap && yOverlap) {
                 isCoveredFromAbove = true;
                 break; // Если накрыта сверху — она заблокирована 100%, бока можно не смотреть
             }
         }

         // 2. БЛОКИРОВКА С БОКОВ (Строго на одном слое Z)
         if (other.z === tile.z) {
             // Проверяем, находятся ли плитки в одном горизонтальном ряду
             const isSameRow = Math.abs(other.y - tile.y) < TILE_HEIGHT;

             if (isSameRow) {
                 // Сосед слева поджимает край
                 if (other.x < tile.x && (tile.x - other.x) < TILE_WIDTH) {
                     hasLeftNeighbor = true;
                 }
                 // Сосед справа поджимает край
                 if (other.x > tile.x && (other.x - tile.x) < TILE_WIDTH) {
                     hasRightNeighbor = true;
                 }
             }

         }
     }

     // Финальное правило маджонга:
     // Плитка доступна, только если её НЕ НАКРЫВАЕТ ни одна плитка со слоя выше
     // И при этом у неё свободен ХОТЯ БЫ ОДИН БОК (левый или правый).
     return !isCoveredFromAbove && (!hasLeftNeighbor || !hasRightNeighbor);
 };

 export const getTileNeighbors = (tile, allTiles) => {
     // Стандартные размеры кости в координатной сетке
     const TILE_WIDTH = 1.01;
     const TILE_HEIGHT = 1.01;

     const neighbors = {
         left: false,
         right: false,
         top: false,
         bottom: false
     };

     for (const other of allTiles) {

         // Пропускаем саму себя и плитки на других слоях Z
         if (other.id === tile.id || other.z !== tile.z) continue;

         // 1. ПРОВЕРКА ДЛЯ ЛЕВОГО И ПРАВОГО СОСЕДЕЙ (в одном горизонтальном ряду)
         // Плитки пересекаются по вертикали (yOverlap), значит стоят в одном ряду
         const yOverlap = Math.abs(other.y - tile.y) < 1;

         if (yOverlap) {

             // Сосед слева (дистанция меньше ширины плитки)
             if (other.x < tile.x && (tile.x - other.x) < TILE_WIDTH ) {
                 neighbors.left = true;
             }
             // Сосед справа (дистанция меньше ширины плитки)
             if (other.x > tile.x && (other.x - tile.x) < TILE_WIDTH) {
                 neighbors.right = true;
             }
         }

         // 2. ПРОВЕРКА ДЛЯ ВЕРХНЕГО И НИЖНЕГО СОСЕДЕЙ (в одном вертикальном столбце)
         // Плитки пересекаются по горизонтали (xOverlap), значит стоят друг над другом
         const xOverlap = Math.abs(other.x - tile.x) < 1;
         if (xOverlap) {
             // Сосед сверху (по оси Y координата меньше, если 0 у вас вверху экрана)
             // Внимание: проверьте, куда растет Y в вашей системе координат.
             // Если 0 внизу, то поменяйте top и bottom местами.
             if (other.y < tile.y && (tile.y - other.y) < TILE_HEIGHT) {
                 neighbors.top = true;
             }
             // Сосед снизу
             if (other.y > tile.y && (other.y - tile.y) < TILE_HEIGHT) {
                 neighbors.bottom = true;
             }
         }

         if(tile.x <= 0){
             neighbors.left = true;
         }
         if(tile.x >= 6){
             neighbors.right = true;
         }
         if(tile.y >= 4){
             neighbors.bottom = true;
         }
         if(tile.y <= 0){
             neighbors.top = true;
         }
     }

     return neighbors;
 };

export function generateMahjongTiles(width = 6, height = 4, levels = 3, emptyChance = 0.25) {
    const tiles = [];
    let idCounter = 1;

    // нижний слой
    for (let y = 3; y <= height; y++) {
        for (let x = 1; x <= width; x++) {
            if (Math.random() < emptyChance) continue;
            tiles.push({ id: idCounter++, x, y, z: 0 });
        }
    }

    // верхние слои: перекрывают предыдущие
    for (let z = 1; z < levels; z++) {
        const prevLevelTiles = tiles.filter(t => t.z === z - 1);
        prevLevelTiles.forEach(t => {
            let newX = t.x + (Math.random() < 0.5 ? -0.5 : 0);
            let newY = t.y + (Math.random() < 0.5 ? -0.5 : 0);

            // 🔹 ограничиваем координаты в пределах поля
            newX = Math.max(2, Math.min(width, newX));
            newY = Math.max(2, Math.min(height, newY));

            tiles.push({
                id: idCounter++,
                x: newX,
                y: newY,
                z
            });
        });
    }

    // помечаем открытые плитки
    return tiles.map(tile => ({
        ...tile,
        open: isTileOpen(tile, tiles)
    }));
}

export function generateRandomMahjong(level = 1) {
    const tiles = [];

    // Вспомогательный набор для быстрой проверки: существовала ли плитка на нижнем слое
    const existingTiles = new Set();
    const getKey = (x, y, z) => `${x},${y},${z}`;

    // Настройки генерации для базового слоя (z = 0)
    const minX = 0, maxX = 5;
    const minY = 1, maxY = 3;

    for (let z = 0; z < level; z++) {
        // Вероятность появления плитки уменьшается с каждым слоем, чтобы пирамида сужалась
        const spawnChance = 0.8 - (z * 0.15);

        if (z === 0) {
            // --- БАЗОВЫЙ СЛОЙ (z = 0) ---
            // Заполняем базовую сетку со случайными пропусками
            for (let y = minY; y <= maxY; y++) {
                for (let x = minX; x <= maxX; x++) {
                    // Делаем края чуть более редкими, а центр плотным
                    const isEdge = x === minX || x === maxX;
                    const chance = isEdge ? 0.4 : spawnChance;

                    if (Math.random() < chance) {
                        tiles.push({ x, y, z });
                        existingTiles.add(getKey(x, y, z));
                    }
                }
            }
        } else {
            // --- ПОСЛЕДУЮЩИЕ СЛОИ (z > 0) ---
            // Определяем смещение для текущего слоя.
            // Нечетные слои (1, 3...) смещаем на 0.5 (шахматный порядок), четные (2, 4...) возвращаем на целые сетки
            const offset = (z % 2 === 1) ? 0.5 : 0;

            // Проходим по возможным координатам текущего слоя
            for (let y = minY; y <= maxY; y += 0.5) {
                for (let x = minX; x <= maxX; x += 0.5) {

                    // Проверяем "опору": плитка сверху может появиться, только если под ней есть плитки
                    // Проверяем 4 точки опоры на слое (z - 1) вокруг текущей координаты
                    const hasSupport =
                        existingTiles.has(getKey(x - 0.5, y, z - 1)) ||
                        existingTiles.has(getKey(x + 0.5, y, z - 1)) ||
                        existingTiles.has(getKey(x, y - 0.5, z - 1)) ||
                        existingTiles.has(getKey(x, y + 0.5, z - 1)) ||
                        existingTiles.has(getKey(x, y, z - 1)); // прямо под ней

                    if (hasSupport && Math.random() < spawnChance) {
                        // Округляем до полушагов (0.5), чтобы соответствовать вашей структуре
                        const finalX = Math.floor(x) + offset;
                        const finalY = y;

                        // Проверяем, чтобы координаты не вышли за границы
                        if (finalX >= minX && finalX <= maxX) {
                            const key = getKey(finalX, finalY, z);

                            // Избегаем дубликатов на одном уровне
                            if (!existingTiles.has(key)) {
                                tiles.push({ x: finalX, y: finalY, z });
                                existingTiles.add(key);
                            }
                        }
                    }
                }
            }
        }
    }

    return tiles;
}

export const generateOrganicPyramid = (baseSize = 6, maxLayers = 6, fillDensity = 0.75) => {
    let layout = [];

    // Быстрая проверка наличия плитки по точным координатам
    const hasTileAt = (x, y, z) => {
        return layout.some(tile => tile.x === x && tile.y === y && tile.z === z);
    };

    // Строим пирамиду снизу вверх
    for (let z = 0; z < maxLayers; z++) {

        // Смещение текущего слоя: слой 0 (x, y), слой 1 (x+0.5, y+0.5), слой 2 (x+1, y+1) и т.д.
        const layerOffset = z * 0.5;

        // Количество рядов и колонок уменьшается с каждым слоем вверх
        const currentLayerSize = baseSize - z;
        if (currentLayerSize <= 0) break;

        for (let xIndex = 0; xIndex < currentLayerSize + 2; xIndex++) {
            for (let yIndex = 0; yIndex < currentLayerSize; yIndex++) {

                // Рандом для первого слоя. На верхних слоях плотность регулируется наличием опоры
                if (z === 0 && Math.random() > fillDensity) continue;

                // Вычисляем физические координаты плитки с учетом смещения слоя на 0.5
                const x = xIndex + layerOffset;
                const y = yIndex + layerOffset;

                // ПРОВЕРКА ОПОРЫ: для слоев выше нулевого проверяем 4 плитки под нами
                if (z > 0) {
                    // Координаты 4-х костей на слое (z - 1), образующих стык под текущей костью
                    const subX1 = x - 0.5, subY1 = y - 0.5; // Верхняя левая под нами
                    const subX2 = x + 0.5, subY2 = y - 0.5; // Верхняя правая под нами
                    const subX3 = x - 0.5, subY3 = y + 0.5; // Нижняя левая под нами
                    const subX4 = x + 0.5, subY4 = y + 0.5; // Нижняя правая под нами

                    const hasFullSupport =
                        hasTileAt(subX1, subY1, z - 1) &&
                        hasTileAt(subX2, subY2, z - 1) &&
                        hasTileAt(subX3, subY3, z - 1) &&
                        hasTileAt(subX4, subY4, z - 1);

                    // Если под костью нет надежной опоры из всех 4-х нижних костей — не строим её
                    if (!hasFullSupport) continue;
                }

                layout.push({ x, y, z });
            }
        }
    }

    // Гарантируем четное количество элементов для разбиения на пары
    if (layout.length % 2 !== 0) {
        // Удаляем одну случайную плитку с самого верхнего доступного слоя
        layout.sort((a, b) => b.z - a.z);
        layout.shift();
    }

    // Финальная сортировка для корректного порядка рендеринга (Z-index/DOM-очередь)
    return layout.sort((a, b) => a.z - b.z || a.y - b.y || a.x - b.x);
};

 export const getLevelDifficultyConfig = (levelNumber) => {
     const BASE_SIZE = 5; // Жесткий лимит ширины поля

     // 1. Рассчитываем этажность пирамиды
     let maxLayers = 1;
     if (levelNumber > 3) maxLayers = 2;
     if (levelNumber > 15) maxLayers = 3;
     if (levelNumber > 30) maxLayers = 5;

     // 2. Количество уникальных картинок (типов костей) на уровне
     // На 1 уровне — 4 типа, к 20 уровню — максимум 16 типов
     const uniqueTypesCount = Math.min(66, 4 + Math.floor(levelNumber));


     // 3. Лимит тактических ходов (сдвиги и молотки)
     const shiftsLimit = Math.min(3, 7 - Math.floor(levelNumber / 4));
     const hammersLimit = levelNumber < 4 ? 0 : (levelNumber > 15 ? 2 : 1);

     // 4. Плотность заполнения пирамиды (от 0.6 до 0.9)
     const fillDensity = Math.min(0.9, 0.6 + (levelNumber * 0.02));

     return {
         baseSize: BASE_SIZE,
         maxLayers,
         uniqueTypesCount,
         shiftsLimit,
         hammersLimit,
         fillDensity
     };
 };


export function splitArray(arr, parts) {
    const result = []
    const size = Math.ceil(arr.length / parts)

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }

    return result
}


export function checkImageAvailable(url) {
    return new Promise((resolve) => {
        const img = new Image();

        // Картинка успешно загрузилась
        img.onload = () => resolve(true);

        // Ошибка загрузки (404, неверный URL, проблема с CORS и т.д.)
        img.onerror = () => resolve(false);

        img.src = url;
    });
}