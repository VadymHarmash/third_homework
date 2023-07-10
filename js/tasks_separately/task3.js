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