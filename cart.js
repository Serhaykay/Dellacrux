if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
function ready() {
    var removeCartItemButton = document.getElementsByClassName('remove')
    for (var i = 0; i < removeCartItemButton.length; i++) {
        var button = removeCartItemButton[i]
        button.addEventListener('click', removeCartItems
        )
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    var addToCartButtons = document.getElementsByClassName('add-to-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}
function removeCartItems(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-price')[0].innerText
    var image = shopItem.getElementsByClassName('shop-image')[0].src
    console.log(title, price, image)
    addToCartClicked(title, price, image)
}

function addToCart(title, price, image) {
    var cartRow = document.createElement('tr')
    cartRow.innerText = title
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartItems.apend(cartRow)

}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    total = 0
    for (var i = 0; i < cartRows.length; i++) {
        cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = '$' + Math.round(total * 100) / 100
    document.getElementsByClassName('subtotal')[0].innerText = total
    document.getElementsByClassName('sub-total')[0].innerText = total
}


