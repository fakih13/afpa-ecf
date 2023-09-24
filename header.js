const buttonMenu = document.getElementById('buttonMenu')
const listMenu = document.getElementById('listMenu')
const closeMenu = document.getElementById('closeMenu')

buttonMenu.addEventListener('click', ()=>{
    listMenu.style.display = "block"
})

closeMenu.addEventListener('click', ()=>{
    listMenu.style.display = "none"
})

const leMenu = document.getElementById('leMenu')

leMenu.addEventListener('click',()=>{
    console.log(leMenu.children)
})