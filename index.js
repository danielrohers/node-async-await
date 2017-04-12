const getText = () => {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      resolve('Hi :)');
      clearTimeout(timeout);
    }, 3000);
  })
}

const makeText = async () => {
  console.log('init');
  console.log(await getText());
  console.log('end');
}

makeText();
