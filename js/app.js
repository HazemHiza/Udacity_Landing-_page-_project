/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

//Adapting the static sections of my web page into collapsible sections. 
document.querySelectorAll('.accord__btn').forEach(button => {
    button.addEventListener('click', () => {
        const accordContent = button.nextElementSibling;
             button.classList.toggle('accord__btn--active');
            if(button.classList.contains('accord__btn--active')) {
                 accordContent.style.maxHeight = accordContent.scrollHeight + 'px';
         } else {
             accordContent.style.maxHeight = 0;
           } 
    });
});
/**
 * Define Global Variables
*/
//Collecting all sections in one global var.
let sections = document.querySelectorAll('section');

//the global navigation bar.
const Bar = document.getElementById('navbar__list');

/**
 * End Global Variables
*/

// Building my navigation bar by generating its parts.
let createBarElements = () => {
    for (const section of sections) {
        sectionTitle = section.getAttribute('data-nav');
        secLink = section.getAttribute('id');

        // Creating a new list for each section.
        myList = document.createElement('li');
        
        // Scrolling to any section in the page through clicking its button.
        myList.innerHTML = `<a class='menu__link' href='#${secLink}'>${sectionTitle}</a>`;

        //Appending all the lists to the navigation bar.
        Bar.appendChild(myList);
    }
};

// Starting Helper Functions.
function viewSec(sec) {
    let secLocation = sec.getBoundingClientRect();
    return (secLocation.top >= 0);
}

// Adding 'the active state' to the section when near top of viewport.
function changeActivity() {
    for (section of sections) {
        if (viewSec(section)) {
            if (section.classList!=='your-active-class') {
                section.classList.add('your-active-class');
            }
            } else { section.classList.remove('your-active-class');
        }
    }
}

/**S
 * End Helper Functions
*/

//Trigger main function.
createBarElements();

// Making a scroll button to the top of the page.
let goTop = document.getElementById('topButt');
window.onscroll = function() {
    if(document.documentElement.scrollTop > 2200) { 
        goTop.style.display = "block";  
    } else 
        goTop.style.display = "none";
    }


//Start Events.
document.addEventListener('scroll',changeActivity);
goTop.addEventListener("click",function() {
    window.scroll({
    top  : 0,
    left : 0,
});
});

/**
 * End Main Functions
  
*/


