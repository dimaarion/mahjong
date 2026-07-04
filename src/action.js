export const isTileOpen = (tile, allTiles) => {
    // проверяем наличие плитки сверху
    const hasTileAbove = allTiles.some(t =>
        t.z === tile.z + 1 &&
        Math.abs(t.x - tile.x) <= 0.5 &&
        Math.abs(t.y - tile.y) <= 0.5
    );
    if (hasTileAbove) return false;

    // проверяем соседей на том же уровне
    const sameLayer = allTiles.filter(t => t.z === tile.z && t.id !== tile.id);
    const hasLeft = sameLayer.some(t => Math.abs(t.y - tile.y) < 0.7 && t.x === tile.x - 1);
    const hasRight = sameLayer.some(t => Math.abs(t.y - tile.y) < 0.7 && t.x === tile.x + 1);

    return !(hasLeft && hasRight);
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