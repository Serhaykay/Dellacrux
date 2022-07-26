if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}
function ready(){
    var removeCartItemButton = document.getElementsByClassName('remove')
     for (var i = 0; i < removeCartItemButton.length; i++){
        button = removeCartItemButton[i]
        button.addEventListener('click', removeCartItems
        )
    }
}
function removeCartItems(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    total = 0
    for (var i = 0; i < cartRows.length; i++){
        cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace ('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementsByClassName('subtotal')[0].innerText = total
    document.getElementsByClassName('sub-total')[0].innerText = total
}


