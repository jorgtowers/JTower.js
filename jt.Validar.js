(function (namespace) {
    //Constructor    
    function Validar() {
        this.Constructor();
    }
    // Variables
    var _patron = null;

    // Métodos
    Validar.prototype.Constructor = function () {
		this.Patron = [
			{"IdElement":"idCampoAValidar","ExpresionRegular":/^[a-zA-Z_áéíóúñ\s]*$/g},
			{"IdElement":"idCampoAValidar","ExpresionRegular":/^[a-zA-Z_áéíóúñ\s]*$/g},
			{"IdElement":"idCampoAValidar","ExpresionRegular":/^[a-zA-Z_áéíóúñ\s]*$/g},
			{"IdElement":"idCampoAValidar","ExpresionRegular":/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/g},
			{"IdElement":"idCampoAValidar","ExpresionRegular":/^[0-9]+$/g}
			];
		this.Inputs();
    }
	
	Validar.prototype.Inputs = function () {			
		var self = this;
		var inputs = document.getElementsByTagName("input");
		if(inputs.length>0){
			var item=null;
			for(i=0;i<inputs.length;i++){
				item =inputs[i]; 
				if(item.type==="text"){				
					item.onblur=function(){
						var expReg= self.ObtenerPatron(this.id);				
						if(!this.value.match(expReg)){
							this.value="";
							this.focus();
						}
					};
				}
				if(item.id==="MainContent_txtPassword"){
					item.oninput=self.StrongPassword;
				}
			}
		}
    }
	
	Validar.prototype.StrongPassword=function () {
		var strength = document.getElementById("lblStrongPassword");
		var strongRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}.*$/;
		var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
		var enoughRegex = new RegExp("(?=.{6,}).*", "g");
		var pwd = document.getElementById("MainContent_txtPassword");
		if (pwd.value.length==0) {
			strength.innerHTML = "Escriba su Password";
		} else if (false == enoughRegex.test(pwd.value)) {
			strength.innerHTML = 'Adicione mas caracteres';
		} else if (strongRegex.test(pwd.value)) {
			strength.innerHTML = '<span style="color:green">Fuerte</span>';
		} else if (mediumRegex.test(pwd.value)) {
			strength.innerHTML = '<span style="color:orange">Moderado</span>';
		} else {
			strength.innerHTML = '<span style="color:red">Debil</span>';
		}
	}
	
	Validar.prototype.ObtenerPatron = function(id){
		var p=null;
		for(o=0;o< this.Patron.length;o++){
			p= this.Patron[o];
			if(p.IdElement==id){
				return p.ExpresionRegular; 
			}
		}
	}
    
	Object.defineProperty(Validar.prototype, "Patron", {
        get: function Patron() {
            return _patron;
        },
        set: function Patron(value) {
            _patron = value;
        }
    });
    
    namespace.Validar = Validar;
} (window.jt=window.jt||{}));
