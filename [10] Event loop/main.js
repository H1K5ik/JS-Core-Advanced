function getRandomNumber() {
  const random = Math.floor(Math.random() * 10 + 1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random <= 5) {
        resolve(random);
      } else {
        reject(new Error(`Число ${random} больше 5`));
      }
    }, 1000); 
  });
}

getRandomNumber()
  .then((result) => {
    console.log(`Сгенерированное число: ${result}`);
  })