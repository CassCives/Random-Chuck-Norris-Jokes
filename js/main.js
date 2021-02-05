document.querySelector("button").addEventListener("click", getJoke)
const jokeDisplay = document.querySelector("h2")
function getJoke(){
    let url = "http://api.icndb.com/jokes/random?escape=javascript"
    fetch(url)
    .then(res => res.json())
    .then(data => {
        jokeDisplay.innerText = data.value.joke
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
