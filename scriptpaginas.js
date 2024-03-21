//ver mas proyecto supra

function toggleContentSupra() {
    var button = document.getElementById('ver-mas-btn-supra');
    var contenidoAdicional = document.getElementById('contenido-adicional-supra');

    if (button && contenidoAdicional) {
        contenidoAdicional.classList.toggle('visible');

        button.classList.toggle('active');

        var verMasLabel = button.querySelector('.ver-mas-label');
        verMasLabel.textContent = (contenidoAdicional.classList.contains('visible')) ? '↑' : '↓';
    } else {
        console.error('Elementos no encontrados. Asegúrate de que los identificadores sean correctos.');
    }
}

//Ver Mas Proyecto Informativa

function toggleContentInfor() {
    var button = document.getElementById('ver-mas-btn-infor');
    var contenidoAdicional = document.getElementById('contenido-adicional-infor');

    if (button && contenidoAdicional) {
        contenidoAdicional.classList.toggle('visible');

        button.classList.toggle('active');

        var verMasLabel = button.querySelector('.ver-mas-label');
        verMasLabel.textContent = (contenidoAdicional.classList.contains('visible')) ? '↑' : '↓';
    } else {
        console.error('Elementos no encontrados. Asegúrate de que los identificadores sean correctos.');
    }
}


//Ver Mas Proyecto Compras

function toggleContentCompras() {
    var button = document.getElementById('ver-mas-btn-compras');
    var contenidoAdicional = document.getElementById('contenido-adicional-compras');

    if (button && contenidoAdicional) {
        contenidoAdicional.classList.toggle('visible');

        button.classList.toggle('active');

        var verMasLabel = button.querySelector('.ver-mas-label');
        verMasLabel.textContent = (contenidoAdicional.classList.contains('visible')) ? '↑' : '↓';
    } else {
        console.error('Elementos no encontrados. Asegúrate de que los identificadores sean correctos.');
    }
}


//Ver Mas Proyecto Interactiva

function toggleContentInter() {
    var button = document.getElementById('ver-mas-btn-inter');
    var contenidoAdicional = document.getElementById('contenido-adicional-inter');

    if (button && contenidoAdicional) {
        contenidoAdicional.classList.toggle('visible');

        button.classList.toggle('active');

        var verMasLabel = button.querySelector('.ver-mas-label');
        verMasLabel.textContent = (contenidoAdicional.classList.contains('visible')) ? '↑' : '↓';
    } else {
        console.error('Elementos no encontrados. Asegúrate de que los identificadores sean correctos.');
    }
}
