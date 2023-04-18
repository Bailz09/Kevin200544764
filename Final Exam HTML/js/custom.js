document.addEventListener('DOMContentLoaded',(loaded)=>{
    console.log('Document is ready!!!');

});

$(document).ready(function () {
    //lets start by calling our header.html, meta.html, and footer.html
    $("#head").load("meta.html");
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});