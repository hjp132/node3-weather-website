

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message0ne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');




weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    message0ne.textContent = 'Loading...';
    messageTwo.textContent = '';

    const location = search.value;



    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                message0ne.textContent = data.error
            } else {
                message0ne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.location);
                console.log(data.forecast);
            }
        })
    })
})