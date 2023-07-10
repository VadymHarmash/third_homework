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