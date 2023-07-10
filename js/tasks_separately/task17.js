// Напишіть функцію, яка приймає рядок та повертає новий рядок, відсортований за частотою появи символів. Символи з більшою частотою повинні йти раніше за символи з меншою частотою. Використовуйте методи роботи з рядками, об'єктами та сортуванням для вирішення задачі.

console.log('TASK 17'.padStart(20, '_').padEnd(40, '_'))

const task17 = (string) => {
    const symbols = string.split('')
    const frequency = {}
    symbols.forEach(symbol => {
        frequency[symbol] = frequency[symbol] ? frequency[symbol] + 1 : 1
    })

    symbols.sort((a, b) => {
        if(frequency[b] !== frequency[a]) return frequency[b] - frequency[a]
    })

    const sorted_string = symbols.join('')

    return sorted_string
}

console.log(task17('122333444455555'))