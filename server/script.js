async function getProducts() {
  console.log("Attempting to fetch products from http://localhost:3000/api/products...")
  // Start timer
const startTime = performance.now()
  response = await fetch('http://localhost:3000/api/products');
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const startupTime = performance.now() - startTime;
  console.log(`JSON retrieved after ${startupTime.toFixed(2)} ms`);
  return response.json();

}

function showProducts(products) {
  const list = document.querySelector('#products');
  list.innerHTML = '';

  if (products.length === 0) {
    list.textContent = 'No public products found.';
    return;
  }

  for (const product of products) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: £${product.price.toFixed(2)}</p>
      <p>Category: ${product.category}</p>
      <p>Stock: ${product.stock}</p>
    `;

    list.append(card);
  }
}

/** Loads the repositories and shows them, or shows a message if it fails. */
async function init() {
  try {
    const products = await getProducts();
    showProducts(products);
  } catch (error) {
    console.error(error);
    document.querySelector('#products').textContent =
      'Sorry, the products could not be loaded.';
  }
}

init();
