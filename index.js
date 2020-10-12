import './resources/storage.js'

import api from './resources/api.js'
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

console.log(api.getMethod)

api.getMethod('https://indian-cities-api-nocbegfhqg.now.sh/cities', {
  headers : {
    'Access-Control-Allow-Origin' : '*'
  }
})
.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
}) 
