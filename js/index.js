// TASK 1
// Ви повинні реалізувати функцію, яка повертає різницю між найбільшим та найменшим значенням у списку , отриманому як аргумент функції. Масив, який отримує функція як аргумент, може містити позитивні та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль. Спочатку масив буде поданий у невідсортованому вигляді.
// arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
// arr([16]) => 0

console.log('TASK 1'.padStart(20, '_').padEnd(40, '_'))

const task1 = (arr) => {
    if (arr.length <= 1) return 0

    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i + 1]) max = arr[i + 1]
    }

    let min = max
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i]
    }

    return max - min
}
console.log(task1([1, 2, 3, -4]))
console.log(task1([16]))

// TASK 2
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

// TASK 3
// Напишіть функцію, яка повертає true, якщо перший переданий аргумент (рядок) закінчується другим аргументом (також рядком).
// Приклад:
// solution('abc', 'bc') => true
// solution('abc', 'd') => false

console.log('TASK 3'.padStart(20, '_').padEnd(40, '_'))

const task3 = (string, end) => string.includes(end, string.length - end.length)

console.log('"abc" ends "bc"? - ' + task3('abc', 'bc'))
console.log('"I like JavaScript" ends "JavaScript"? - ' + task3('I like JavaScript', 'JavaScript'))

console.log('"I like JavaScript" ends "I like"? - ' + task3('I like JavaScript', 'I like'))
console.log('"abc" ends "ac"? - ' + task3('abc', 'ac'))
console.log('"abc" ends "ab"? - ' + task3('abc', 'ab'))
console.log('"abc" ends "d"? - ' + task3('abc', 'd'))

// TASK 4
// Напишіть функцію, яка отримує масив цілих чисел і повертає масив середніх значень кожного цілого числа та його послідовника, якщо він є.
// Приклад:
// averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]

console.log('TASK 4'.padStart(20, '_').padEnd(40, '_'))

const task4 = (arr) => {
    const averages_array = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== undefined) {
            let a = arr[i]
            let b = arr[i + 1]
            let result = ((a + b) / 2)
            averages_array.push(result)
        }
    }
    return averages_array
}

console.log(task4([2, -2, 2, -2, 2]))
console.log(task4([1, 3, 5, 1, -10]))

// TASK 5
// Створіть функцію, яка приймає рядок і повертає кількість голосних, які у ній.
// Приклад:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1

console.log('TASK 5'.padStart(20, '_').padEnd(40, '_'))

const task5 = (string) => {
    let count = 0
    const vowels = 'aoeui'
    for (let i = 0; i < vowels.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[j].includes(vowels[i])) count++
        }
    }
    return count
}

console.log(task5("Celebration"))
console.log(task5("Palm"))

// TASK 5.2

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

    if (new_string === string) return null

    return new_string
}

console.log(task5_2("This might be a bit hard"))
console.log(task5_2("hello world!"))

// TASK 6
// Напишіть JavaScript для пошуку унікальних елементів з двох масивів. (Set не використовувати:))
// Приклад:
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

console.log('TASK 6'.padStart(20, '_').padEnd(40, '_'))

const task6 = (arr1, arr2) => {
    const total_arr = [...arr1, ...arr2]
    const uniq_arr = []

    for (let i = 0; i < total_arr.length; i++) {
        if (uniq_arr.indexOf(total_arr[i]) === -1) uniq_arr.push(total_arr[i])
        uniq_arr.sort((a, b) => a - b)
    }
    return uniq_arr
}

console.log(task6([1, 2, 3], [100, 2, 1, 10]));

// TASK 7
// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали значеннями, а значення ключами.
// Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

console.log('TASK 7'.padStart(20, '_').padEnd(40, '_'))

const task7 = (obj) => {
    const new_obj = {}

    for (let key in obj) {
        const value = obj[key]
        new_obj[value] = key
    }

    return new_obj
}

console.log(task7({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }))

// TASK 8
// Івана Іванова обікрали. Але його речі було застраховано на певну суму. Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між загальною вартістю цих речей та межею політики.
// Приклад:
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
// Обмеження: Об'єкт завжди повинен містити елементи, сума предметів завжди повинна бути більшою за страховку.

console.log('TASK 8'.padStart(20, '_').padEnd(40, '_'))

const task8 = (obj, insurance) => {
    let keys = Object.keys(obj)
    let total = 0
    let result
    for (let key of keys) {
        total += obj[key]
    }
    result = total >= insurance ? total - insurance : 'The number of things must be more than insurance'

    return result
}

console.log(task8({ "baseball bat": 20 }, 5))
console.log(task8({ skate: 10, painting: 20 }, 19))
console.log(task8({ skate: 200, painting: 200, shoes: 1 }, 400))
console.log(task8({ skate: 200, painting: 200, shoes: 1 }, 402))

