PrintToPdf = function(results1,results2,results3,labelarr){
	this.theFontSize = 13;
	

	this.downloadResultsOnly = function(){
		var canvas = document.querySelector( '#myChart' );
		this.thisdate = function() {
			var now = new Date();
			return now.getDate()+'.' + parseInt(now.getMonth()+1)+' '+now.getFullYear();
		};
		//creates image
		var canvasImg = canvas.toDataURL( "image/png", 1.0 );
		
		pdfMake.setFonts(fonts);
		var dd = {
			content: [
				{ text: sessionStorage.getItem( 'name' )+' '+ this.thisdate()},
				{ text: 'Mat � starfs�roska ', style: 'header' },
				
				
			{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [labelarr,
					[{text: '�itt mat (r���egi)',colSpan: 6, alignment: 'left',style: 'profile1Text'}],
					results1,
					[{text: 'Markmi�', colSpan: 6, alignment: 'left',style: 'profile2Text'}],
					results2,
					[{text: 'Mat r��gjafa',  colSpan: 6, alignment: 'left',style: 'profile3Text'}],
					results3
				]
			},
		
		layout: 'headerLineOnly'
		},
		{
		image:canvasImg,
		width: 700,
		margin: [-90, 0]
		},
		
		
		{text: 'Athugasemdir',style: 'header2'},
		
		{
		table: {	
			body:[	
					[{text: '�itt mat (r���egi)',alignment: 'left',style: 'profile1Text'}],
					[createCommentArray(commentsArrProf1)],
					[{text: 'Markmi�', alignment: 'left',style: 'profile2Text'}],
					[createCommentArray(commentsArrProf2)],
					[{text: 'Mat r��gjafa', alignment: 'left',style: 'profile3Text'}],
					[createCommentArray(commentsArrProf3)]
			]
		},
		
		layout: 'noBorders',
		style: 'commenttext'
	}
	],

		styles: {
			header: {
				fontSize: 25,
				alignment: 'justify',
				margin: [0, 9, 0, 9] ,
			},
			header2: {
				fontSize: 18,
				lineHeight: 2.0
			},
			commenttext: {
				fontSize: 10,
				lineHeight:1.5,
			},
			profile1Text: {
				fontSize: 13,
				color: '#609fc2'
			},
			profile2Text: {
				fontSize: 13,
				color: '#dfab61'
			},
			profile3Text: {
				fontSize: 13,
				color: '#001b4d',
			}

		}
	};
		pdfMake.createPdf(dd).download();
	};

	createCommentArray = function (commentArr) {
		let comments = [];
		let labels = ["F�lagslegar a�st��ur ","Markmi�asetning","Hvatning","Sveigjanleiki","Seigla","Starfsh�fni"];
		for(let i = 0; i < labelarr.length; i++) {
			let props = [labels[i]+'  '+commentArr[i]];
			comments.push(props);
		}
		return comments;
	}
	
	this.downloadFullPDF = function() {
		this.thisdate = function() {
			var now = new Date();
			return now.getDate()+'.' + parseInt(now.getMonth()+1)+' '+now.getFullYear();
		};
		var canvas = document.querySelector( '#myChart' );
		//creates image
		var canvasImg = canvas.toDataURL( "image/png", 1.0 );
		pdfMake.setFonts(fonts);
		var dd = {	
			content: [
				{ text: sessionStorage.getItem( 'name' )+' '+ this.thisdate()},
				{text: 'Mat � starfs�roska ', style: 'header'
				},
		
			{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [labelarr,
					[{text: '�itt mat (r���egi)',colSpan: 6, alignment: 'left',style: 'profile1Text'}],
					results1,
					[{text: 'Markmi�', colSpan: 6, alignment: 'left',style: 'profile2Text'}],
					results2,
					[{text: 'Mat r��gjafa',  colSpan: 6, alignment: 'left',style: 'profile3Text'}],
					results3
				]
			},
			layout: 'headerLineOnly'
		},
		{
			image:canvasImg,
	        width: 700,
			margin: [-90, 0]
		},
		
		 
		{text: '�itt mat (r���egi)', style: 'header2'},
			
		
		{
			style: 'tableExample',
			
			table: {
			
				body:
				
				fullProfile1,
				
				
			},
			
			layout: 'headerLineOnly'
		},
		
		{text: 'Markmi�', style: 'header2'},	
		
		{
			style: 'tableExample',
			
			table: {
			
				body: fullProfile2
				
				
			},
			
			layout: 'headerLineOnly'
		},
		{text: 'Mat r��gjafa', style: 'header2'},	
		
		{
			style: 'tableExample',
			
			table: {
			
				body:
				
				fullProfile3,
				
			},
			
			layout: 'headerLineOnly'
		},
	],
	styles: {
		header: {
			fontSize: 25,
			bold: true,
			alignment: 'justify',
			marginBottom: 10,
			margin: [0,9,0,9]
		},
		header2: {
			fontSize: 20,
			marginBottom: 5
		},
		commenttext: {
			fontSize: 10	
		},
		profile1Text: {
			color: '#609fc2'
		},
		profile2Text: {
			color: '#dfab61'
		},
		profile3Text: {
			color: '#001b4d'
		}

	}
	
};
				
		pdfMake.createPdf(dd).download();
    
	
	
	};
            

	
		
};




