function add(){
    let expName = document.querySelector(".expName").value;
    let Amount = document.querySelector(".amount").value;
    let add_data = document.getElementById("add_data");

    add_data.innerHTML += `<div class = "parents">

                          <div class = "expdata">
                            <h4> ${expName} </h4>
                         </div> 
                         
                         <div class = "amtdata">
                            <h4> ${Amount} </h4>
                          </div> 
                          
                          <div class= "delbut">
                            <h4>  <button class = " del " onclick = "del(this)"> Delete </button>
                          </div> 

                          </div> `;

    totalamount();
}

function totalamount(){
    
    let Total = parseFloat(document.getElementById("finalamt").innerHTML);
    let amountclass = document.querySelectorAll(".amount");

    amountclass.forEach(element =>{
      let amount = parseFloat(element.value);
      Total += amount;
    })

    document.getElementById("finalamt").innerHTML = Total;
}


function del(ele){

     let amount =  ele.parentNode.parentNode.parentNode.remove()

      updatetotal(amt);
}

function updatetotal(amt){
  let Total = parseFloat(document.getElementById("finalamt").innerHTML);
    Total -= parseFloat(amt);
    document.getElementById("finalamt").innerHTML = Total;
}