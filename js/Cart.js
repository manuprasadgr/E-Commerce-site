$(document).ready(function(){
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
   
    
    $.each(cartItems, function(index, item) {
        $("#product-name").text(item.name); 
        $("#count").text(item.count);
         $("#product-price").html( item.price );
         $("#cart-1").attr("src", item.image);



    });

    $(".remove-item-btn").click(function(){
        $(".cart-item").hide();



 
})

});