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

    console.log('Масив b:', b);
    console.log('Масив c:', c);
}

task12()