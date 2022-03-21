function Pizza(pizzaSize,numberOfPizzas,crustType,toppings){
    this.pizzaSize=pizzaSize;
    this.crustType=crustType;
    this.numberOfPizzas=numberOfPizzas;
    this.toppings=toppings
  }

  Pizza.prototype.yourAmount=function(){
      let sizePrice;
      if(this.pizzaSize==="large"){
          sizePrice=1000;  
      }else if(this.pizzaSize==="medium"){
          sizePrice=800;
      }else{
          sizePrice=500;
      }
      let crustPrice;
      if(this.crustType==="crispy"){
          crustPrice=400;
      }else if(this.crustType==="gluten-free"){
          crustPrice=600;
      }else {
          crustPrice=800;
      }
      let toppingPrice;
      if(this.toppings==="Hawaaian"){
          toppingPrice=500;  
      }else if(this.toppings==="Chicken"){
          toppingPrice=450;
      }else if(this.toppings==="Beef"){
          toppingPrice=400;
      }else if(this.toppings==="Magharita"){
          toppingPrice=550;
      }else if(this.toppings==="Vegan Hero"){
          toppingPrice=350;
      }else{
          toppingPrice=300;
      }


      let total=sizePrice+crustPrice+toppingPrice;
      return total;
      
    }
let submitButton=document.getElementById("submit");

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    let size=document.getElementById("size").value;
    let crust=document.getElementById("crust").value;
    let numberOne=document.getElementById("numberOne").value;
    let toppings=document.getElementById("topping").value;

    if(toppings===""){
        alert("Choose a topping")
    }
    else if(size===""){
        alert("Pick a pizza size")
    }
    else if(crust===""){
        alert("You forgot the crust")
    }
    else{
      
    const pizzaOne= new Pizza(size,crust,numberOne,toppings);

    alert(pizzaOne.yourAmount());

    let delOption=confirm("Do you want it to be home delivered?")


    if(delOption===true){
        var newTotal=pizzaOne.yourAmount()+300;
        alert("You New Total is "  + newTotal);
        let checkOut = document.getElementById("check");
    checkOut.addEventListener("click",(e)=>{
        e.preventDefault();
        e.stopPropagation();
        alert("proceed to pay "+ newTotal)
    })
    }else{
        alert("Enjoy, your total is "+ pizzaOne.yourAmount());
        let checkOut = document.getElementById("check");
    checkOut.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();
        alert("Proceed to pay "+ pizzaOne.yourAmount());
    })
    }
    };
    
    
   
  
});



   

