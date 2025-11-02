/**
 * Функція, що повертає суму двох чисел.
 * @param {number} a Перше число.
 * @param {number} b Друге число.
 * @returns {number} Сума чисел a та b.
 */
function add(a, b) {
    return a + b;
}

// 1. Отримання першого числа від користувача
let inputA = prompt("Введіть перше число (a):");

// 2. Отримання другого числа від користувача
let inputB = prompt("Введіть друге число (b):");

// 3. Перетворення рядків на числа
// Це критично важливо, інакше JS просто "склеїть" рядки (наприклад, "5" + "3" = "53")
let numberA = Number(inputA);
let numberB = Number(inputB);

// 4. Виклик функції та вивід результату
// Використовуємо console.log, щоб побачити результат у Консолі розробника (F12)
let result = add(numberA, numberB);

console.log(`Ви ввели: ${numberA} та ${numberB}`);
console.log(`Сума чисел дорівнює: ${result}`);