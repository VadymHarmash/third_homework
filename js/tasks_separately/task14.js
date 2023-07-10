// Перевірити, чи дотримується в заданому тексті баланс круглих дужок, що відкриваються і закриваються, тобто можна встановити взаємно однозначну відповідність відкриваючих і закриваючих дужок, причому відкриваюча дужка завжди передує тій, що закривається. Якщо баланс дотримується вивести цей текст на html – сторінку і заборонити користувачу копіювати цей текст та перегляд коду сторінки.

console.log('TASK 14'.padStart(20, '_').padEnd(40, '_'))

const task14 = (string) => {
    
    console.log('Result is on the document')

    let left_bracket_count = 0
    let right_bracket_count = 0
    let compare_array = []

    for (let letter of string) {
        if (letter === ('(')) {
            compare_array.push(letter)
            left_bracket_count++
        }
        if (letter === (')')) {
            right_bracket_count++
            if (compare_array.length === 0) return false
            compare_array.pop()
        }
    }

    if (left_bracket_count === right_bracket_count) {
        wrapper.innerHTML += (`${string} <br>`)
    }

    return
}

task14('()')
task14('())(')
task14('()10()')
task14('()10())')
task14('()(())')
task14('())))(((')