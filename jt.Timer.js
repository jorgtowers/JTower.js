(function (namespace) {
    //Constructor    
    function Timer() {
        this.Constructor();
    }
    // Variables
    var intervalo = Timer.prototype;
	var activo = Timer.prototype;
	var unidad = Timer.prototype;
	var reiniciar=Timer.prototype;

    // Métodos
    Timer.prototype.Constructor = function () {
		this.intervalo = 0;
		this.unidad = 0;
		this.activo = false;
		this.reiniciar=false;			
    }
	Timer.prototype.Tick = function (callback) {
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
    
	Object.defineProperty(Timer.prototype, "eUnidad", {
        get: function eUnidad() {
            return {}.Enum('Segundos','Minutos','Horas');
        }
    });
	Object.defineProperty(Timer.prototype, "Unidad", {
        get: function Unidad() {
            return unidad;
        },
        set: function Unidad(value) {
            unidad = value;
        }
    });
    Object.defineProperty(Timer.prototype, "Intervalo", {
        get: function Intervalo() {
            return intervalo;
        },
        set: function Intervalo(value) {
            intervalo = value;
        }
    });
	 Object.defineProperty(Timer.prototype, "Activo", {
        get: function Activo() {
            return activo;
        },
        set: function Activo(value) {
            activo = value;
        }
    });
	Object.defineProperty(Timer.prototype, "Reiniciar", {
        get: function Reiniciar() {
            return reiniciar;
        },
        set: function Reiniciar(value) {
            reiniciar = value;
        }
    });

    namespace.Timer = Timer;
} (window.jt=window.jt||{}));
