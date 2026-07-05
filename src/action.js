 /**
 * Проверяет, заблокирована ли плитка другими костями.
 * @param {Object} tile - Плитка, которую проверяем {x, y, z}
 * @param {Array} allTiles - Массив всех оставшихся на поле плиток
 * @returns {boolean} - true, если плитку можно взять
 */
 export const isTileOpen = (tile, allTiles) => {
     // Стандартные размеры кости в координатной сетке
     const TILE_WIDTH = 1;
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

        for (let xIndex = 0; xIndex < currentLayerSize; xIndex++) {
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
     const BASE_SIZE = 6; // Жесткий лимит ширины поля

     // 1. Рассчитываем этажность пирамиды
     let maxLayers = 1;
     if (levelNumber > 3) maxLayers = 2;
     if (levelNumber > 15) maxLayers = 3;

     // 2. Количество уникальных картинок (типов костей) на уровне
     // На 1 уровне — 4 типа, к 20 уровню — максимум 16 типов
     const uniqueTypesCount = Math.min(16, 4 + Math.floor(levelNumber / 2));

     // 3. Лимит тактических ходов (сдвиги и молотки)
     const shiftsLimit = levelNumber <= 3 ? 99 : Math.max(3, 7 - Math.floor(levelNumber / 4));
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

 const startGame_s = () => {
     // 1. Получаем конфигурацию сложности для текущего уровня (лимит ширины 6 встроен внутри)
     const config = getLevelDifficultyConfig(currentLevel);

     // Генерируем 3D-пирамиду (максимум 6 костей в ширину)
     let boardLayout = generateOrganicPyramid(config.baseSize, config.maxLayers, config.fillDensity);

     // Гарантируем, что количество костей на поле четное (для парности)
     if (boardLayout.length % 2 !== 0) {
         boardLayout.pop();
     }

     // 2. Отбираем пул уникальных картинок/типов для этого уровня
     const selectedTypes = shuffle(TILE_TYPES).slice(0, config.uniqueTypesCount);

     // 3. СНАЧАЛА генерируем фиксированную руку из 8 костей
     const initialHand = [];
     let tileIdCounter = 0;

     for (let i = 0; i < 8; i++) {
         const randomType = selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
         initialHand.push({
             id: `hand_${tileIdCounter++}`,
             typeId: randomType.id
         });
     }

     // 4. ЗАПОЛНЯЕМ ПОЛЕ ПАРАМИ на основе костей, которые СЕЙЧАС лежат в руке
     // Это гарантирует, что у игрока со старта будет куча вариантов для ходов
     const board = [];

     for (let i = 0; i < boardLayout.length; i += 2) {
         // Выбираем случайную кость из руки игрока, чтобы создать ей пару на поле
         const targetHandTile = initialHand[Math.floor(Math.random() * initialHand.length)];

         // Добавляем 2 одинаковые кости на поле
         for (let j = 0; j < 2; j++) {
             if (boardLayout[i + j]) {
                 board.push({
                     id: `board_${tileIdCounter++}`,
                     typeId: targetHandTile.typeId,
                     // Координаты из нашей 3D-пирамиды
                     x: boardLayout[i + j].x,
                     y: boardLayout[i + j].y,
                     z: boardLayout[i + j].z
                 });
             }
         }
     }

     // Перемешиваем только координаты на поле, чтобы пары не лежали вплотную друг к другу
     const positions = board.map(t => ({ x: t.x, y: t.y, z: t.z }));
     const shuffledPositions = shuffle(positions);

     const finalBoard = board.map((tile, index) => ({
         ...tile,
         ...shuffledPositions[index]
     }));

     // Сортируем поле снизу вверх, чтобы React правильно накладывал слои (Z-Index)
     finalBoard.sort((a, b) => a.z - b.z || a.y - b.y || a.x - b.x);

     // 5. Обновляем стейты игры по твоей новой механике
     setBoardTiles(finalBoard);
     setHand(initialHand);

     // Переменные колоды (deck) больше не нужны, так как добора нет
     if (typeof setDeck === 'function') setDeck([]);

     setSelectedHandId(null);
     setScore(0);
     setCombo(1); // Начинаем с комбо 1 или 0
     setLastMatchTime(Date.now());

     // Настройка бонусов управления (сдвиги и молотки) на основе уровня
     setShiftsLeft(config.shiftsLimit);  // Твой бывший countDirect, теперь с лимитом от сложности
     setHammersLeft(config.hammersLimit); // Количество активаций молотка на уровень

     // Если ты хочешь оставить свое имя переменной для сдвигов:
     // setCountDirect(config.shiftsLimit);
 };