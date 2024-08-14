function pasta(){
    alert('ADDED TO ORDER... ANY THING ELSE')
}
function bill(){
    alert('YOUR BILL IS 400$')

}
    function work(){
        window.location.href='index.HTM'
    }
 function pay(){
    const payment = prompt('Select Your Payment methood ::type "COD" for CASH ON DELIVERY or "credit" for credit card ')
    if (payment === 'COD'){
        alert('YOUR PAYMENT WILL BE RECEIVED ON DELIVERY');
    }
    else if (payment === 'credit'){
        alert('TYPE YOUR PIN YOU ARE PAYING ONLINE')
    }
    else {
        alert('PLEASE TYPE ,COD, FOR DOORSTEP PAYMENT OR ,CREDIT, FOR ONLINE PAYMENTS,TRY AGAIN FOR PAYMNETS')
    }
 }
 function control(){
    
 }