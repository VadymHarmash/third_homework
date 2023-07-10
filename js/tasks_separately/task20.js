// Напишіть функцію, яка приймає два рядки та перевіряє, чи є вони анаграмами (чи мають однакові символи у різному порядку). Функція повинна повернути true, якщо рядки є анаграмами, і false інакше. Використовуйте методи роботи з рядками для вирішення задачі.

console.log('TASK 20'.padStart(20, '_').padEnd(40, '_'))

const task20 = (string1, string2) => {

    let sorted_first_string = ''
    let sorted_second_string = ''

    string1.split('').forEach(letter => {
        sorted_first_string += letter
    })
    
    string2.split('').forEach(letter => {
        sorted_second_string += letter
    })

    function sort_string(string) {
        return string.split('').sort((a, b) => {
            return a.localeCompare(b)
        }).join('')
    }

    sorted_first_string = sort_string(sorted_first_string)
    sorted_second_string = sort_string(sorted_second_string)

    if(sorted_first_string === sorted_second_string) return true
    return false
}

console.log(task20('hi!', 'i!h'))
console.log(task20('hi!', 'i!hd'))
console.log(task20('hi!a', 'i!h'))
console.log(task20('I love JS', 'J IloSe v'))