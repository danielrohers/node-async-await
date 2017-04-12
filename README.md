# node-async-await

Example node async-await

## Old (only with promises)

[index-old.js](index-old.js)
```js
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
```

[series-old.js](series-old.js)
```js
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
```

## New (with async-await)

[index.js](index.js)
```js
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
```
[series.js](series.js)
```js
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
```

