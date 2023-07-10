// Створіть функцію, яка приймає рядок і повертає кількість голосних, які у ній.
// Приклад:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1

console.log('TASK 5'.padStart(20, '_').padEnd(40, '_'))

const task5 = (string) => {
    let count = 0
    const vowels = 'aoeui'
    for(let i = 0; i < vowels.length; i++){
        for(let j = 0; j < string.length; j++){
            if(string[j].includes(vowels[i])) count++
        }
    }
    return count
}

console.log(task5("Celebration"))
console.log(task5("Palm"))