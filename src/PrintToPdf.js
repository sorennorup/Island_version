PrintToPdf = function(){
	
	this.downloadPDF = function() {
    var canvas = document.querySelector('#myChart');
    
	//creates image
	var canvasImg = canvas.toDataURL("image/png", 1.0);
    
	//creates PDF from img
	var doc = new jsPDF('portrait');
    
    doc.autoTable({
       
        margin: {top:45},
        html: '#results-view-for-pdf',
		theme: 'striped'
               
    });
	doc.text(15,20, "Vocational maturity");
    doc.setFontSize(20);
	doc.addImage(canvasImg, 'PNG', 5, 100, 200,200 );
	doc.save('canvas.pdf');
};
            
	
	
	
	
};

let PDF = new PrintToPdf();
//donwload pdf from original canvas
function downloadPDF() {
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