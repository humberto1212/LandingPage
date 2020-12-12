//Global variables 
const navigation = document.getElementById('nav_list');
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('li')
const TopButton = document.getElementById("topButton");
let navLinks = '';

//Navigation Builder for all sections & scroll to anchors.
const navMaker = function() {
    sections.forEach(section => {
                const sectId = section.id;
                const sectNav = section.dataset.name;
                navLinks = navLinks + `<li><a class="links_menu" href="#${sectId}">${sectNav}</a></li>`;
    });
    navigation.innerHTML = navLinks; 
}
navMaker();

//to show where you are in the page
const level = (section) => {
    return Math.floor(section.getBoundingClientRect().top)
}

// to delate the class
const delateClass = (section) => {
    section.classList.remove('activ-section');
    document.querySelectorAll(`[href="#${section.id}"]`)[0].classList.remove('active');
}

//to add the class
const addClass = (conditioning, section) => {
    if (conditioning) {
        section.classList.add('activ-section');
    }
}

//function to activate de viewer depending of the level of scrolling
const classActivation = () => {
    
    sections.forEach(section => {
        const elementLevel = level(section);

        inviewport = () => elementLevel < 50  && elementLevel >= -650

        delateClass(section);
        addClass(inviewport(), section);
    });
}

window.addEventListener('scroll', classActivation);

//function to go back to the top
function gototop() {  
    document.documentElement.scrollTop = 0;
}

TopButton.addEventListener('click', gototop);
  
  

