const navbar = document.querySelector('.navbar')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const overLay= document.querySelector('.overlay')

const toggleMenu = function(){
    navbar.classList.toggle('active')
    overLay.classList.toggle('active')
}

openMenu.addEventListener('click',toggleMenu)
closeMenu.addEventListener('click',toggleMenu)
/* faq */
const questionTitle = document.querySelectorAll('.question-title')
const toggleAccordion = function(){
    this.classList.toggle('active')
}

questionTitle.forEach(function(question){
    question.addEventListener('click',toggleAccordion)
})

