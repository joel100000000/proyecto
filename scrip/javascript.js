var productos = document.querySelectorAll('.producto');
for (var j = 0; j < productos.length; j++) {
    productos[j].onmouseover = function() {
        this.style.borderColor = 'blue';
    };
    productos[j].onmouseout = function() {
        this.style.borderColor = '#ddd';
    };
    productos[j].onclick = function() {
        alert('Has seleccionado el producto: ' + this.querySelector('h2').textContent);
    };
}