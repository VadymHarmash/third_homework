// Напишіть програму, яка аналізує текст та виводить статистику про кількість слів, речень та символів у тексті. Реалізуйте також функцію, яка визначає слова, що найчастіше зустрічаються в тексті. Використовуйте методи роботи з рядками, регулярні вирази та об'єкти для вирішення задачі.

console.log('TASK 22'.padStart(20, '_').padEnd(40, '_'))

const text_checker = {
    text: 'Lorem Lorem Lorem Lorem ipsum ipsum ipsum ipsum dolor sit amet consectetur adipisicing elit. A nisi expedita error enim debitis quod eligendi asperiores reprehenderit, hic necessitatibus?',
    sentences_count: 0,
    words_count: 0,
    symbols_count: 0,

    getSentences() {
        const sentences = this.text.split('.')
        this.sentences_count = sentences.length
        return this.sentences_count
    },

    getWords() {
        const words = this.text.split(/\W+/)
        this.words_count = words.length
        return this.words_count
    },

    getSymbols() {
        const symbols = this.text.split('').join('').replace(/ /g, '')
        this.symbols_count = symbols.length
        return this.symbols_count
    },

    findMostFrequentWords() {
        const words = this.text.split(/\W+/)
        const word_counts = {}
        let max_count = 0

        for (let i = 0; i < words.length; i++) {
            const word = words[i].toLowerCase()

            word in word_counts ? word_counts[word]++ : word_counts[word] = 1

            if (word_counts[word] > max_count) max_count = word_counts[word]
        }

        const most_frequent_words = []
        for (const word in word_counts) {
            if (word_counts[word] === max_count) most_frequent_words.push(word)
        }

        return most_frequent_words
    }
}

console.log(text_checker.text)
console.log(text_checker.getSentences())
console.log(text_checker.getWords())
console.log(text_checker.getSymbols())
console.log(text_checker.findMostFrequentWords())