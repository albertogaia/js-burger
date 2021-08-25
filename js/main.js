// Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

//controllo se c'è il nome dell'hamburger
document.getElementById('my_btn').addEventListener('click', function(){
    let nameBurger = document.getElementById('burgerName').value;
    console.log(nameBurger);
    if(nameBurger.length < 1 || nameBurger == ' '){
        alert('Insert a Burger Name')
    }else{
        calculatePrice();
    }
})

    
//funzione che calcola il prezzo
function calculatePrice(){
    let couponValid = ['BOOLEAN22', 'ALBERTO50','SUMMER21'];
    const priceFixed = 50;
    var subTotal = 0;
    const discount = document.getElementById('couponCode').value;
    const ingredient = document.getElementsByClassName('my-check');
    

    for (let i=0; i < ingredient.length; i++){
        if (ingredient[i].checked)
            subTotal += parseInt(ingredient[i].value)
    }

    // controllo se il coupon inserito risulta nell'array e stampo il prezzo finale
    console.log(discount)
    if (couponValid.includes(discount)) {
        finalPrice = (subTotal + priceFixed) * 0.8;
    } else {
        finalPrice = subTotal + priceFixed;
    } 

    document.getElementById('total_price').innerHTML = finalPrice.toFixed(2);

}

    