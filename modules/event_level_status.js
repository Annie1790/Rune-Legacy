let levelsDone = new Set();

export function markLevelDone(name) {
    levelsDone.add(name);
    console.log(levelsDone);
}

export function isLevelDone(name) {
    if (levelsDone.has(name)) {
        return true;
    } else {
        return false;
    }
}