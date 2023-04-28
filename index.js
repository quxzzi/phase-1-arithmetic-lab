let num1 = 31, num2 = 2, multiply =num1 * num2;

const random = Math.floor(Math.random() * 10) + 1;

let num3 = 4, num4 = 16;
const mod = num3 % num4;

const numbers = [5, 12, 20, 3, 8];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}