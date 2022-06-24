let openSnackBtn = document.getElementById('open-snackbar')
let closeSnackBtn = document.getElementById('close-snackbar')
openSnackBtn.onclick = function () {
    let snackbar = document.getElementById('snackbar')

    snackbar.style.display = 'block'
    snackbar.style.visibility = 'visible'

    setTimeout(() => {
        snackbar.style.display = 'none'
    }, 5000);
}

closeSnackBtn.onclick = function(){
    snackbar.style.display = 'none'
}

let openModalBtn = document.getElementById('open-modal');
openModalBtn.onclick = function () {
    let modal = document.getElementById('modal-overlay');
    modal.style.display = 'block'
}
let closeModalBtn = document.getElementById('close-modal')
closeModalBtn.onclick = function () {
    let modal = document.getElementById('modal-overlay');
    modal.style.display = 'none'
}

const showMessage = function (response) {
    let messageArea = document.getElementById('message-area')
    messageArea.innerHTML = response.message
    messageArea.style.color = response.status === 500 ? "red": "green"
    openSnackBtn.click()
}
