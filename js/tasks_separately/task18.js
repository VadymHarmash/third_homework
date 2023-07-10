// Дано два рядки. Напишіть функцію, яка знаходить найбільший загальний підрядок у цих рядках. Підрядка може містити лише послідовні символи (без перепусток). Використовуйте методи роботи з рядками та алгоритми пошуку для вирішення задачі.

console.log('TASK 18'.padStart(20, '_').padEnd(40, '_'))

const task18 = (str1, str2) => {
    const double_array = Array.from(Array(str1.length + 1), () => Array(str2.length + 1).fill(0))
    console.log(double_array)
    let max_length = 0
    let end_index = 0

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                double_array[i][j] = double_array[i - 1][j - 1] + 1
                if (double_array[i][j] > max_length) {
                    max_length = double_array[i][j]
                    end_index = i - 1
                }
            }
        }
    }

    return str1.substr(end_index - max_length + 1, max_length)
}

console.log(task18('qwerty', 'aaaqweqqq'))