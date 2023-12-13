document.addEventListener('DOMContentLoaded', function() {


    const form = document.getElementById('productForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const productData = {
            name: document.getElementById('productName').value,
            brand : document.getElementById('brand').value,
            description: document.getElementById('productDescription').value,
            imageUrl: document.getElementById('imgUrl').value,
            price: document.getElementById('price').value
        };

        fetch('https://striveschool-api.herokuapp.com/api/product/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E'
            },
            body: JSON.stringify(productData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Prodotto creato:', data);
          
        })
        .catch(error => console.error('Errore:', error));
    });
});

function validateForm() {
    const form = document.getElementById('productForm');
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return false;
    }
  
    return true;
}
document.getElementById('productForm').addEventListener('reset', function () {
    this.classList.remove('was-validated');
});
