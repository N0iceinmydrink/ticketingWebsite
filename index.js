import {shows} from './shows.js';
import {cart, addToCart} from './cart.js';

export function toggleSidebar(){
  document.getElementById("sidebar").classList.toggle("active");
}

document.querySelector('.open-btn').addEventListener('click', toggleSidebar);
document.querySelector('.close-btn').addEventListener('click', toggleSidebar);

let showsHTML = '';
shows.forEach((show)=>{
    showsHTML += `
         <div class="show-info-container">
          <div class="show-image-container">
            <img class="show-image"
              src="${show.image}">
          </div>

          <div class="show-name limit-text-to-2-lines">
            ${show.name}
          </div>

          <div class="show-price">
            ${(show.ticketPrice)}
          </div>

          <div class="show-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="show-spacer"></div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-show-id = "${show.id}"> 
            Add to Cart
          </button>
        </div>`;   

        //Data attribute always start with data at the beginning.
});

console.log(showsHTML);

document.querySelector('.js-main-content').innerHTML = showsHTML;


    document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
      button.addEventListener('click', ()=>{
        const showId = button.dataset.showId;

        addToCart(showId);

        let cartQuantity = 0;

        cart.forEach((cartItem)=>{
          cartQuantity += cartItem.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
      });
    });





