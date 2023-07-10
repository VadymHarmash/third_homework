// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:\WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу без розширення.

console.log('TASK 10'.padStart(20, '_').padEnd(40, '_'))

const task10 = (path) => path.split('\\').pop().split('.')[0]

console.log(task10('c:\\WebServers\\home\\testsite\\www\\myfile.txt'))