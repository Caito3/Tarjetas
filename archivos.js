function traerDatosNombre() {
   
   var nombre = document.getElementById("PonerNombre").value;
    
   document.getElementById("nombrePersonal").innerHTML= nombre;}
    
function traerDatosCod(){
   
 var cod = document.getElementById("PonerCod").value;
    
    document.getElementById("codPersonal").innerHTML= cod;
    
}

function codCorto(){
    var codCorto = document.getElementById("PonerCvc").value;
    
    document.getElementById("codColocar").innerHTML = codCorto;
}




function completar(){
    
    var nombre = document.getElementById("PonerNombre").value
    
    var cod = document.getElementById("PonerCod").value 

    var codCorto = document.getElementById("PonerCvc").value
    
    
    
    if(nombre == "" || cod == "" || codCorto == ""){
    alert("Completar")
    
    }
    else{
        
     alert("Se recibieron correctamente los datos")
    }

}