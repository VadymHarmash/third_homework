// Напишіть функцію, яка отримує масив цілих чисел і повертає масив середніх значень кожного цілого числа та його послідовника, якщо він є.
// Приклад:
// averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]

console.log('TASK 4'.padStart(20, '_').padEnd(40, '_'))

const task4 = (arr) => {
    const averages_array = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i + 1] !== undefined) {
            let a = arr[i]
            let b = arr[i + 1]
            let result = ((a + b) / 2)
            averages_array.push(result)
        }
    }
    return averages_array
}

console.log(task4([2, -2, 2, -2, 2]))
console.log(task4([1, 3, 5, 1, -10]))