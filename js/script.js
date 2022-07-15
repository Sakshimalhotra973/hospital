const overlay = document.querySelector(".overlay");
const hamburger1 = document.querySelector(".hamburger-lines");
const sidebar = document.querySelector(".sidebar");
hamburger1.addEventListener('click', (e) => {
    sidebar.classList.add("open");
    overlay.classList.add('show');
});

const close1 = document.querySelector(".sidebar-upper");
close1.addEventListener('click', (e) => {
    closeSidebar();
});

overlay.addEventListener("click", () => {
    closeSidebar();
});

function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
}

const allbutton = document.querySelectorAll(".sidebar-button");
allbutton.forEach(element => {
    element.addEventListener("click" , () => {
        element.classList.toggle("rotate");
        element.nextElementSibling.classList.toggle("active");        
    });
});


































