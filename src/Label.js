Label = function(){
       
    this.setLabels = function(view){
                var labelarr =["F�lagslegar a�st��ur","Markmi�asetning","Hvatning","Sveigjanleiki","Seigla","Starfsh�fni"];
                var labelstr = "";
                
                for(var i = 0; i < labelarr.length; i++){
                    if(labelarr[i] == view.innerHTML){
                        labelstr += '<th align = "left"  class = "label  selected clickevent">'+labelarr[i]+'</th>';
                    }
                    else{
                    labelstr += '<th align = "left"  class = "label clickevent ">'+labelarr[i]+'</th>';
                    }
                }
                
                return labelstr;   
            }; 
    };      
  
       var labelsarray =  ["F�lagslegar a�st��ur","Markmi�asetning","Hvatning","Sveigjanleiki","Seigla","Starfsh�fni"];
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
   
 
   
