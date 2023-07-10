// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з шириною (w) та висотою (h).
// Приклад:
// doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 2, 1, 1) ➞ false
// Обмеження:
// Цеглу можна повернути будь-якою стороною до отвору.
// Ми припускаємо, що цегла підходить, якщо її розміри дорівнюють розмірам отвору (тобто розмір цегли повинен бути меншим або дорівнює розміру отвору, не строго менше).
// Цегла не можна класти під неортогональним кутом.

console.log('TASK 9'.padStart(20, '_').padEnd(40, '_'))

const task9 = (brick_width, brick_height, brick_deep, hole_width, hole_height) => {
    if ((brick_width <= hole_width && brick_height <= hole_height
        || brick_width <= hole_height && brick_height <= hole_width
        || brick_width <= hole_height && brick_deep <= hole_width
        || brick_height <= hole_height && brick_deep <= hole_width) && brick_deep <= hole_height) {
        return true
    }
    return false
}

console.log(task9(1, 1, 1, 1, 1))
console.log(task9(1, 2, 1, 1, 1))
console.log(task9(1, 2, 2, 1, 1))
