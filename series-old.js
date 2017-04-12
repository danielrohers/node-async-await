const getText = () => {
  return new Promise((resolve, reject) => {
    let timeout = setTimeout(() => {
      console.log('Hi :)');
      resolve();
      clearTimeout(timeout);
    }, 1000);
  })
}

const makeText = () => {
  console.log('init');
  getText()
    .then(getText)
    .then(getText)
    .then(getText)
    .then(getText)
    .then(() => console.log('end'))
}

makeText();
