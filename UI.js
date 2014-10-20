(function (namespace) {
    //Constructor    
    function UI() {
        this.Constructor();
    }
    // Variables
    //var myVariable = UI.prototype;

    // Métodos
    UI.prototype.Constructor = function () {
		//this.myVariable = null;
		this.NoRefresh();			
    }
	UI.prototype.Callback = function (callback) {
		var seft=this;
		if(typeof callback === 'function') {
			callback();
		}
    }
	UI.prototype.NoRefresh = function () {
		document.onkeydown = function (e) {
            var key;
            if (window.event) {
                key = event.keyCode;
            }
            else {
                var unicode = e.keyCode ? e.keyCode : e.charCode;
                key = unicode;
            }
            switch (key) {
                case 116:
                    event.returnValue = false;
                    key = 0;
                    return false;
                case 82:
                    if (event.ctrlKey) {
                        event.returnValue = false;
                        key = 0;
                        return false;
                    }
                default:
                    return true;
            }
        };
    }
	
	UI.prototype.Paginador={
		Contenedor:"",
		ItemsPorPagina:0,
		MaximoPaginas:0,
		AgregarClaseCss:"",
		Mostrar:function(){
			nombreContenedor=this.Contenedor;
			itemsPorPagina=this.ItemsPorPagina;
			maximoPaginasAMostrar=this.MaximoPaginas;
			addClassPagina= this.AgregarClaseCss;
			/// <summary>Páginador dinámico creado vía JavaScript.</summary>
			/// <param name="nombreContenedor" type="String">Nombre del contenedor para buscar el elemento por el metodo document.getElementById, donde se alojarán las nuevas páginas generadas por el páginador.</param>
			/// <param name="itemsPorPagina" type="Number">Indica la cantidad de elementos por página, por defecto se establece 5.</param>
			/// <param name="maximoPaginasAMostrar" type="Number">Indica la cantidad de páginas activas mostradas por el páginador, por defecto se establece 10.</param>
			/// <param name="addClassPagina" type="String">Agrega una subclase a cada página generada.</param>
			/// <seealso cref="paginador">Método requerido por NT.Paginador</seealso>
			/// <returns type="Void">Construye páginas usando Divs y asinandole el Id='pagina+iteradorPaginas'.</returns>
			try {
				if (nombreContenedor.length > 0) {
					var contenedor = document.getElementById(nombreContenedor);
					contenedor.insertAdjacentHTML('afterEnd', ' <div id="paginador"></div> ');
					if (contenedor.parentNode.className === "ajax_waiting") { contenedor.parentNode.className = ""; }
					var notas = contenedor.childNodes;
					var paginador = document.getElementById("paginador");
					if (notas !== null) {
						var inicioPagina = 0;
						var finPagina = itemsPorPagina;
						var totalItems = notas.length;
						var paginas = Math.ceil(totalItems / itemsPorPagina);
						var oldDivs = [];
						oldDivs.push.apply(oldDivs, notas);
						for (a = 0; a < paginas; a++) {
							var div = document.createElement("div");
							div.id = "pagina" + a;
							div.className = "pagina " + (addClassPagina !== undefined ? addClassPagina : '');
							if (a === 0) {
								div.style.display = 'block';
							}
							else {
								div.style.display = 'none';
							}
							contenedor.appendChild(div);
						}
						for (b = 0; b < paginas; b++) {
							var pagina = null;
							var temp = new Array();
							pagina = document.getElementById("pagina" + b);
							temp = oldDivs.slice(inicioPagina, finPagina);
							for (i = 0; i < temp.length; i++) {
								pagina.appendChild(temp[i]);
							}
							finPagina = itemsPorPagina * (b + 2);
							inicioPagina = finPagina - itemsPorPagina;
						}
						for (c = 0; c < (paginas > maximoPaginasAMostrar ? maximoPaginasAMostrar : paginas) - 1; c++) {
							var elemento = document.createElement("a");
							elemento.id = "link" + c;
							elemento.href = "javascript:UI.Paginador.Mover('link" + c + "','pagina" + c + "')";
							elemento.innerHTML = c + 1;
							if (c === 0) {
								elemento.className = "numeroPagina activa";
							}
							else {
								elemento.className = "numeroPagina";
							}
							paginador.appendChild(elemento);
						}
						contenedor.style.display = 'block';
					}
				}
			}
			catch (err) {
				
					console.log('error en Metodo: "paginadorMostrar(nombreContenedor,  itemsPorPagina, maximoPaginasAMostrar)", ' + err.message);
				
			}
		},
		Mover:function(nombrelink, nombrePagina){
			/// <summary>Muestra una página requerida por el páginador.</summary>
			/// <param name="nombrelink" type="String">Nombre del Link para buscar el elemento por el metodo document.getElementById y asignarle la clase "numeroPagina activa".</param>
			/// <param name="nombrePagina" type="String">Obtiene la colección de páginas para mostrar la que se este pidiendo mostrar, y se activa pagina[i]style.display='block'.</param>
			/// <seealso cref="paginador">Método requerido por NT.Paginador</seealso>
			/// <returns type="Void">No retorna valor.</returns>
			var paginas = document.querySelectorAll("div.pagina");
			var pagina = document.getElementById(nombrePagina);
			var link = document.getElementById(nombrelink);
			var links = document.querySelectorAll("a.numeroPagina");
			if (links !== null) {
				for (i = 0; i < links.length; i++) {
					links[i].className = 'numeroPagina';
				}
			}
			if (paginas !== null) {
				for (i = 0; i < paginas.length; i++) {
					paginas[i].style.display = 'none';
				}
			}
			if (pagina !== null) {
				pagina.style.display = 'block';
			}
			if (link !== null) {
				link.className = "numeroPagina activa";
			}
		}
	}
    
    UI.prototype.Timer={
		Intervalo:0,
		Unidad:0,
		Activo:false,
		Reiniciar:false,
		Tick:function (callback) {
			var seft=this;
			var time=(this.Unidad===this.eUnidad.Segundos?1000:(this.Unidad===this.eUnidad.Minutos?60000:3600000))*this.Intervalo;
			var timer;
			(function loop() {
				if(seft.Reiniciar){
						time=(seft.Unidad===seft.eUnidad.Segundos?1000:(seft.Unidad===seft.eUnidad.Minutos?60000:3600000))*seft.Intervalo;
						seft.Reiniciar=false;
					}
				if(seft.Activo)
					{
						if(typeof callback === 'function') {
							callback();
						}					
					}
				timer = setTimeout(loop, time);
			})();
		}
	}
	
	
    //Propiedades
	Object.defineProperty(Object.prototype,'Enum', {
		value: function() {
			for(i in arguments) {
				Object.defineProperty(this,arguments[i], {
					value:parseInt(i),
					writable:false,
					enumerable:true,
					configurable:true
				});
			}
			return this;
		},
		writable:false,
		enumerable:false,
		configurable:false
	}); 
	
	Object.defineProperty(UI.prototype.Timer, "eUnidad", {
        get: function eUnidad() {
            return {}.Enum('Segundos','Minutos','Horas');
        }
    });
    
    namespace.UI = UI;
} (window));
