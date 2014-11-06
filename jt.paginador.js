(function (namespace) {
    //Constructor    
    function Paginador() {
        this.Constructor();
    }
    
	var	_Contenedor="";
	var	_ItemsPorPagina=0;
	var	_MaximoPaginas=0;
	var	_AgregarClaseCss="";

    Paginador.prototype.Constructor = function () {
					
    }
	
    
	Paginador.prototype.Mostrar = function(){
		var	nombreContenedor=this.Contenedor;
		var	itemsPorPagina=this.ItemsPorPagina;
		var	maximoPaginasAMostrar=this.MaximoPaginas;
		var	addClassPagina= this.AgregarClaseCss;
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
							elemento.href = "javascript:jt.Paginador.Mover('link" + c + "','pagina" + c + "')";
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
    }
	
	Paginador.prototype.Mover = function(nombrelink, nombrePagina){
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
	
	Object.defineProperty(Paginador.prototype, "Contenedor", {
        get: function Contenedor() {
            return _Contenedor;
        },
        set: function Contenedor(value) {
            _Contenedor = value;
        }
    });
	Object.defineProperty(Paginador.prototype, "ItemPorPagina",{
		get: function ItemPorPagina(){
            return _ItemsPorPagina;
        },
        set: function ItemPorPagina(value) {
            _ItemsPorPagina = value;
        }
    });
	Object.defineProperty(Paginador.prototype, "MaximoPaginas",{
		get: function MaximoPaginas(){
            return _MaximoPaginas;
        },
        set: function MaximoPaginas(value) {
            _MaximoPaginas = value;
        }
    });
	Object.defineProperty(Paginador.prototype, "AgregarClaseCss",{
		get: function AgregarClaseCss(){
            return _AgregarClaseCss;
        },
        set: function AgregarClaseCss(value) {
            _AgregarClaseCss = value;
        }
    });
    
    namespace.Paginador = Paginador;
} (window.jt=window.jt||{}));
