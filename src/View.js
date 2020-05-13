View = function(){

	this.taxomoni = ['Ikke vigtigt','Vil gerne','Prøver','I gang','Godt på vej','Styr på det'];

	this.setTitle = function(){
		let html = '<h1>ERHVERVSPARATHED <br/><span style = "text-transform:lowercase; font-size: 1.9rem;">- En selvevaluering i dialog</span> </h1>';
		document.getElementById('title').innerHTML = html;
	}

	
	this.displayProfileButtons = function(){
		let html = ' <div class = "profile-buttons">'+
		   '<button id = "profileid_1" class = "btn-success profile-menu-item" value = 1>Ung</button>'+
		   '<button id = "profileid_2" class = "btn-success profile-menu-item" value = 2>Mål</button>'+
		   '<button id = "profileid_3" class = "btn-success profile-menu-item" value = 3>Professionel</button>'+
	   '    </div>';
	   return html;
	}

	this.setTaxamoniView = function(){
		let html = '<div class = "taxo-view">';
		for(let i = 0; i < this.taxomoni.length; i++){
		 html += '<p>'+this.taxomoni[i]+'<span style ="margin-left: 5px;"></span>'+i+'</p>';
		}
		html += '</div>';
		return html;  
	 };
	 
	 this.getTaxomoniView = function(){
		document.getElementById('tax').innerHTML = this.setTaxamoniView();
	 }
	 
	 this.displayManualInputView = function(){
		 let html = '<div id = "info-box">'+
			   ' <a style = "" class = "" href = "index.html">Besvar med spørgsmål</a><br/> Indtast fra skalaen 0 - 5 (decimaler er mulige)</div>'+
				'<form action = "resultInsert.html"><div class = "manualView"  id = "resultViewManual"> </div>'+         
				'<input id = "manual-sub"  class = "btn btn-success" type = "submit" value= "Videre" /></form>';
		 return html;
	 };

	 this.displayInfoMessage = function(){
		  let message = 
			 '<a style = " z-index:9999; color: #71b7df; text-decoration: underline;"  href = "resultInsert.html"> Spring spørgsmål over</a>'+
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
					
						'<img class = "footer-logo"  src = "logoer/UUDK-logo-300W.png"  />'+

						'<img class ="footer-logo"  src = "logoer/moeve.png"  />'+
					'</div>';
			html +=	'<div id = "footer-links"> '+
						'<a href = "#" class = "footer-arrow footer-link">Tak til</a>'+
						'<a href = "TOOL-Erhvervsparathed2020-april.pdf" target="_blank" class = "footer-arrow footer-link">Guide for anvendelse (Pdf til download, åbner nyt vindue)</a>'+
						'<a href = "https://youth-it.cool/"class = "footer-arrow footer-link-project">Youth in transition</a>'+
						'<a href = "https://ungemedkant.dk/syddanmark/" class = "footer-arrow footer-link-project">Unge med kant Syddanmark</a>'+
						'<a href = "https://ungemedkant.dk/hovedstaden/" class = "footer-arrow footer-link-project">Unge med kant Hovedstaden</a>'
					'</div>';
			html += '<div id = "footer__meta-info">'+
			         '<p class = "footer__title">Erhvervsparathed – en selvevaluering i dialog</p>'+

					'<p>vs. 2.0, marts 2020</p></br>'+
					'<p>Licensed under Creative Commons</p>'+
					'<p>Attribution-NonCommercial-ShareAlike 4.0</p>'+
					'<p>International (CC BY-NC-SA 4.0)</p>'+
					'</div>';
		return html;
		
	};
};

let newView = new View();

