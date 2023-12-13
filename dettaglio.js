document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    if(productId) {
        fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            method: "GET",
            headers: {
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E"
            }
        })
        .then(response => response.json())
        .then(productData => {

            document.getElementById('nomeProdotto').innerText = productData.name;
            document.getElementById('immagineProdotto').src = productData.imageUrl;
            document.getElementById('descrizioneProdotto').innerText = productData.description;
            document.getElementById('marcaProdotto').innerText = productData.brand;
            document.getElementById('prezzoProdotto').innerText = `€${productData.price}`;
        })
        .catch(error => console.error("Errore:", error));
    }
});
