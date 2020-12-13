//Global Variables
const sections = document.querySelectorAll('section')
const nav = document.getElementById('nav_list');
let manyList = ''
             
// 1
//list creation with class, href and dataset
for (var i = 0; i < sections.length; i++) {
    const list = `<li class="links_menu"><a href="#${sections[i].id}"></a>${sections[i].dataset.name}</li>`;
    manyList += list;      
}
//list is add it to the nav
nav.innerHTML = manyList;

// 2
//scroll to section
const linkes = document.querySelectorAll('a')
linkes.forEach(link => {
    link.addEventListener('click', toSection())
})

function toSection() {
    sections.forEach(section => {
        const sectionsIds = section.id
    })
    sectionsIds.scrollIntoView();
}

//3
//function to go back to the top
function goToTop() {
    document.documentElement.scrollTop = 0;
}

topButton.addEventListener('click', goToTop)

