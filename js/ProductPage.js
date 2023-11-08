$(document).ready(function(){


$(".button").click(function(){

    if($("#count").val()==""){
        $(".success").html("*choose the number of products")
      }
      else{

      
    

      $(".success").html("Product added to cart successfully!")


          var name = $("#product-name").text();
          var count = $("#count").val();
          var price=$("#product-price").html();
          var images =$("#cart-product").attr("src")
          
          var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
          
          var newItem = {
              name: name,
              count: count,
              price:price,
              image:images
          };
          
          cartItems.push(newItem);
          
          localStorage.setItem('cart', JSON.stringify(cartItems));
          
  
        }
    })
    });