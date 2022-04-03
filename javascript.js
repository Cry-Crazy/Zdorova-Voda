const hamb = document.querySelector('#hamb')
const popup = document.querySelector('#popup')
const menu = document.querySelector('#menu').cloneNode(1)
const body = document.querySelector('body')
const form = document.querySelector('.popup__btn')
const popupBig = document.querySelector('.popup__container')
const popupClose = document.querySelector('.popup__close')

popupClose.addEventListener('click', popupActive)
form.addEventListener('click', popupActive)
hamb.addEventListener('click', hambHandler);

function popupActive(e){
    e.preventDefault()
    popupBig.classList.toggle('active')
}

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open')
    hamb.classList.toggle('active')
    body.classList.toggle('noscroll')
    renderPopup()
}
function renderPopup(){
    popup.appendChild(menu)
}


// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('#form')
//     form.addEventListener('submit', formSend)

//     async function formSend(e) {
//         e.preventDefault()
//         let error = formValidate(form)

//         let formData  = new formData(form);
//         formData.append()

//     }
//     function formValidate(form){
//         let error = 0 
//         let formReq = document.querySelectorAll('._req')
//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input)

//             if(input.classList.contains('_email')){

//             }
//         }
//     }
//     function formAddError(input){
//         input.partnerElement.classList.add('_error')
//         input.classList.add('_error')
//     }
//     function formRemoveError(input){
//         input.partnerElement.classList.remove('_error')
//         input.classList.remove('_error')
//     }
// })