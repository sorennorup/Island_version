PrintToPdf = function(){
	
	this.downloadPDF = function() {
		var canvas = document.querySelector( '#myChart' );
    
		//creates image
		var canvasImg = canvas.toDataURL( "image/png", 1.0 );
    
		//creates PDF from img
		var doc = new jsPDF( 'portrait' );
    
		doc.autoTable({
       
			margin: { top:45 },
			html: '#results-view-for-pdf',
			theme: 'striped'
               
	   });
		doc.text( 15,20, "Erhvervsparathed " );
		doc.setFontSize(20);
		doc.addImage( canvasImg, 'PNG', 20, 100, 160,160 );
		doc.save( 'canvas.pdf' );
	};
            
	this.resultsForPDF = function( results1,results2,results3,labelarr ){
        
        var html;
        
        html = labelarr;
        html += "<tr><td>Ungur</td></tr>" ;
        html += '<tr>';
        for(let i = 0; i < results1.length; i++){
            html += '<td>'+results1[i]+'</td>';
        }
        html+="</tr>";
        html += "<tr><td><b>Markmið</b></td></tr>" ;
        
         html += '<tr>';
       for(let j = 0; j < results2.length; j++){
            html += '<td>'+results2[j]+'</td>';
        }
        html+="</tr>";
         html += "<tr><td>Vejleder</td></tr>" ;
         html += '<tr>';
       for(let k = 0; k < results3.length; k++){
            html += '<td>'+results3[k]+'</td>';
        }
        html+="</tr>";
        
        return html;
      };
	
};

let PDF = new PrintToPdf();
//donwload pdf from original canvas
/*function downloadPDF() {
  //var canvas = document.querySelector('#myChart');
	//creates image
	//var canvasImg = canvas.toDataURL("image/jpeg", 1.0);
  
	//creates PDF from img
	var doc = new jsPDF('landscape');
	doc.setFontSize(20);
	doc.text(15, 15, "Cool Chart");
	//doc.addImage(canvasImg, 'JPEG', 10, 10, 280, 150 );
	doc.save('canvas.pdf');
}
*/