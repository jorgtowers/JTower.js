(function () {
	var imgs = document.getElementsByTagName("img");
	var img = null;
	var alto = 0;
	var isDiv=false;
	var div=null;
	for (i = 0; i < imgs.length; i++) {
		img = imgs[i];
		div=img.parentNode;
		while(!isDiv){					
			if(div.tagName === "DIV"){						
				break;
			} else {
				div=div.parentNode;	
			}
		}
		alto=div.clientHeight;
		if (img.naturalHeight > img.naturalWidth) {
			img.style.width = ((alto / img.naturalHeight) * img.naturalWidth) + "px" ;
			img.style.height = alto + "px";
			img.style.margin = "0 auto";
			div.style.backgroundColor = "#c2c2c2";
		}
	}
}());
