// В заданому масиві найменший елемент помістити на перше місце, найменший з тих, що залишилися - на останнє місце, наступний - передостаннє і так далі - до середини масиву.

console.log('TASK 16'.padStart(20, '_').padEnd(40, '_'))

const task16 = (arr) => {
    const sorted_array = arr.sort((a, b) => a - b)

    const left_array = []
    const right_array = []
    let move_to_left = true

    for (let i = 0; i < sorted_array.length; i++) {
        if (move_to_left) {
            left_array.push(sorted_array[i])
            move_to_left = false
        } else {
            right_array.unshift(sorted_array[i])
            move_to_left = true
        }
    }

    return [...left_array, ...right_array]
}

console.log(task16([1, 2, 3, 4, 5, 6]))
console.log(task16([2, 3, 6, 8, 10]))