
var array = [];

var selectVal1 = document.getElementById("selectVal1");
var selectVal2 = document.getElementById("selectVal2");
var selectVal3 = document.getElementById("selectVal3");
var selectVal4 = document.getElementById("selectVal4");

window.onload = function(){
    var order = JSON.parse(localStorage.getItem("order"));

    if(order != null){
        data = order;
    }

    const request = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

    const getData = async () => {
        const response = await fetch(request);
        const jsondata = response.json();
        return jsondata;
    }

    getData()
        .then((value) => {
            let arrfoods = value.meals
            for(food of arrfoods){
                array.push(food.strMeal);               
            }
            populate1();
            populate2();
            populate3();
            populate4();
        })
        .catch((err) => {
            console.log(err);
        });

    display();
                     
}

var ornum, name, item1,item2,item3,item4, p1, p2, p3, p4, sub1, sub2, sub3, sub4;
var q1 = 1, q2 = 1, q3 = 1, q4 = 1, total = 0;

var ornumb = document.getElementById("ornum");
var cusname = document.getElementById("name");

var price1 = document.getElementById("price1");
var qty1 = document.getElementById("qty1");
var subtotal1 = document.getElementById("subtotal1");

var price2 = document.getElementById("price2");
var qty2 = document.getElementById("qty2");
var subtotal2 = document.getElementById("subtotal2");

var price3 = document.getElementById("price3");
var qty3 = document.getElementById("qty3");
var subtotal3 = document.getElementById("subtotal3");

var price4 = document.getElementById("price4");
var qty4 = document.getElementById("qty4");
var subtotal4 = document.getElementById("subtotal4");

var data = [];

function totals(){
    if(name == null || name == ""){
        name = 'Not Specified';
    }

    if(sub1 != null){
        console.log(sub1, 'this is sub1 in totals');
        console.log(total, 'this is total before in totals');
        total = total + sub1;
        console.log(total, 'this is total after sub1');
    }
    if(sub2 != null){
        console.log(total, 'this is total before sub1');
        total = total + sub2;
        console.log(total, 'this is total after sub1');
    }
    if(sub3 != null){
        console.log(total, 'this is total before sub1');
        total = total + sub3;
        console.log(total, 'this is total after sub1');
    }
    if(sub4 != null){
        console.log(total, 'this is total before sub1');
        total = total + sub4;
        console.log(total, 'this is total after sub1');
    }

    save();
}

function save(){    
    if(ornum != undefined || ornum != "" || ornum != null){
        data.push({
            ornum: ornum,
            name: name,
            item1: item1,
            price1: p1,
            qty1: q1,
            subtotal1: sub1,
            item2: item2,
            price2: p2,
            qty2: q2,
            subtotal2: sub2,
            item3: item3,
            price3: p3,
            qty3: q3,
            subtotal3: sub3,
            item4: item4,
            price4: p4,
            qty4: q4,
            subtotal4: sub4,
            total: total,
        })

        ornum, name, item1,item2,item3,item4, p1, p2, p3, p4, sub1, sub2, sub3, sub4 = null;
        q1 = 1, q2 = 1, q3 = 1, q4 = 1, total = 0;

        localStorage.setItem('order', JSON.stringify(data));
    }
    else{
        alert("PLEASE FILL OR NUMBER");
    }

    console.log(data);
    display();
}


function ORnumber(){
    ornum = ornumb.value;
    console.log(ornum, 'this OR');
}

function customName(){
    name = cusname.value;
    console.log(name, 'this NAME');
}

function select(num){    
    if(num == 1){
        item1 = selectVal1.value
        console.log(item1, 'this is ITEM1');

        price1.disabled = false;
        qty1.disabled = false;
    }
    else if(num == 2){
        if(price1.disabled == false && p1 != null){
            item2 = selectVal2.value
            console.log(item2, 'this is ITEM2');

            price2.disabled = false;
            qty2.disabled = false;
        }     
        else{
            alert("PLEASE FILL ITEM 1 FIRST");
        }   
    }
    else if(num == 3){
        if(price2.disabled == false && p2 != null){
            item3 = selectVal3.value
            console.log(item3, 'this is ITEM3');

            price3.disabled = false;
            qty3.disabled = false;
        }     
        else{
            alert("PLEASE FILL ITEM 2 FIRST");
        }           
    }
    else{
        if(price3.disabled == false && p3 != null){
            item4 = selectVal4.value
            console.log(item4, 'this is ITEM4');

            price4.disabled = false;
            qty4.disabled = false;
        }     
        else{
            alert("PLEASE FILL ITEM 3 FIRST");
        }         
    }
}

