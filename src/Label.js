Label = function(){
	
	this.setLabels = function(view){
		var labelarr = ["F�lagslegar a�st��ur ","Markmi�asetning","Hvatning","Sveigjanleiki","Seigla","Starfsh�fni"];
		var labelstr = "";
		for(var i = 0; i < labelarr.length; i++){
			if(view.innerHTML.includes(labelarr[i])){
				labelstr += '<th align = "left"  class = "label  selected clickevent">'+labelarr[i]+'</th>';
			}
			else{
				labelstr += '<th align = "left"  class = "label clickevent ">'+labelarr[i]+'</th>';
			}
		}
		return labelstr;   
	}; 

	this.setCommentViewLabels = function(){
		var labelarr = ["F�lagslegar a�st��ur ","Markmi�asetning","Hvatning","Sveigjanleiki","Seigla","Starfsh�fni"];
		let profiles = ['�itt mat (r���egi)','Markmi�','Mat r��gjafa'];
		let comments = [commentsArrProf1,commentsArrProf2,commentsArrProf3];
		
		let html = "";
		for(let j = 0; j < profiles.length; j++){
		 html += "<tr><th>"+profiles[j]+"</th></tr>";
			for(let i = 0; i < labelarr.length; i++){
				html += '<tr><td>'+labelarr[i]+'</td><td> '+comments[j][i]+'</td>';
			}
		}
		return html;
	}
};      
  
var labelsarray =  [" F�lagslegar a�st��ur ","Markmi�asetning","Hvatning","Sveigjanleiki","Seigla","Starfsh�fni"];

	   var label;
	   
	   var id = sessionStorage.getItem('on_load_counter');
	  
	   if(id == 1){
		label = labelsarray[0];
	   }
	   else if(id == 1){
		label = labelsarray[1];
	   }
	   else if(id == 3){
		label = labelsarray[2];
	   }
   
 
   
