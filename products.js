// Array of product data
let products = [
    {
        id: 1,
        name: 'Product 1',
        description: 'This is the description for Product 1',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        image: 'product1.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        description: 'This is the description for Product 2',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        image: 'product2.jpg'
    },
    // Add more products as needed
];

// Function to create product elements
function createProductElement(product) {
    let productElement = document.createElement('div');
    productElement.className = 'product-demo';

    let productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    productElement.appendChild(productImage);

    let productName = document.createElement('h2');
    productName.textContent = product.name;
    productElement.appendChild(productName);

    let productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productElement.appendChild(productDescription);

    let productFeatures = document.createElement('ul');
    product.features.forEach(function(feature) {
        let featureItem = document.createElement('li');
        featureItem.textContent = feature;
        productFeatures.appendChild(featureItem);
    });
    productElement.appendChild(productFeatures);

    return productElement;
}

// Function to display products
function displayProducts() {
    let productsSection = document.getElementById('products');

    products.forEach(function(product) {
        let productElement = createProductElement(product);
        productsSection.appendChild(productElement);
    });
}

// Call the function to display products
displayProducts();
