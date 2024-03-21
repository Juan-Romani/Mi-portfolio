document.addEventListener('DOMContentLoaded', function () {
    const hamburguesa = document.querySelector('.hamburguesa');
    const nav = document.querySelector('nav');
    const menuLinks = document.querySelectorAll('.menu-link');

    hamburguesa.addEventListener('click', function () {
        nav.classList.toggle('show');
        hamburguesa.classList.toggle('cruz');
    });

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('show');
            hamburguesa.classList.remove('cruz');
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            nav.classList.remove('show');
            hamburguesa.classList.remove('cruz');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var contenidoHero = document.querySelector('.contenido-hero');

    function estaEnPantalla(elemento) {
        var rect = elemento.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return rect.top <= windowHeight && rect.bottom >= 0;
    }

    if (estaEnPantalla(contenidoHero)) {
        contenidoHero.classList.add('aparecer-animacion');
    }

    window.addEventListener('resize', function () {
        if (estaEnPantalla(contenidoHero)) {
            contenidoHero.classList.add('aparecer-animacion');
        } else {
            contenidoHero.classList.remove('aparecer-animacion');
        }
    });
});

//Ver Mas "Diseño"

function toggleContentDiseño() {
    var button = document.getElementById('ver-mas-btn-diseño');
    var contenidoAdicional = document.getElementById('contenido-adicional-diseño');

    if (button && contenidoAdicional) {
        contenidoAdicional.classList.toggle('visible');

        button.classList.toggle('active');

        var verMasLabel = button.querySelector('.ver-mas-label');
        verMasLabel.textContent = (contenidoAdicional.classList.contains('visible')) ? '↑' : '↓';
    } else {
        console.error('Elementos no encontrados. Asegúrate de que los identificadores sean correctos.');
    }
}

//Ver Mas "Desarrollo"

function toggleContentDesarrollo() {
    var button = document.getElementById('ver-mas-btn-desarrollo');
    var contenidoAdicional = document.getElementById('contenido-adicional-desarrollo');

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







