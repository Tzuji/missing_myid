const mainPage = document.getElementById("center");
const selectPage = ["<iframe src='firstPage.html'></iframe>","<iframe src='about.html'></iframe>", "<iframe src='charactors.html'></iframe>",];

function centerChange(n){
    mainPage.innerHTML = selectPage[n];
}