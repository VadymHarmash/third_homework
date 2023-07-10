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

console.log(task7({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}))

