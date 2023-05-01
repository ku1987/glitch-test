// client-side js
// run by the browser each time your view template is loaded

console.log("hello world :o");

// In case you want to implement the form validation in JavaScript,
// but probably doing it by HTML5 attributes would be enough.

// listen for the form to be submitted and add a new dream when it is
// const handleSubmit = (event) => {
//   const errorText = document.getElementById('error-text');
//   errorText.classList.add('display-none');
//   const userId = document.getElementById('user-id');
//   const giftText = document.getElementById('gift-text');
//   if (!userId || !userId.value || !giftText || !giftText.value) {
//     errorText.classList.remove('display-none');
//     errorText.innerHTML = 'Please enter user ID and gift text.'
//     event.preventDefault();
//     return;
//   }
//   if (giftText.value.length > 100) {
//     errorText.classList.remove('display-none');
//     errorText.innerHTML = 'Please enter text no more than 100 chars.'
//     event.preventDefault();
//     return;
//   }
// };

// const form = document.getElementById('form');
// form.addEventListener('submit', handleSubmit);
