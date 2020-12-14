//Global Variables
const sections = document.querySelectorAll('section')
const nav = document.getElementById('nav_list');
let manyList = ''
           

// 1
//list creation with class, href and dataset
for (var i = 0; i < sections.length; i++) {
    const list = `<li><a class="links_menu" href="#${sections[i].id}">${sections[i].dataset.name}</a></li>`;
    manyList += list;      
}
//list is add it to the nav
nav.innerHTML = manyList;

// 2
//scroll to section
const linkes = document.querySelectorAll('a')
linkes.forEach(link => {
    link.addEventListener('click', toSection)
})

function toSection(e) {
	e.preventDefault();// To prevent the default action when an anchor tag is clicked
    sections.forEach(section => {
    	if(e.target.href.search(section.id) != -1) { //check if the href contains the section id, if yes, then only scroll
        	section.scrollIntoView({behavior: "smooth"});
    	}
    })
}

//3
    //activClasses = document.querySelectorAll('.active')
   sections.forEach(sect => {
        sect.addEventListener('scroll', activ)
    })

    function activ() {
        sections.forEach(clas => {
            const view = clas.getBoundingClientRect()
            if (view.top < 50 && view.top >= -650){
                clas.classList.add("active");
            }
            else{
                clas.classList.remove("active"); 
        }
    })
};

//4
//function to go back to the top
function goToTop() {
    document.documentElement.scrollTop = 0;
}

topButton.addEventListener('click', goToTop)

