Result = function(id,profile_id){
    this.id = id;
    this.profile_id = profile_id;
    this.res_array = ['result','result2','result3','result4','result5','result6'];
    // Setting data in question, setting data 5 different places
    this.setData = function(){
         
        var results = document.forms[1];
        
       
        document.getElementById('result').innerHTML = " ";

        //var res_arra = ['result','result2','result3','result4','result5','result6'];
        
        var all_res = this.resultarray(results);
        
        var res = this.calculateAverage(results);
        
        if(res.toString().length > 3){
            res = res.toFixed(2);
        }
       
        if(isNaN(res)){
                    res = 0;
                 }
        else if(res === undefined){
            res = 0;
        }
        var num_of_ids = 6;
        
        for(var i = 0; i < num_of_ids; i++){         
         
         if(this.id == i+1){
            
           // Create the data keys
           var keyNum = i+1;
           var value_key = 'value'+keyNum+'id'+this.profile_id;
           
           var all_value_key = 'values'+keyNum+'id'+sessionStorage.profileid;
           //store the data into the sessionstorage
           sessionStorage.setItem(all_value_key,all_res);

           sessionStorage.setItem(value_key,res); 

           sessionStorage.setItem(value_key,res);
           console.log(sessionStorage.getItem(value_key));
           
           document.getElementById(this.res_array[i]).innerHTML = sessionStorage.getItem(value_key);
           
         }
        
    }
    };
     // store the manual data and put it into the result table
    this.setManualData = function() {
        
         var results = document.forms[2];
         var resarray = this.resultarray(results);
         
       for(var i = 0; i < 6; i++){         
         var res = resarray[i];
           // Create the data keys
         var keyNum = i+1;
         var value_key = 'value'+keyNum+'id'+this.profile_id;
           
         sessionStorage.setItem(value_key,res); 

           //console.log(sessionStorage.getItem(value_key));
           
           document.getElementById(this.res_array[i]).innerHTML = sessionStorage.getItem(value_key);
                       
    }
        
    };
     // View stuff
     this.setResultViewIds = function(){
                var resstr = "<tr>";
                
                for(var i = 0; i < this.res_array.length; i++){
                    resstr += '<td id = "'+this.res_array[i]+'"></td>' ;
                }
                resstr += '</tr>';
                return resstr;
            };
            
    

           // set the result into the result divs
    this.setResultView = function(){
                for(var i = 0; i < this.res_array.length; i++){
                    var keyNum = i+1;
                     var result = 'value'+keyNum+'id'+this.profile_id;
                     
                    document.getElementById(this.res_array[i]).innerHTML = sessionStorage.getItem(result);
                }
                
        };
    this.setMobileResultView = function(labelArr){
            let html = "<h3>Resultater</h3>";
            html += ' <ul class="list-group">';
             for(var i = 0; i < this.res_array.length; i++){
                    var keyNum = i+1;
                     var result = 'value'+keyNum+'id'+this.profile_id;
                     html += '   <li class = "list-group-item"><span class = "label-header">'+
                                labelArr[i]+'</span>'+
                                '<span class = "right">'+sessionStorage.getItem(result)+'</span></li>';
                    
                   
                }
                html += '</ul>';
                 document.getElementById('resultMobileView').innerHTML = html;
            
        };
          // insert the result directly, without the questions
    this.insertResultDirect = function() {
          
                for(var i = 0; i < this.res_array.length; i++){
                    var keyNum = i+1;
                     var result = 'value'+keyNum+'id'+this.profile_id;
                     
                    document.getElementById(this.res_array[i]).innerHTML =
                    ' <input id = "score"  class = "score form-control form-control-lg" min = "0" max = "4"'+
                             ' placeholder="0" size="2" step="0.1" autocomplete="off" value = "'+
                           sessionStorage.getItem(result)+'" name = "manual-input"/>';
                }
        
        
    };
    
    this.calculateAverage = function (formObj){
                var sum = 0;
                var num = 0;
                for(var i = 0; i < formObj.length-1; i++){
                    sum += parseInt(formObj[i].value);
                
                    if(this.valueNotZero(formObj[i].value)){
                        num++;
                    }
                }
                
               return sum/num;
            };
             // Calculate the average of the the inputs
            this.calculateAverageArray = function (array){
                var sum = 0;
                var num = 0;
                for(var i = 0; i < array.length-1; i++){
                    sum += parseInt(array[i]);
                
                    if(this.valueNotZero(array[i])){
                        num++;
                    }
                }
                
               return sum/num;
            };
            // Create an array of the form object
    this.resultarray = function (formObj){
                var res = [];
                 for(var i = 0; i < formObj.length-1; i++){
                    
                    
                    res[i] = formObj[i].value;
                    
                }
               return res;
                
            };
            
          
            
    this.valueNotZero = function(number){

            return  parseInt(number)!= 0;
                             
    };
    
   
    
};
