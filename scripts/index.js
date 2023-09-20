'use strict'


// const Email = document.querySelector('#Email');
// const submit = document.querySelector('#submit');
const form = document.querySelector('#form');

const url = 'https://jsonplaceholder.typicode.com/posts'

// const getResurce = (url) => {
//   const responce = fetch(url)
//   .then((e) => {
//     console.log(e)
//     return e.json();
//   })
  
//   responce.then((result) => {
//     console.log('result ', result);
//     // return result
//   });

//   console.log('responce ',responce)
// }

const sendData = (url, data) => {
  const responce = fetch(url, {
    method: 'POST',
    body: data,
  })

  // return responce.JSON()
}

function formSubmitFunction(even) {
  even.preventDefault()

  const formData = new FormData(form)

  const email = formData.get('email');
  const massage = formData.get('massages');

  console.log('email ', email);
  console.log('massage ', massage);

  const massages = []

  massages.push({
    massage: massage,
    email: email
  })
  

  console.log(massages)

  sendData(url, formData)

  even.target.reset()

}

form.addEventListener('submit', formSubmitFunction)