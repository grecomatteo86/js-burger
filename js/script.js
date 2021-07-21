var computs = document.getElementById('calculate');
var coupons = ['1234','2341','3412','4123'];
computs.addEventListener('click',
  function(){
    var burgerName = document.getElementById('burger_name');
    if (burgerName.value != '') {
      var addedIngredient = document.getElementsByClassName('added_ingredient');
      console.log(addedIngredient);
      var sum = 50;
      for ( var i = 0; i < addedIngredient.length; i++) {
        if (addedIngredient[i].checked) {
          sum += parseInt(addedIngredient[i].value);
        }
      }
      var coupon = document.getElementById('coupon');
      if ( coupons.includes(coupon.value) ) {
        sum -= sum * 0.2;
        //tolgo il coupun utizzato dall'utente: mi procuro il suo indice e lo rimuovo dall'array
        var indexCoupon = coupons.indexOf(coupon.value);
        coupons.splice(indexCoupon, 1);
        console.log(coupons);
      }
      document.getElementById('total_price').innerHTML= sum + ' €';
    } else {
      alert('insert your burger name');
    }
  }
);
