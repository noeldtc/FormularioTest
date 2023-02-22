

function myFunction() {
  let nameVal = document.getElementById("fname").value;
  let lastNameVal = document.getElementById("lname").value;
  let message = "Este es el nombre " +nameVal + " " +  lastNameVal;
  
  let lexOrigin;  

  //Se asigna que si llega un mensaje con "message" la funcion de respuesta es handleMessage
  window.addEventListener("message", this.handle.bind(this) , false);
  
  //Un alert normal
  alert("The form was submitted " + nameVal + " " + lastNameVal);

  //Se envia un mensaje a la ventana padre con el mensaje y 
  // el origen
  console.log("Envia mensaje de hijo a padre")
  window.parent.postMessage(message, lexOrigin);
  
}

function handle(event){
  console.log('Origin '+ event.origin);
  console.log('data '+ event.data);
  lexOrigin =  event.data;

}
