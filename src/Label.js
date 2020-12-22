Label = function(){
	
	this.setLabels = function(view){
		var labelarr = ["Félagslegar aðstæður ","Markmiðasetning","Hvatning","Sveigjanleiki","Seigla","Starfshæfni"];
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
		var labelarr = ["Félagslegar aðstæður ","Markmiðasetning","Hvatning","Sveigjanleiki","Seigla","Starfshæfni"];
		let profiles = ['Þitt mat (ráðþegi)','Markmið','Mat ráðgjafa'];
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
  
var labelsarray =  [" Félagslegar aðstæður ","Markmiðasetning","Hvatning","Sveigjanleiki","Seigla","Starfshæfni"];

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
   
 
   
