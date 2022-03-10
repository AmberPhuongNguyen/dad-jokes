const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJokes);

generateJokes();


//ASYNC/AWAIT Method
async function generateJokes() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json();

    jokeElement.innerHTML = data.joke
}

//DOT THEN method
// function generateJokes() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//         //then syntax
//         .then((res) => res.json())
//         .then((data) => {
//             jokeElement.innerHTML = data.joke
//         })
// }