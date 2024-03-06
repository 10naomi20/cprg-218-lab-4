let dt = new Date();
document.getElementById("year").textContent = dt.getFullYear();


function openAccordion(id) {
    document.getElementById(id).setAttribute("open",true);
    document.getElementById(id).scrollIntoView();
}