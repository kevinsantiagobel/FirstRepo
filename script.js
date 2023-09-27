function cargarImagenesDeTelefonos() {
    const apiKey = 'YwllAHBIqX7A9IHtVuJIcwuzzEfnUVZCvxp2ynr0K4u1EouPZ1CKgeQr';

    const query = 'iphone phone';

    const apiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=15`;

    fetch(apiUrl, {
        headers: {
            'Authorization': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const fotos = data.photos;

        const imagenes = document.querySelectorAll('.card img');

        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].src = fotos[i].src.large;
            imagenes[i].alt = fotos[i].photographer;
        }
    })
    .catch(error => console.error('Error al cargar imágenes desde Pexels:', error));
}

document.addEventListener('DOMContentLoaded', cargarImagenesDeTelefonos);
