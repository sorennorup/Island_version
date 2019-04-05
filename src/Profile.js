Profile = function(questions,profile_name,profile_id,labels){
     
    this.profile_id = profile_id;
    this.profile_name = profile_name;
    this.questions =  questions;
    this.labels =  labels;
    
    this.get_profile_name = function(){
           return this.profile_name;
        };
      
    
    this.getQuestions = function(){
        
        let quetionobj = new Question();
          let label;
            if( id === null ){
                id = 1;
            }
            for(let i = 0; i < questions.length; i++){
                if( id == i + 1 ){
                 quetionobj.getQue( this.questions[i] );
                label = labelsarray[i];       
                }
            }
             document.getElementById( "labelsView" ).innerHTML = label;          
    };
    this.getResults = function(){
       
        var values_array = [];
        
        for(var i = 0; i < 6; i++){
                    var keyNum = i+1;
                     var result = 'value'+keyNum+'id'+this.profile_id;
                     
                   values_array[i] = sessionStorage.getItem(result);
                }
                
      
        return values_array;
      
        
    };
        
    
 };
