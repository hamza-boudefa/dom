var total= Number(document.getElementById('total').innerHTML)

// add item
var plusBtn=document.querySelectorAll('.plus-btn')
for(let btn of plusBtn){
    btn.addEventListener("click",function(){
        // console.log(qty)
        price=Number(btn.parentNode.children[0].children[0].innerHTML)
        console.log(price)
        var qty=Number(btn.previousElementSibling.innerHTML);        

        qty++;
        btn.previousElementSibling.innerHTML=qty
        // console.log(qty)
        total=total+price
        document.getElementById('total').innerHTML=total;
    })
}

// minus btn
var minusbtn=document.querySelectorAll('.minus-btn')
for (let btn of minusbtn){
    btn.addEventListener("click",function(){
var qty=Number(btn.nextElementSibling.innerHTML)
var price =Number(btn.parentNode.children[0].children[0].innerHTML)

if(qty>0){qty--;
    btn.nextElementSibling.innerHTML=qty
total-=price
document.getElementById("total").innerHTML=total
    }
    })
}