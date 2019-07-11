PrintToPdf = function(results1,results2,results3,labelarr){
	
  this.downloadResultsOnly = function(){
	
	var canvas = document.querySelector( '#myChart' );
		
		//creates image
		var canvasImg = canvas.toDataURL( "image/png", 1.0 );
		pdfMake.setFonts(fonts);
		
	
		var dd = {
		
	content: [
		
		{text: 'Niðurstöður', style: 'header'},
		
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [labelarr,
						[{text: 'Þitt mat (ráðþegi)',colSpan: 6, alignment: 'left'}],
						results1,
						[{text: 'Markmið', colSpan: 6, alignment: 'left'}],

						results2,
						[{text: 'Mat ráðgjafa',  colSpan: 6, alignment: 'left'}],

						results3
					  ]
			},
				
			layout: 'headerLineOnly'
		},
		{
			image:canvasImg,
	        width: 400
		}
	
	],
		};
	pdfMake.createPdf(dd).download();
  };
	
	
	this.downloadFullPDF = function() {
		var canvas = document.querySelector( '#myChart' );
		
		//creates image
		var canvasImg = canvas.toDataURL( "image/png", 1.0 );
		pdfMake.setFonts(fonts);
		
	
		var dd = {
		
	content: [
		
		{text: 'Resultater', style: 'header'},
		
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [labelarr,
						[{text: 'Þitt mat (ráðþegi)',colSpan: 6, alignment: 'left'}],
						results1,
						[{text: 'Markmið', colSpan: 6, alignment: 'left'}],

						results2,
						[{text: 'Mat ráðgjafa',  colSpan: 6, alignment: 'left'}],

						results3
					  ]
			},
				
			layout: 'headerLineOnly'
		},
		{
			image:canvasImg,
	        width: 400
		},
		{text: 'Þitt mat (ráðþegi)', style: 'header'},	
		
		{
			style: 'tableExample',
			
			table: {
			
				body:
				
				fullProfile1,
				
			},
			
			layout: 'headerLineOnly'
		},
		
		{text: 'Markmið', style: 'header'},	
		
		{
			style: 'tableExample',
			
			table: {
			
				body: fullProfile2
				
				
			},
			
			layout: 'headerLineOnly'
		},
		{text: 'Mat ráðgjafa', style: 'header'},	
		
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
			alignment: 'justify'
		}
	}
	
};
				
		pdfMake.createPdf(dd).download();
    
	
	};
            
	
		
};




