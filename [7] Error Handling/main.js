function checkZero(num1, num2) {
  if (num2 === 0) {
    throw new Error('Шиииш это ноль');
  }
}

try {
  checkZero(10, 0);
} catch (error) {
  console.error(error);
}