// TASK 9
// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з шириною (w) та висотою (h).
// Приклад:
// doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 2, 1, 1) ➞ false
// Обмеження:
// Цеглу можна повернути будь-якою стороною до отвору.
// Ми припускаємо, що цегла підходить, якщо її розміри дорівнюють розмірам отвору (тобто розмір цегли повинен бути меншим або дорівнює розміру отвору, не строго менше).
// Цегла не можна класти під неортогональним кутом.

console.log('TASK 9'.padStart(20, '_').padEnd(40, '_'))

const task9 = (brick_width, brick_height, brick_deep, hole_width, hole_height) => {
    if ((brick_width <= hole_width && brick_height <= hole_height
        || brick_width <= hole_height && brick_height <= hole_width
        || brick_width <= hole_height && brick_deep <= hole_width
        || brick_height <= hole_height && brick_deep <= hole_width) && brick_deep <= hole_height) {
        return true
    }
    return false
}

console.log(task9(1, 1, 1, 1, 1))
console.log(task9(1, 2, 1, 1, 1))
console.log(task9(1, 2, 2, 1, 1))

// TASK 10
// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:\WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу без розширення.

console.log('TASK 10'.padStart(20, '_').padEnd(40, '_'))

const task10 = (path) => path.split('\\').pop().split('.')[0]

console.log(task10('c:\\WebServers\\home\\testsite\\www\\myfile.txt'))

// TASK 11
// Дано два рядки. Чи можна перший рядок отримати з другого циклічним зрушенням?

console.log('TASK 11'.padStart(20, '_').padEnd(40, '_'))

const task11 = (str1, str2) => {
    let str1_new = ''
    let step = 0

    while (step < str1.length) {
        str1_new = str2.substring(step) + str2.substring(0, step)
        if (str1_new === str1) return true
        step++
    }

    return false
}

console.log(task11('abcdef', 'cdefab'))

// TASK 12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b і c наступним чином: вибрати в масиві a два найбільш близькі за значенням елемента, менший з них помістити в масив b, а більший - масив c. Виключити з розгляду в масиві a ці елементи і продовжити вибір з елементів, що залишилися.

console.log('TASK 12'.padStart(20, '_').padEnd(40, '_'))

const task12 = () => {
    const a = [1, 2, 4, 5, 7, 8, 11, 12]
    const c = []
    const b = []
    const sorted_arr = a.sort((a, b) => a - b)

    for (let i = 0; i < sorted_arr.length; i += 2) {
        c.push(sorted_arr[i + 1])
        b.push(sorted_arr[i])
    }

    console.log(b);
    console.log(c);
}

task12()

// TASK 13
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

    if (output_length > input_length) {
        setInterval(() => {
            alert('Чи потрібна допомога')
        }, 5000)
    }

    return final_sentence
}

console.log(task13('This is A 5555 3333 Sentence. https://example.com. vadimvlad20032002@gmail.com. 1 22 123 333 4144 2222 22 22222222222'))

// TASK 14
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок, що відкриваються і закриваються, тобто можна встановити взаємно однозначну відповідність відкриваючих і закриваючих дужок, причому відкриваюча дужка завжди передує тій, що закривається. Якщо баланс дотримується вивести цей текст на html – сторінку і заборонити користувачу копіювати цей текст та перегляд коду сторінки.

console.log('TASK 14'.padStart(20, '_').padEnd(40, '_'))

const wrapper = document.querySelector('.task-text')
wrapper.addEventListener("copy", (event) => {
    alert('Копіювання заборонено')
    event.preventDefault()
})

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

    if (left_bracket_count === right_bracket_count) wrapper.innerHTML += (`${string} <br>`)

    return
}

task14('()')
task14('())(')
task14('()10()')
task14('()10())')
task14('()(())')
task14('())))(((')

// TASK 15
// Написати функцію, яка генерує пароль для користувача. Вимоги: довжина від 6 до 20 символів повинен бути рівно один символ підкреслення, хоча б дві великі літери, не більше 5 цифр, будь-які дві цифри поспіль неприпустимі.

console.log('TASK 15'.padStart(20, '_').padEnd(40, '_'))

const task15 = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '_'

    let password_length = Math.floor(Math.random() * (15)) + 6
    let generated_password = ''
    let uppercase_count = 0
    let number_count = 0

    function get_random_element(array) {
        return array[Math.floor(Math.random() * array.length)]
    }

    while (generated_password.length < password_length) {
        let random_password_sym;

        let character_type = Math.floor(Math.random() * 3)

        if (character_type === 0) {
            random_password_sym = get_random_element(letters)
            if (random_password_sym === random_password_sym.toUpperCase()) uppercase_count++
        } else if (character_type === 1 && number_count < 5) {
            random_password_sym = get_random_element(numbers)
            number_count++
        } else {
            random_password_sym = get_random_element(symbols)
            if (generated_password.includes('_')) {
                continue
            }
        }

        if (random_password_sym.match(/\d/) && generated_password.slice(-1).match(/\d/)) {
            continue
        }

        if (uppercase_count < 2) {
            generated_password.slice(0, -1)
            generated_password += get_random_element(letters).toUpperCase()
            uppercase_count++
        }

        generated_password += random_password_sym
    }

    return generated_password
}

