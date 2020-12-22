View = function(){

	this.taxomoni = ['Á ekki við ','Mjög ósammála','Frekar ósammála','Hlutlaus','Frekar sammála','Mjög sammála'];

	this.setTitle = function(){
		let html = '<h1>Mat á starfsþroska  <br/></h1>';
		document.getElementById('title').innerHTML = html;
	}

	
	this.displayProfileButtons = function(){
		let html = ' <div class = "profile-buttons">'+
		   '<button id = "profileid_1" class = "btn-success profile-menu-item" value = 1>Þitt mat (ráðþegi)</button>'+
		   '<button id = "profileid_2" class = "btn-success profile-menu-item" value = 2>Markmið</button>'+
		   '<button id = "profileid_3" class = "btn-success profile-menu-item" value = 3>Mat ráðgjafa</button>'+
	   '    </div>';
	   return html;
	}

	this.setTaxamoniView = function(){
		let html = '<div class = "taxo-view">';
		for(let i = 0; i < this.taxomoni.length; i++){
		 html += '<p>'+this.taxomoni[i]+'<span style ="margin-left: 5px;"></span></p>';
		}
		html += '</div>';
		return html;  
	 };
	 
	 this.getTaxomoniView = function(){
		document.getElementById('tax').innerHTML = this.setTaxamoniView();
	 }
	 
	 this.displayManualInputView = function(){
		 let html = '<div id = "info-box">'+
			   ' <a style = "" class = "" href = "index.html">Svara með spurningum</a><br/> Veldu tölu á skalanum 0-5</div>'+
				'<form action = "resultInsert.html"><div class = "manualView"  id = "resultViewManual"> </div>'+         
				'<input id = "manual-sub"  class = "btn btn-success" type = "submit" value= "Næsta" /></form>';
		 return html;
	 };

	 this.displayInfoMessage = function(){
		  let message = 
			 '<a style = " z-index:9999; color: #71b7df; text-decoration: underline;"  href = "resultInsert.html"> Sleppa spurningum</a>'+
			   ' <br/>'+
			   ' <a style = " z-index:9999; color: #71b7df;" href = "measure.html"></a>';
		return message;
	 };
	
	 this.setBackAndForward = function(){
		let html = '<a id = "back"></a> <a class = "sub"  id = "forward"></a>';
		
		return html;
	}

	this.getBackAndForward = function(){
		document.getElementById('back-and-forward').innerhtml = this.setBackAndForward();
	}

	this.displayFooter = function(){
		let html = '<div class = " container logos">  '+  
						'<img class = "footer-logo"  src = "logoer/YIT-fin-clean.png"  />'+
					
						'<img class = "footer-logo"  src = "logoer/Erasmus-250x59.png"  />'+
					
						'<img class = "footer-logo"  src = "logoer/vmst.png"  />'+
					'</div>';
			html +=	'<div id = "footer-links"> '+
						'<a href = "Guide for professionals - version 2.0.pdf" target="_blank" class = "footer-arrow footer-link">Hlekkur á handbók fyrir fagaðila (opnast í nýjum glugga)</a>'+
						'<a href = "https://vinnumalastofnun.is/" target="_blank" class = "footer-arrow footer-link-project">vinnumalastofnun.is</a>'+
						'<a href = "https://youth-it.cool/" target="_blank" class = "footer-arrow footer-link-project">Youth in transition</a>'
						
					'</div>';
			html += '<div id = "footer__meta-info">'+
			         '<p class = "footer__title">Mat á starfsþroska </p>'+

					'<br/><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.';
		return html;
		
	};
};

let newView = new View();

