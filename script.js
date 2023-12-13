fetch("https://striveschool-api.herokuapp.com/api/product/", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";

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

document
  .addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("productsContainer");
    const apiUrl = "https://striveschool-api.herokuapp.com/api/product/";


    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Network or invalid response error: " + response.statusText
          );
        }
        return response.json();
      })
      .then((products) => {
        products.forEach((product) => {
     
          const card = document.createElement("div");
          card.className = "card m-2 bg-light";
          card.style.width = "18rem";

   
          const cardImage = new Image();
          cardImage.src = product.imageUrl;
          cardImage.className = "card-img-top";
          cardImage.alt = product.name;
          cardImage.style.height = "12rem";
          cardImage.style.width = "100%";
          cardImage.style.objectFit = "contain";

          const cardBody = document.createElement("div");
          cardBody.className = "card-body";
          cardBody.innerHTML = `
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-info">€${product.price}</a>
            `;

         
          const editButton = document.createElement("button");
          editButton.className = "btn btn-warning my-3";
          editButton.textContent = "Edit";
          editButton.dataset.productId = product._id;
          editButton.addEventListener("click", function (event) {
            event.preventDefault();
            openEditModal(this.dataset.productId);
          });

          // Delete button
          const deleteButton = document.createElement("button");
          deleteButton.className = "btn btn-danger";
          deleteButton.textContent = "Delete";
          deleteButton.dataset.productId = product._id;
          deleteButton.addEventListener("click", function (event) {
            event.preventDefault();
            deleteProduct(this.dataset.productId, card);
          });
          const detailButton = document.createElement("button");
          detailButton.className = "btn btn-primary";
          detailButton.innerHTML = '<i class="fas fa-info-circle"></i>';
          detailButton.dataset.productId = product._id; 
         
          detailButton.addEventListener("click", function () {
            const productId = this.dataset.productId;
            window.location.href = `dettaglio.html?productId=${productId}`;
        });
        
      
     
          cardBody.appendChild(detailButton);
      
          cardBody.appendChild(editButton);
          cardBody.appendChild(deleteButton);
          card.appendChild(cardImage);
          card.appendChild(cardBody);
          productsContainer.appendChild(card);
          const modifyButton = document.createElement("button");
    modifyButton.className = "btn btn-secondary";
    const modifyIcon = document.createElement("i");
    modifyIcon.className = "fa fa-pencil-alt"; 
    modifyButton.appendChild(modifyIcon);

    modifyButton.addEventListener("click", function () {
       
        editButton.style.display = editButton.style.display === "none" ? "block" : "none";
        deleteButton.style.display = deleteButton.style.display === "none" ? "block" : "none";
    });

  
    editButton.style.display = "none";
    deleteButton.style.display = "none";

    cardBody.appendChild(modifyButton);
    cardBody.appendChild(editButton);
    cardBody.appendChild(deleteButton);
        });
        document.getElementById('saveButton').addEventListener('click', function() {
            const productId = document.getElementById("editProductId").value;
            editProduct(productId);
        });
      });
  })



function deleteProduct(productId, cardElement) {
  const apiUrl = `https://striveschool-api.herokuapp.com/api/product/${productId}`;

  fetch(apiUrl, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request error: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Product deleted:", data);
      cardElement.remove();
    })
    .catch((error) => console.error("Error:", error));
}

function openEditModal(productId) {
    document.getElementById("editProductId").value = productId;
  const apiUrl = `https://striveschool-api.herokuapp.com/api/product/${productId}`;
  fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E",
    },
  })
    .then((response) => response.json())
    .then((productData) => {
        document.getElementById("editProductId").value = productId;
     
        var editModal = new bootstrap.Modal(document.getElementById('editProductModal'));
        editModal.show();
      document.getElementById("editProductId").value = productId;
      document.getElementById("productName").value = productData.name;
      document.getElementById("productDescription").value =
        productData.description;
      document.getElementById("productBrand").value = productData.brand;
      document.getElementById("productImageUrl").value = productData.imageUrl;
      document.getElementById("productPrice").value = productData.price;
  
    })
    .catch((error) => console.error("Error:", error));
    
}


function editProduct(productId) {
 
    const apiUrl = `https://striveschool-api.herokuapp.com/api/product/${productId}`;
  const updatedProductData = {
    name: document.getElementById("productName").value,
    description: document.getElementById("productDescription").value,
    brand: document.getElementById("productBrand").value,
    imageUrl: document.getElementById("productImageUrl").value,
    price: document.getElementById("productPrice").value,
  };

  fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E",
    },
    body: JSON.stringify(updatedProductData),
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((updatedProduct) => {
    console.log("Product updated:", updatedProduct);
    updateProductCard(updatedProduct); 
    closeModal();

  })
  .catch((error) => console.log("Error:", error));
  closeModal()
}

function closeModal() {
    var editModal = bootstrap.Modal.getInstance(document.getElementById('editProductModal'));
    editModal.hide();
}
document.getElementById('closeButton').addEventListener('click', function() {
    closeModal();
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('closeButton').addEventListener('click', closeModal());
    document.getElementById('saveButton').addEventListener('click', editProduct()); 
  });
function updateProductCard(){
    window.location.reload()
}



function showProductDetails(productId) {
  const apiUrl = `https://striveschool-api.herokuapp.com/api/product/${productId}`;
  fetch(apiUrl, {
      method: "GET",
      headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDVhNGMwNTgzNTAwMTg1MjMxYTUiLCJpYXQiOjE3MDIzODA5NjQsImV4cCI6MTcwMzU5MDU2NH0.1iRcdNMPqzGWnncht5h1RPNZbCcaNcaEBhlIRfvPa1E"

      }
  })
  .then(response => response.json())
  .then(productData => {
      displayProductDetailPage(productData);
  })
  .catch(error => console.error("Errore:", error));
}

function displayProductDetailPage(productData) {

  document.getElementById('nomeProdotto').innerText = productData.name;
  document.getElementById('immagineProdotto').src = productData.imageUrl;
  document.getElementById('descrizioneProdotto').innerText = productData.description;
  document.getElementById('marcaProdotto').innerText = productData.brand;
  document.getElementById('prezzoProdotto').innerText = `€${productData.price}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    if(productId) {
        showProductDetails(productId);
    }
});