console.log(task15())

// TASK 16
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

// TASK 17
// Напишіть функцію, яка приймає рядок та повертає новий рядок, відсортований за частотою появи символів. Символи з більшою частотою повинні йти раніше за символи з меншою частотою. Використовуйте методи роботи з рядками, об'єктами та сортуванням для вирішення задачі.

console.log('TASK 17'.padStart(20, '_').padEnd(40, '_'))

const task17 = (string) => {
    const symbols = string.split('')
    const frequency = {}
    symbols.forEach(symbol => {
        frequency[symbol] = frequency[symbol] ? frequency[symbol] + 1 : 1
    })

    symbols.sort((a, b) => {
        if (frequency[b] !== frequency[a]) return frequency[b] - frequency[a]
    })

    const sorted_string = symbols.join('')

    return sorted_string
}

console.log(task17('122333444455555'))

// TASK 18
// Дано два рядки. Напишіть функцію, яка знаходить найбільший загальний підрядок у цих рядках. Підрядка може містити лише послідовні символи (без перепусток). Використовуйте методи роботи з рядками та алгоритми пошуку для вирішення задачі.

console.log('TASK 18'.padStart(20, '_').padEnd(40, '_'))

const task18 = (str1, str2) => {
    const double_array = Array.from(Array(str1.length + 1), () => Array(str2.length + 1).fill(0))
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

console.log(task18('qwerty', 'aaaaqwerty'))

// TASK 19
// Напишіть функцію, яка приймає рядок та число зсуву та повертає зашифровану версію рядка за допомогою шифру Цезаря. Кожна літера у вихідному рядку має бути замінена на літеру, що знаходиться на заданій кількості позицій вперед в алфавіті. Використовуйте методи роботи з рядками та масивами для вирішення задачі.

console.log('TASK 19'.padStart(20, '_').padEnd(40, '_'))

const task19 = (string, number) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let ceaser_string = ''

    for (let i = 0; i < string.length; i++) {
        let current_letter = string[i]
        if (letters.includes(current_letter.toLowerCase())) {
            let current_index = letters.indexOf(current_letter.toLowerCase())
            let next_index = (current_index + number) % letters.length
            let next_letter = letters[next_index]

            if (current_letter.toUpperCase() === current_letter) next_letter = next_letter.toUpperCase()
            ceaser_string += next_letter
        } else {
            ceaser_string += current_letter
        }
    }

    return ceaser_string
}

console.log(task19('xyz', 1))
console.log(task19('russia is a terrorist state!', 2))

// TASK 20
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

    if (sorted_first_string === sorted_second_string) return true
    return false
}

console.log(task20('hi!', 'i!h'))
console.log(task20('hi!', 'i!hd'))
console.log(task20('hi!a', 'i!h'))
console.log(task20('I love JS', 'J IloSe v'))

// TASK 21
// Створіть об'єкт "Університет" з методами для додавання студента, видалення студента, отримання інформації про студента за його ідентифікатором та отримання списку студентів певного курсу. Реалізуйте також функцію, яка дає змогу отримати список студентів певного факультету. Використовуйте об'єкти та їх методи для вирішення задачі.

console.log('TASK 21'.padStart(20, '_').padEnd(40, '_'))

const university = {
    students: [],

    addStudent(course, faculty, name) {
        this.students.push({
            id: this.students.length + 1,
            course: course,
            faculty: faculty,
            name: name
        })
    },

    removeStudent(id) {
        const filtered_students = this.students.filter(student => student.id !== id)
        this.students = filtered_students
    },

    getInfoOfStudent(id) {
        return this.students.filter(student => student.id === id)
    },

    getStudentsByCourse(course) {
        const students_by_course = this.students.filter(student => student.course === course)
        return students_by_course
    },

    getStudentsByFaculty(faculty) {
        const students_by_faculty = this.students.filter(student => student.faculty === faculty)
        return students_by_faculty
    }
}

university.addStudent(4, 'Computer Engineering', { firstName: 'Vadym', lastName: 'Harmash' })
university.addStudent(3, 'Computer Sciences', { firstName: 'Ruslan', lastName: 'Stepanenko' })
university.addStudent(2, 'Computer Sciences', { firstName: 'Julia', lastName: 'Kravets' })
university.addStudent(2, 'Computer Sciences', { firstName: 'Ihor', lastName: 'Nesterenko' })
university.addStudent(4, 'Computer Engineering', { firstName: 'Yaroslav', lastName: 'Kotyk' })
university.addStudent(4, 'Computer Engineering', { firstName: 'Vyacheslav', lastName: 'Kupriy' })

university.removeStudent(3)
university.removeStudent(1)

console.log(university.getStudentsByFaculty('Computer Sciences'))
console.log(university.getStudentsByCourse(3))
console.log(university.getStudentsByCourse(4))
console.log(university.getInfoOfStudent(2))
console.log(university.getInfoOfStudent(3))
console.log(university.getInfoOfStudent(4))

// TASK 22
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