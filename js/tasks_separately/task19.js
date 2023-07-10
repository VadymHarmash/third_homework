// Напишіть функцію, яка приймає рядок та число зсуву та повертає зашифровану версію рядка за допомогою шифру Цезаря. Кожна літера у вихідному рядку має бути замінена на літеру, що знаходиться на заданій кількості позицій вперед в алфавіті. Використовуйте методи роботи з рядками та масивами для вирішення задачі.

console.log('TASK 19'.padStart(20, '_').padEnd(40, '_'))

const task19 = (string, number) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let ceaser_string = ''

    for(let i = 0; i < string.length; i++){
        let current_letter = string[i]
        if(letters.includes(current_letter.toLowerCase())){
            let current_index = letters.indexOf(current_letter.toLowerCase())
            let next_index = (current_index + number) % letters.length
            let next_letter = letters[next_index]

            if(current_letter.toUpperCase() === current_letter) next_letter = next_letter.toUpperCase()
            ceaser_string += next_letter
        } else {
            ceaser_string += current_letter
        }
    }

    return ceaser_string
}

console.log(task19('xyz', 1))
console.log(task19('russia is a terrorist state!', 1))
console.log(task19('russia is a terrorist state!', 2))