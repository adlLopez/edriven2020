var i = 0;

var sub = document.getElementById("sub");
var tax = document.getElementById("tax");
var total = document.getElementById("total");
var amount = document.getElementById("amount");
var change = document.getElementById("change");
var btn = document.getElementById("btn");

function subtotal(){    
    
    if(sub.value >= 100){
        amount.disabled = false;
        var subVal = parseFloat(sub.value);
        var taxVal = subVal *.12;
        var totalVal = subVal + taxVal;
        
        tax.value = taxVal.toFixed(2);
        total.value = totalVal.toFixed(2);
        amount.value = totalVal.toFixed(2);
        change.value = "0.00";        

        btn.classList.remove('btn-danger');
        btn.classList.add('btn-success');
        btn.disabled = false;

    }
    else{
        amount.disabled = true;

        tax.value = "Tax";
        total.value = "Total";
        amount.value = "Amount Paid";

        btn.classList.remove('btn-success');
        btn.classList.add('btn-danger');
        btn.disabled = true;
    }

}

function amountPaid(){
    var amountVal = parseFloat(amount.value);
    var totalVal = parseFloat(total.value);
    var changeVal = amountVal - totalVal;   

    change.value = changeVal.toFixed(2);
}