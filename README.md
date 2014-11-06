##Paginador

Plugin que permite crear un páginador dinámico a partir de una lista.

    <html>
    	<head>
    		<title></title>
    	<script type="text/javascript" language="javascript" src="jt.Paginador.js"></script>	
    	<style type="text/css">
    		div#paginador>.numeroPagina {
    			width: 24px;
    			height: 24px;
    			border: 1px solid;
    			padding: 10px;
    			margin: 5px;
    			border-radius: 50%;
    		}
    	</style>
    	</head>
    	<body>
    		
    		<section id="content">
    			<article>Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. </article>
    			<article>Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. </article>
    			<article>Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. </article>
    			<article>Lorem4 ipsum dolor sit amet, consectetur adipiscing elit. </article>
    			<article>Lorem5 ipsum dolor sit amet, consectetur adipiscing elit. </article>
    			<article>Lorem6 ipsum dolor sit amet, consectetur adipiscing elit. </article>
    			<article>Lorem7 ipsum dolor sit amet, consectetur adipiscing elit. </article>
    			<article>Lorem8 ipsum dolor sit amet, consectetur adipiscing elit. </article>
    			<article>Lorem9 ipsum dolor sit amet, consectetur adipiscing elit. </article>
    			<article>Lorem10 ipsum dolor sit amet, consectetur adipiscing elit. </article>			
    		</section>
    		
    	</body>
    	<script type="text/javascript">
    		window.onload=function(){
    			this.paginador = new  jt.Paginador();		
    			this.paginador.Contenedor="content";
    			this.paginador.ItemsPorPagina=5;
    			this.paginador.MaximoPaginas=10;
    			this.paginador.Mostrar();
    		}
    	</script>
    </html>

##UI

User Interface en Javascript, funciones para facilitar la vida del desarrollador.

    var ui = new UI();
  
##Timer

Plugin que permite habilitar un timer que repita un acción y/o evento 

        <html>
    	<head>
    		<title></title>
    		<script type="text/javascript" language="javascript" src="jt.UI.js"></script>
    		<script type="text/javascript" language="javascript" src="jt.Timer.js"></script>		
    	</head>
    	<body>
    		<section id="content">
    		</section>
    	</body>
    	<script type="text/javascript">
    		window.onload=function(){
    			this.timer = new  jt.Timer();		
    			this.timer.Intervalo=1;
    			this.timer.Activo=true;
    			this.timer.Unidad=this.timer.eUnidad.Segundos;
    			this.timer.Tick(function(){
    				var hora=document.getElementById("content");
    				hora.innerHTML=new Date();
    			});
    		}
    	</script>
    	<html>

####Timer.Activo

Propiedad tipo Booleano, que permite la activación o desactivación del timer, su valor por defecto es "false"

    jt.Timer.Activo = true;

####Timer.Intervalo

Propiedad tipo Integer, que permite la asignación de la cantidad de veces que se va a repetir el método Tick, su valor por defecto es "0"

    jt.Timer.Intervalo = 1;

####Timer.Unidad

Propiedad tipo Integer, que controla el tiempo de repetición, segun los valores de la enumeración de "ui.Timer.eUnidad" y las opciones del enumerativos son "Segundos, Minutos y/o Horas", su valor por defecto es "0"

    jt.Timer.Unidad = jt.Timer.eUnidad.Segundos;

####Timer.Reiniciar

Propiedad tipo Booleano, que permite la reiniciar el timer, su valor por defecto es "false"

    jt.Timer.Reiniciar = true;

####Timer.Tick

Método, que recibe una function "callback", la cual será la que se ejecutará una vez que el timer complete su ciclo, su valor por defecto es "callback"

    jt.Timer.Tick(
      //callback function
      function(){ document.getElementById("hora").innerHTML=new Date();}
    );

####Dependencia jt.UI

Este timer depende del jt.UI.js, porque en el se define el método para hacer enumerativos y por herencia se usa en jt.Timer.js
    
