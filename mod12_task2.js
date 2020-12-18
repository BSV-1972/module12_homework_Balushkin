const listProps = {
  a: 1,
  b: 2,
  c: 3,
}

function getHasProperty (obj, prop) 
{
  console.log(prop in obj)
}

getHasProperty(listProps, 'b')