function price(num){
    if(num == 1){
        var price = parseFloat(price1.value);
        p1 = price.toFixed(2);        
        sub1 = p1 * q1;

        qty1.value = q1;
        subtotal1.value = sub1.toFixed(2);
        
    }
    else if(num == 2){
        var price = parseFloat(price2.value);
        p2 = price.toFixed(2);
        sub2 = p2 * q2;

        qty2.value = q2;
        subtotal2.value = sub2.toFixed(2);
    }
    else if(num == 3){
        var price = parseFloat(price3.value);
        p3 = price.toFixed(2);
        sub3 = p3 * q3;

        qty3.value = q3;
        subtotal3.value = sub3.toFixed(2);
    }
    else{
        var price = parseFloat(price4.value);
        p4 = price.toFixed(2);
        sub4 = p4 * q4;

        qty4.value = q4;
        subtotal4.value = sub4.toFixed(2);
    }
}

function qty(num){
    if(num == 1){
        q1 = qty1.value;
        sub1 = p1 * q1;

        qty1.value = q1;
        subtotal1.value = sub1.toFixed(2);
    }
    else if(num == 2){
        q2 = qty2.value;
        sub2 = p2 * q2;

        qty2.value = q2;
        subtotal2.value = sub2.toFixed(2);
    }
    else if(num == 3){
        q3 = qty3.value;
        sub3 = p3 * q3;

        qty3.value = q3;
        subtotal3.value = sub3.toFixed(2);
    }
    else{
        q4 = qty4.value;
        sub4 = p4 * q4;

        qty4.value = q4;
        subtotal4.value = sub4.toFixed(2);
    }
}

var viewData = document.getElementById("orders");

function display(){
    for(i = 0; i < data.length; i++){
        var datas = data[i];

        viewData.innerHTML += "<tr class=\"table-active\"><th scope=\"row\">"+ datas.ornum +"</th><td>"+ datas.name +"</td><td>"+ datas.total +"</td><td><a href=\"#\" onclick=\"getOR(\'" + datas.ornum + "\')\">View</a></td></tr>"
    }
}

function getOR(ornum){
    if(ornum == null || ornum == undefined){
        alert("NO OR NUMBER");
    }
    else{
        for(i = 0; i < data.length; i++){
            if(ornum == data[i].ornum){
                window.alert
                viewModalDisplay(data[i]);
                break;
            }
        }   
    }      
}

function viewModalDisplay(datas){    
    document.getElementById("ornumber").value = datas.ornum;
    document.getElementById("customername").value = datas.name;
    
    document.getElementById("selectVal11").value = datas.item1;
    document.getElementById("price11").value = datas.price1;
    document.getElementById("qty11").value = datas.qty1;
    document.getElementById("subtotal11").value = datas.subtotal1;

    document.getElementById("selectVal22").value = datas.item2;
    document.getElementById("price22").value = datas.price2;
    document.getElementById("qty22").value = datas.qty2;
    document.getElementById("subtotal22").value = datas.subtotal2;

    document.getElementById("selectVal33").value = datas.item3;
    document.getElementById("price33").value = datas.price3;
    document.getElementById("qty33").value = datas.qty3;
    document.getElementById("subtotal33").value = datas.subtotal3;

    document.getElementById("selectVal44").value = datas.item4;
    document.getElementById("price44").value = datas.price4;
    document.getElementById("qty44").value = datas.qty4;
    document.getElementById("subtotal44").value = datas.subtotal4;

    console.log(datas, 'this is datas in view Display');
    console.log(datas.item1, 'this is name in DISPLAY');

    $('#viewModal').modal('show');
}

function populate1(){
    for(food of array){
        let option = document.createElement("option");
        option.value = food;
        option.innerHTML = food;
        selectVal1.appendChild(option);
    }
}

function populate2(){
    for(food of array){
        let option = document.createElement("option");
        option.value = food;
        option.innerHTML = food;
        selectVal2.appendChild(option);
    }
}

function populate3(){
    for(food of array){
        let option = document.createElement("option");
        option.value = food;
        option.innerHTML = food;
        selectVal3.appendChild(option);
    }
}

function populate4(){
    for(food of array){
        let option = document.createElement("option");
        option.value = food;
        option.innerHTML = food;
        selectVal4.appendChild(option);
    }
}