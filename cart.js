export const cart = [];
export function addToCart(showId){
    let matchingItem;

    cart.forEach((cartItem)=>{
        if(showId === cartItem.showId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantity += 1;
    }
    else{
        cart.push({
            showId,
            quantity: 1
        });
    }
    
}