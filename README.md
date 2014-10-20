##UI

User Interface en Javascript, funciones para facilitar la vida del desarrollador.

    var ui = new UI();
  
###UI.Timer

SubClase ui.Timer que permite habilitar un timer que repita un acción y/o evento 

    ui.Timer

####UI.Timer.Activo

Propiedad tipo Booleano, que permite la activación o desactivación del timer, su valor por defecto es "false"

    ui.Timer.Activo = true;

####UI.Timer.Intervalo

Propiedad tipo Integer, que permite la asignación de la cantidad de veces que se va a repetir el método Tick, su valor por defecto es "0"

    ui.Timer.Intervalo = 1;

####UI.Timer.Unidad

Propiedad tipo Integer, que controla el tiempo de repetición, segun los valores de la enumeración de "ui.Timer.eUnidad" y las opciones del enumerativos son "Segundos, Minutos y/o Horas", su valor por defecto es "0"

    ui.Timer.Unidad = ui.Timer.eUnidad.Segundos;

####UI.Timer.Reiniciar

Propiedad tipo Booleano, que permite la reiniciar el timer, su valor por defecto es "false"

    ui.Timer.Reiniciar = true;

####UI.Timer.Tick

Método, que recibe una function "callback", la cual será la que se ejecutará una vez que el timer complete su ciclo, su valor por defecto es "callback"

    ui.Timer.Tick(
      //callback function
      function(){ document.getElementById("hora").innerHTML=new Date();}
    );
