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