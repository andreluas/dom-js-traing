const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.onclick = function(){
    modalWrapper
        .classList
        .remove('invisible')
}

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape'

    if(isEscKey === true){
        modalWrapper.classList.add('invisible')
    }
})