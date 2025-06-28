

const modal = document.querySelector('.modal');
const mascara = document.querySelector('.mascara-modal');


function mostrarModal() {
    modal.style.left = '50%';
    modal.style.visibility = 'visible';
}

function fecharModal() {
    modal.style.left = '-30%';
    modal.style.visibility = 'hidden';
}