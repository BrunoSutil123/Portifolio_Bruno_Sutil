let whitemode = localStorage.getItem('whitemode')
const mudancaTema = document.getElementById('mudancaTema')

const enablewhitemode = () => {
    document.body.classList.add('whitemode')
    localStorage.setItem('whitemode', 'active')
}

const disablewhitemode = () => {
    document.body.classList.remove('whitemode')
    localStorage.setItem('whitemode', null)
}

if (whitemode === "active") enablewhitemode()

mudancaTema.addEventListener("click", () => {
    whitemode = localStorage.getItem('whitemode')
    whitemode !== "active" ? enablewhitemode() : disablewhitemode()
})