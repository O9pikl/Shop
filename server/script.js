async function getProducts() {
  response = await fetch('http://localhost:3000/api/products');
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
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
    const item = document.createElement('li');
    item.textContent = `${product.name} price: ${product.price} category: ${product.category} stock: ${product.stock}`;
    list.append(item);
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
