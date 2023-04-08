document.addEventListener('DOMContentLoaded',(loaded)=>{
    console.log('Document is ready!!!');

});

$(document).ready(function () {
    //lets start by calling our header.html, meta.html, and footer.html
    $("#head").load("meta.html");
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    const dropdownButton = document.getElementById('dropdown-button');
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', function () {
            const color = this.getAttribute('data-color');
            dropdownButton.textContent = `Selected color: ${color}`;
            if (color === 'Blurple') {
                dropdownButton.style.backgroundColor = 'purple';
            } else if (color === 'Special Edition Red') {
                dropdownButton.style.backgroundColor = 'red'; // Change the background color to purple when blue is selected
            }
        });
    });
});






