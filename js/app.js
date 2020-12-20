//Global variables
const sections = document.querySelectorAll('section');
const nav = document.getElementById('nav_list');
const links = document.querySelectorAll('a');
let navList = '';

// 1
//list creation with class, href and dataset           
for (var i = 0; i < sections.length; i++) {
    const list = `<li><a class="links_menu" href="#${sections[i].id}">${sections[i].dataset.name}</a></li>`;
    navList += list;      
}

nav.innerHTML = navList;//list is add it to the nav

// 2
//scroll to section
links.forEach(link => {
    link.addEventListener('click', toSection);
})

function toSection(e) { // Because I was unable to move forward, one of the tutors gave me support on this code https://knowledge.udacity.com/questions/409919
	e.preventDefault();// To prevent the default action 
    sections.forEach(section => {
    	if(e.target.href.search(section.id) != -1) { //check if the href contains the section id, if yes, then only scroll
        	section.scrollIntoView({behavior: "smooth"});
    	}
    })
}

//3
//Add and remove activ Classes 
const activ = () => {
    sections.forEach(clas => {
        const view = clas.getBoundingClientRect()
        if (view.top < 50 && view.top >= -800){
            clas.classList.add("active");
        }
        else{
            clas.classList.remove("active"); 
        }
    })
};

window.addEventListener('scroll', activ);

//4
//function to go back to the top
function goToTop() {
    document.documentElement.scrollTop = 0;
}

topButton.addEventListener('click', goToTop)

