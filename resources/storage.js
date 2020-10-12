// Local Storage
const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getLocalStorage = (key, value) => {
  return JSON.parse(localStorage.getItem(key))
}

let user = {
  name : 'Ravindra Singh Sisodiya',
  age : 18,
  code : '34FDw#$'
}

setLocalStorage('user', user)

const getName = () => {
  console.log(getLocalStorage('user').name)
}

getName();

