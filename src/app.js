

const overlay = document.querySelector('.active');
const items = document.querySelectorAll('.item');

function show(e) {
    overlay.style.display= "flex";
    this.classList.add("choose");
    console.log(e.target);
}


items.forEach(function(item) {
    item.addEventListener('click', show)
} );
    

