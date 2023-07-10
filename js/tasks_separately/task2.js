// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді масиву тільки ті слова, довжина яких перевищує число.

console.log('TASK 2'.padStart(20, '_').padEnd(40, '_'))

const task2 = (string, length) => {
    const words = string.split(' ')
    const symbols = `'";:/?.>,[{}](*&^%$#@!)`
    const filtered_words = words.map((word) => {
        let filtered_word = word
        for (let symbol of symbols) {
            filtered_word = filtered_word.replace(symbol, '')
        }
        return filtered_word
    })

    let current_words = []
    let actual_length = length
    for (let word of filtered_words) {
        if (word.length === actual_length) current_words.push(word)
    }
    if (current_words.length === 0) return `You have not words with ${length} letters`
    return current_words
}
console.log(task2('HTML, CSS, JS, Java', 2))
console.log(task2('HTML, CSS, JS, Java', 3))
console.log(task2('HTML, CSS, JS, Java', 4))
console.log(task2('HTML, CSS, JS, Java', 5))
console.log(task2('I want to check: this function; on right work. So let`s do it!', 4))