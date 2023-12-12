fetch("https://striveschool-api.herokuapp.com/api/product/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E"
}})
.then(response => response.json())
.then(data => console.log(data))

const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/';

// const productData = {
//     name: "iPhone 15",
//     description: "Modern smartphone",
//     brand: "Apple",
//     imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311",
//     price: 1300

// }
// const productData2 = {
//     name: "Playstation 5",
//     description: "Epic console",
//     brand: "Sony",
//     imageUrl: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-slim-dualsense-image-block-01-en-16nov23?$1600px--t$",
//     price: 499

// };
// const productData3 = {
//     name: "Xbox X",
//     description: "Modern console",
//     brand: "Microsoft",
//     imageUrl: "https://m.media-amazon.com/images/I/61CLCiCNtaL._AC_SX679_.jpg",
//     price: 450

// };

// const productData4 = {
//     name: "Mac Book Pro",
//     description: "Modern macbook",
//     brand: "Apple",
//     imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp13-m2-spacegray-202208?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1659374923283",
//     price: 999

// };

// const productData5 = {
//     name: "Mac Studio",
//     description: "Modern powerfull Computer",
//     brand: "Apple",
//     imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-studio-hero-202306?wid=834&hei=408&fmt=jpeg&qlt=90&.v=1683939183510",
//     price: 2400

// };

// const productData6 = {
//     name: "Monitor Display Studio",
//     description: "Modern Monitor",
//     brand: "Apple",
//     imageUrl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/studio-display-gallery-1-202203?wid=640&hei=528&fmt=p-jpg&qlt=95&.v=1675709041796",
//     price: 99
// };

// const products = [productData,productData2,productData3, productData4, productData5, productData6];

// products.forEach(product => {
//     fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E' // Sostituisci con il tuo token di autenticazione
//         },
//         body: JSON.stringify(product)
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Errore:', error));
// });




// const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";
// const id = "6578580326761400183c2e73"

// fetch(apiUrl+id, {
//     method: 'DELETE',
//     headers: {
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E'
//     }
// }).then(response => {
//     if (!response.ok) {
//         throw new Error('Errore nella richiesta: ' + response.statusText);
//     }
//     return response.json();
// })
// .then(data => console.log('Prodotto eliminato:', data))
// .catch(error => console.error('Errore:', error));


document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('productsContainer');
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/product/'; 

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore di rete o risposta non valida: ' + response.statusText);
        }
        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card m-2';
            card.style.width = '39rem';
            card.style.height = '25rem';
            card.style.overflow = 'hidden';

            const cardImage = new Image();
            cardImage.src = product.imageUrl;
            cardImage.className = 'card-img-top';
            cardImage.alt = product.name;
            cardImage.style.height = '12rem';
            cardImage.style.width = '100%';
            cardImage.style.objectFit = 'contain';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            cardBody.innerHTML = `
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${product.description}</p>
                <a href="#" class="btn btn-primary">€${product.price}</a>
                <a href="#" class="btn btn-warning">Modifica</a>
                <a href="#" class="btn btn-danger">Elimina</a>
            `;
            const deleteButtons = document.querySelectorAll('.btn-danger');
            deleteButtons.forEach(deleteButton => {
                deleteButton.addEventListener('click', (event) => {
                    event.preventDefault();
                    const productId = product._id;
                    if (productId) {
                        // Chiamata API DELETE per eliminare il prodotto
                        deleteProduct(productId);
                    }
                });
            });
            card.appendChild(cardImage);
            card.appendChild(cardBody);
            productsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Errore:', error));
});


function deleteProduct(productId) {
    const apiUrl = `https://striveschool-api.herokuapp.com/api/product/${productId}`;

    fetch(apiUrl, {
        method: 'DELETE',
        headers: {
            'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Gestisci la risposta dell'API dopo l'eliminazione
        console.log('Prodotto eliminato:', data);
        // Rimuovi la carta del prodotto dal DOM se necessario
    })
    .catch(error => console.error('Errore:', error));
}
