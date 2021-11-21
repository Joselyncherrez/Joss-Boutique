function itemSeleccionado()
{
    let combo = document.getElementById("cat");
    let selec = combo.options[combo.selectedIndex].text;
   
    if(selec == "Jeans"){
        cargarContenido1();
    }
    else if(selec == "Blusas"){
        cargarContenido2();  
    }
    else if(selec== "Calzado"){
        cargarContenido3();
    }
    else{
        document.getElementById("add").innerHTML = ""
        
    }   

}

function cargarContenido1() {
   
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    peticion_http.onreadystatechange = muestraContenido;
    peticion_http.open('GET', 'jeans.html', true);
    peticion_http.send(null);
    
    function muestraContenido() {
        if (peticion_http.readyState == 4) {
            if (peticion_http.status == 200) {
                var mi_contenedor = document.getElementById("add");
                mi_contenedor.innerHTML = peticion_http.responseText;
            }
        }
    }
}

function cargarContenido2() {
    
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    peticion_http.onreadystatechange = muestraContenido;
    peticion_http.open('GET', 'blusa.html', true);
    peticion_http.send(null);
    
    function muestraContenido() {
        if (peticion_http.readyState == 4) {
            if (peticion_http.status == 200) {
                var mi_contenedor = document.getElementById("add");
                mi_contenedor.innerHTML = peticion_http.responseText;
            }
        }
    }
}

function cargarContenido3() {
    
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    peticion_http.onreadystatechange = muestraContenido;
    peticion_http.open('GET', 'calzado.html', true);
    peticion_http.send(null);
    
    function muestraContenido() {
        if (peticion_http.readyState == 4) {
            if (peticion_http.status == 200) {
                var mi_contenedor = document.getElementById("add");
                mi_contenedor.innerHTML = peticion_http.responseText;
            }
        }
    }
}

function agregar(producto, precio) {

  var body = document.getElementsByClassName("addT")[0];

  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 1; i < 2; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j < 1; j++) {
  
      var celda1 = document.createElement("td");
      var celda2 = document.createElement("td");
      var textoCelda1 = document.createTextNode(producto);
      var textoCelda2 = document.createTextNode(precio);
      celda1.appendChild(textoCelda1);
      celda2.appendChild(textoCelda2);
      hilera.appendChild(celda1);
      hilera.appendChild(celda2);
    }

    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("class", "table");
}