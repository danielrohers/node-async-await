const getText = () => {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      resolve('Hi :)');
      clearTimeout(timeout);
    }, 3000);
  })
}

const makeText = () => {
  console.log('init');
  getText()
    .then(console.log)
    .then(() => console.log('end'));
}

makeText();
