console.log('Hello world from js file')

let o = {
  name : 'Ravindra Singh',
  age : 18
}
localStorage.setItem('user', JSON.stringify(o))

console.log('1')

let t = setTimeout(() => {
  document.getElementById('user-info').innerHTML = JSON.parse(localStorage.getItem('user')).name
}, 3000)

console.log('2', t)

const d = () => {
  console.log(typeof d)
}
d();
