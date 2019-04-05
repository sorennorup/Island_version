Result = function(id,profile_id){
    this.id = id;
    this.profile_id = profile_id;
    // Setting data in question, setting data 5 different places
    this.setData = function(){
         
        var results = document.forms[0];
       
        document.getElementById('result').innerHTML = " ";

        var res_arra = ['result','result2','result3','result4','result5','result6'];
        
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
           
           document.getElementById(res_arra[i]).innerHTML = sessionStorage.getItem(value_key);
           
         }
        
    }
    };
     // View stuff
     this.setResultViewIds = function(){
              resultarray =  ['result','result2','result3','result4','result5','result6'];
                var resstr = "<tr>";
                
                for(var i = 0; i < resultarray.length; i++){
                    resstr += '<td id = "'+resultarray[i]+'"></td>' ;
                }
                resstr += '</tr>';
                return resstr;
            };
    

           // set the result into the result divs
    this.setResultView = function(){
                 var res_arra = ['result','result2','result3','result4','result5','result6'];
                for(var i = 0; i < res_arra.length; i++){
                    var keyNum = i+1;
                     var result = 'value'+keyNum+'id'+this.profile_id;
                     
                    document.getElementById(res_arra[i]).innerHTML = sessionStorage.getItem(result);
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
    
    this.resultsForPDF = function(results1,results2,labelarr){
        
        var html;
        
        html = labelarr;
        html += "<tr><td></td></tr>" ;
        html += '<tr>';
        for(let i = 0; i < results1.length; i++){
            html += '<td>'+results1[i]+'</td>';
        }
        html+="</tr>";
        html += "<td>Elevens vurdering</td>" ;
        
         html += '<tr>';
       for(let j = 0; j < results2.length; j++){
            html += '<td>'+results2[j]+'</td>';
        }
        html+="</tr>";
        return html;
      };
    
};
