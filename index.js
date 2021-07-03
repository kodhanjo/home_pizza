$(function () {

    var goToCartIcon = function($addTocartBtn){
      var $cartIcon = $(".my-cart-icon");
      var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
      $addTocartBtn.prepend($image);
      var position = $cartIcon.position();
      $image.animate({
        top: position.top,
        left: position.left
      }, 500 , "linear", function() {
        $image.remove();
      });
    }

    $('.my-cart-btn').myCart({
      currencySymbol: '$',
      classCartIcon: 'my-cart-icon',
      classCartBadge: 'my-cart-badge',
      classProductQuantity: 'my-product-quantity',
      classProductRemove: 'my-product-remove',
      classCheckoutCart: 'my-cart-checkout',
      affixCartIcon: true,
      showCheckoutModal: true,
      numberOfDecimals: 2,
      cartItems: [
        {id: 1, name: 'product 1', summary: 'summary 1', price: 1000, quantity: 1, image: 'images/dessert-pizza.jpg'},
        {id: 2, name: 'product 2', summary: 'summary 2', price: 1250, quantity: 1, image: 'images/chickenmushrooms(2).jpg'},
        {id: 3, name: 'product 3', summary: 'summary 3', price: 1050, quantity: 1, image: 'images/dominos-pizza(2).jpg'},
        {id: 4, name: 'product 4', summary: 'summary 4', price: 700, quantity: 1, image: 'images/mergherita.jpeg'},
        {id: 5, name: 'product 5', summary: 'summary 5', price: 1300, quantity: 1, image: 'images/wc1813154.jpg'},
        {id: 6, name: 'product 6', summary: 'summary 6', price: 1250, quantity: 1, image: 'images/download.jpeg'},
        {id: 7, name: 'product 7', summary: 'summary 7', price: 1150, quantity: 1, image: 'images/deep-dish-pizza.jpg'},
        {id: 8, name: 'product 8', summary: 'summary 8', price: 750, quantity: 1, image: 'images/dominos-pizza(2).jpg'},
        {id: 9, name: 'product 9', summary: 'summary 9', price: 900, quantity: 1, image: 'images/dominos-pizza.jpg'},
      ],
      clickOnAddToCart: function($addTocart){
        goToCartIcon($addTocart);
      },
      afterAddOnCart: function(products, totalPrice, totalQuantity) {
        console.log("afterAddOnCart", products, totalPrice, totalQuantity);
      },
      clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
        console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
      },
      checkoutCart: function(products, totalPrice, totalQuantity) {
        var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
        checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
        $.each(products, function(){
          checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
        });
        alert(checkoutString)
        console.log("checking out", products, totalPrice, totalQuantity);
      },
      getDiscountPrice: function(products, totalPrice, totalQuantity) {
        console.log("calculating discount", products, totalPrice, totalQuantity);
        return totalPrice * 0.5;
      }
    });

    $("#addNewProduct").click(function(event) {
      var currentElementNo = $(".row").children().length + 1;
      $(".row").append('<div class="col-md-3 text-center"><img src="images/img_empty.png" width="150px" height="150px"><br>product ' + currentElementNo + ' - <strong>$' + currentElementNo + '</strong><br><button class="btn btn-danger my-cart-btn" data-id="' + currentElementNo + '" data-name="product ' + currentElementNo + '" data-summary="summary ' + currentElementNo + '" data-price="' + currentElementNo + '" data-quantity="1" data-image="images/img_empty.png">Add to Cart</button><a href="#" class="btn btn-info">Details</a></div>')
    });
  });
  