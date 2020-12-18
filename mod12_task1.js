const func = {
 a: 1,
 b: 2
}

function getOwnProps(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      console.log(`${key} - ${obj[key]}`);
  }
}

getOwnProps(func);
