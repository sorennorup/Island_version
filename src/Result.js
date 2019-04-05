Result = function(id,profile_id){
    this.id = id;
    this.profile_id = profile_id;
    this.res_arra = ['result','result2','result3','result4','result5','result6'];
    // Setting data in question, setting data 5 different places
    this.setData = function(){
        this.resetResultView();
        for( var i = 0; i < 6; i++ ){          
          if( this.id == i + 1 ){  
           this.storeResults( this.createResultKeys( i + 1 )[1],
                              this.resultarray( document.forms[0] ),
                              this.createResultKeys( i + 1 )[0],
                              this.handleResults( document.forms[0] ) ); //store the data into the sessionstorage         
           document.getElementById( this.res_arra[i] ).innerHTML = sessionStorage.getItem(this.createResultKeys(i + 1)[0]);    
          }  
        }
    };
    
    this.resetResultView = function(){
        document.getElementById( 'result' ).innerHTML = " ";
    };
    
    this.handleResults = function( results ){ 
        var res = this.calculateAverage( results );
        res = this.limitTwoDecimal( res );
        if(isNaN( res )|| res === undefined){
                    res = 0;
                 }
            return res; 
     };
     
     this.limitTwoDecimal = function( res ){
        if( res.toString().length > 3 ){     
            res = res.toFixed( 2 );
            return res;
        } else { return res;}
     };
     this.createResultKeys = function(keyNum){
           var value_key = 'value'+keyNum+'id'+this.profile_id;
           var all_value_key = 'values'+keyNum+'id'+sessionStorage.profileid;
            return [value_key,all_value_key]; 
     };
     
     this.storeResults = function( all_value_key, all_res, value_key, res ){
           sessionStorage.setItem( all_value_key,all_res );
           sessionStorage.setItem( value_key,res ); 
           sessionStorage.setItem( value_key,res );
     };
     // View stuff
     this.setResultViewIds = function( ){
              resultarray =  ['result','result2','result3','result4','result5','result6'];
                var resstr = "<tr>";
                for( var i = 0; i < resultarray.length; i++ ){
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
                     
                    document.getElementById(this.res_arra[i]).innerHTML = sessionStorage.getItem(result);
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
    
   
    
};
