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
            if (random_password_sym === random_password_sym.toUpperCase()) {
                uppercase_count++
            }
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