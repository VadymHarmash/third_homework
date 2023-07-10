// Дано рядок, що складається зі слів, розділених пробілами. Сформувати новий рядок з такими властивостями: 
// а) усі слова у нижньому регістрі, крім першої літери першого слова; 
// б) усі посилання у словах замінюються на "[посилання заборонено]"; 
// в) всі email замінюються на "[контакти заборонені]"; 
// г) усі слова довжини понад 3 символи, що містять лише цифри, видаляються.
// Якщо кількість символів в отриманому рядку буде більшої ніж кількість символів у вихідному, то запустити функцію, що буде кожні 5 секунд в alert буде питати, чи потрібна нам допомога.

console.log('TASK 13'.padStart(20, '_').padEnd(40, '_'))

const task13 = (string) => {
    let words = string.split(' ')
    const url_regex = /(https?:\/\/[^\s]+)/
    const email_regex = /^[a-zA-Z][0-9a-zA-Z_]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/i
    const number_regex = /^[0-9]+$/

    let final_sentence = ''

    let input_length = string.split('').length
    let output_length = 0

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase()
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)

        if (url_regex.test(words[i])) words[i] = '[посилання заборонено]'

        if (email_regex.test(words[i])) words[i] = '[контакти заборонені]'

        if (words[i].length > 3 && number_regex.test(words[i])) continue
        
        final_sentence += words[i] + ' '
    }

    output_length = final_sentence.split('').length

    if(output_length > input_length) {
        setInterval(() => {
            alert('Чи потрібна допомога')
        }, 5000)
    }

    return final_sentence
}

console.log(task13('This is A 5555 3333 Sentence. https://example.com. vadimvlad20032002@gmail.com. 1 22 123 333 4144 2222 22 22222222222'))