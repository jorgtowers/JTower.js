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
	UI.prototype.CheckConnection = function () {
		/// <summary>Valida que la conexión de internet este activa.</summary>
		if(navigator.onLine!=undefined){
			if(navigator.onLine) {
				return true;
			} else {
				return false;
			}
		} else {
			var xhr = new XMLHttpRequest();
			var file =  "http://" + window.location.host +"/" ;
			var r = Math.round(Math.random() * 10000);
			xhr.open('HEAD', file + "?CheckConnection=" + r, false);
			try {
				xhr.send();
				if (xhr.status >= 200 && xhr.status < 304) {
					return true;
				} else {
					return false;
				}
			 } catch (e) {
				return false;
			 }
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
	
	    
    namespace.UI = UI;
} (window.jt=window.jt||{}));
