// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
// Приклад:
// removeABC("This might be a bit hard") ➞ "This might e it hrd"
// removeABC("hello world!") ➞ null

console.log('TASK 5_2'.padStart(20, '_').padEnd(40, '_'))

const task5_2 = (string) => {
    const abc = 'abc'
    let new_string = string

    for (let letter of abc) {
        new_string = new_string.split(letter).join('')
    }

    if(new_string === string) return null

    return new_string
}

console.log(task5_2("This might be a bit hard"))
console.log(task5_2("hello world!"))