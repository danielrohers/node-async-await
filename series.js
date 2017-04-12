const getText = () => {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      console.log('Hi :)');
      resolve();
      clearTimeout(timeout);
    }, 1000);
  })
}

const makeText = async () => {
  console.log('init');
  await getText();
  await getText();
  await getText();
  await getText();
  await getText();
  console.log('end');
}

makeText();
