let cart = {}; 

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const id = this.getAttribute('data-id');
    const name = this.getAttribute('data-name');
    const price = parseFloat(this.getAttribute('data-price'));
    const img = this.getAttribute('data-img');

    if (cart[id]) {
      cart[id].quantity += 1;
    } else {
      cart[id] = { id, name, price, img, quantity: 1 };
    }

    updateCart();
    const offcanvas = new bootstrap.Offcanvas(document.getElementById('cartCanvas'));
    offcanvas.show();
  });
});

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  let totalItems = 0;
  let totalPrice = 0;

  cartItems.innerHTML = ''; 

  for (let id in cart) {
    const item = cart[id];
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;

    const cartItem = document.createElement('li');
    cartItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    cartItem.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${item.img}" width="50" height="50" class="me-3">
        <span>${item.name} - $${item.price}</span>
        <button class="btn btn-sm btn-secondary mx-2 increase-quantity" data-id="${id}">+</button>
        <span>${item.quantity}</span>
        <button class="btn btn-sm btn-secondary mx-2 decrease-quantity" data-id="${id}">-</button>
      </div>
      <button class="btn btn-danger btn-sm remove-item" data-id="${id}">Remove</button>
    `;
    cartItems.appendChild(cartItem);
  }

  document.getElementById('cart-count').textContent = totalItems;
  totalPriceElement.textContent = totalPrice.toFixed(2);

  document.querySelectorAll('.increase-quantity').forEach(button => {
    button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      cart[id].quantity++;
      updateCart();
    });
  });

  document.querySelectorAll('.decrease-quantity').forEach(button => {
    button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      removeFromCart(id);
    });
  });

  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      removeFromCart(id);
    });
  });
}

function removeFromCart(id) {
  if (cart[id]) {
    cart[id].quantity--;
    if (cart[id].quantity <= 0) {
      delete cart[id]; 
    }
    updateCart(); 
  }
}