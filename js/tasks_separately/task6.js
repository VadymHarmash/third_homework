// Напишіть JavaScript для пошуку унікальних елементів з двох масивів. (Set не використовувати:))
// Приклад:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

console.log('TASK 6'.padStart(20, '_').padEnd(40, '_'))

const task6 = (arr1, arr2) => {
    const total_arr = [...arr1, ...arr2]
    const uniq_arr = []

    for (let i = 0; i < total_arr.length; i++) {
        if (uniq_arr.indexOf(total_arr[i]) === -1) {
            uniq_arr.push(total_arr[i])
        }
        uniq_arr.sort((a, b) => a - b)
    }
    return uniq_arr
}

console.log(task6([1, 2, 3], [100, 2, 1, 10]));