function traerDatosNombre() {
    
    
    var nombre = document.getElementById("PonerNombre").value
    var nombre = nombre.split(" ")
    for( i = 0; i < nombre.length; i++){
    nombre[i] = nombre[i][0].toUpperCase() + nombre[i].substr(1)
    }
    var nombre = nombre.join(" ")
   
   
   document.getElementById("nombrePersonal").innerHTML= nombre;
    
      if( nombre == "" ){
      nombrePersonal.textContent= "Nombre y apellidos"
      }

}
    

function traerDatosCod(){
   
    var cod = document.getElementById("PonerCod").value;
    var cod = cod.replace(/\s/g,'')
    var cod = cod.replace(/\D/g,'')
    
    var cod = cod.replace(/([0-9]{4})/g,'$1 ')
    document.getElementById("codPersonal").innerHTML= cod;
    
    if ( cod == "" ){
    codPersonal.textContent= "0000 0000 0000 0000"
}

}

function codCorto(){
    var codCorto = document.getElementById("PonerCvc").value;
    
    document.getElementById("codColocar").innerHTML = codCorto;
    
    
    if( codCorto == ""){
        
        
        codColocar.textContent= "123"
    }


    
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