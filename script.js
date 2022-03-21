var pizzaSize=document.getElementById("size").value;
var crustType=document.getElementById("crust").value;
var numberofPizza=document.getElementById("numberOne").value;

let submitButton=document.getElementById("submit");

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const PizzaOne= new Pizza(pizzaSize,crustType,numberofPizza);
    PizzaOne.yourAmount()
 

let newOrder = new Pizza( pizzaSize,crustType,numberofPizza)
})

function Pizza(pizzaSize,numberOfPizzas,crustType){
      this.pizzaSize=pizzaSize;
      this.crustType=crustType;
      this.numberOfPizzas=numberOfPizzas;
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
        }else if(this.crustType==="stuffed"){
            crustPrice=600;
        }else {
            crustPrice=800;
        }

        let total=(sizePrice+crustPrice)*numberOfPizzas;
        return total;
        console.log(total);

    }

