function mensaje() {
    //alert("Hola me estoy enviando a la vista");

    //console.log('hola estoy enviando a la consola'); para ver desde el controlador

    //var nuncamis = document.getElementById("txtDorsal").value;
    //console.log(nuncamis +" es la camisera");
    //var nombre = document.getElementById("txtNombre").value;
   // var edad = document.getElementById("txtEdad").value;
 document.getElementById("txtDorsal").value = "6";
 document.getElementById("txtNombre").value = "Iniesta";
 document.getElementById("txtEdad").value="30";
 
 var nuncamis = document.getElementById("txtDorsal").value;
    //console.log(nuncamis +" es la camisera");
    var nombre = document.getElementById("txtNombre").value;
  var edad = document.getElementById("txtEdad").value;
alert(nuncamis+" "+nombre+" "+ edad);

if(nuncamis===6){
 alert("eres iniesta");   
    
}
else{
    
   alert("no eres iniesta");    
}


}
