let hBody = document.querySelector('.container')
let hModal = document.querySelector('.burgerMenu')
let hClose = document.querySelector('.closeIcon')

function openMenu(){
    hModal.setAttribute("style", "display:block")
    hModal.removeAttribute("style")
}

function closeMenu(){    
    hModal.removeAttribute("style")
    hModal.setAttribute("style", "display:none")
}