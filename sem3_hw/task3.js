// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cubing(num)
{
  return Math.pow(num, 3);
}
console.log(cubing(2) + cubing(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст
// "Размер заработной платы за вычетом налогов равен значение"

function salary() {
  let userSalary = +prompt('Введите размер вашей заработной платы');
  if (isNaN(userSalary)) {
    alert('Вы ввели некорректное значение, повторите ввод')
    salary();
  } else {
    alert(`Размер заработной платы за вычетом налогов равен: ${userSalary * 0.87}`);
  }
}
salary();

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

function maxNumber(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

let userNum1 = +prompt('Введите первое число');
let userNum2 = +prompt('Введите второе число');
let userNum3 = +prompt('Введите третье число');

alert(`Максимальное число среди этих чисел: ${maxNumber(userNum1, userNum2, userNum3)}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и
// выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность,
// функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.


let sum = (num1, num2) => num1 + num2;
let multiplication = (num1, num2) => num1 * num2;
let dividing = (num1, num2) => num1 / num2;
function subtracting(num1, num2) {
  if (num1 === num2) {
    return 0;
  } else {
    return Math.max(num1, num2) - Math.min(num1, num2);
  }
}

console.log(sum(2, 3));
console.log(multiplication(2, 3));
console.log(dividing(2, 3));
console.log(subtracting(2, 3));
console.log(subtracting(3, 3));