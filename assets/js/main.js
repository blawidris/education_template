
let select = (query, bool) =>{
    if(bool){
        return document.querySelectorAll(+query)
    }else{
        return document.querySelector(query)
    }
};

// Main header
let mainHeader = this.document.querySelector('.main-header')
let navHeader = document.querySelector('#nav-header');
window.addEventListener('scroll', function(e){
    e.preventDefault();
    
    let yOffset = this.pageYOffset;
    if(yOffset > mainHeader.clientHeight){
        navHeader.classList.add('fixed-top')
    }else{
        navHeader.classList.remove('fixed-top')
    }
})

// Mobile Menu 
let mobileMenu = document.querySelector('#mobile-menu');
mobileMenu.addEventListener('click', function(e){
    e.preventDefault();
    let mainNav = document.querySelector('.main-nav')
    let menuIcon = document.querySelector('#mobile-menu i')
    mainNav.classList.toggle('active')
    menuIcon.classList.toggle('bi-x')
    menuIcon.classList.toggle('bi-list')
    // console.log(e)
})