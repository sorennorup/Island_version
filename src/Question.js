Question = function(){
       this.numquestions = 0;
       
           // Create the question table row
    this.createQuestion = function(id,row1,row2,input_val){
          
            var html_code = "<tr width = '100%' id = "+id+" class = 'test' ><td>"+row2+"</td><td>"+this.addInputField(input_val)+"</td></tr>";
   
            document.getElementById('question').innerHTML += html_code;
           
            this.showQuestion();
            };
     // Get the next off the subquestions
    this.showQuestion = function(){
         //$("#counter").html("1");
        
        $(".next").click({num: this.numquestions},function(event){
             console.log('number of questions '+ event.data.num);
            var id = $(this).attr('id');
            var intid = parseInt(id);
            if(intid+1 > event.data.num){
               
                       $("#sub").show();
               
                
             }
             else{
            
           //$("#counter").html(intid+1);
             }
             
            $('#'+id).hide();
            id++;
            $('#'+id).fadeIn(1000);
             
            });
        
    };
    this.nextSubjectFrame = function(){
        return "<div class = 'message'>V¾lg n¾ste emne</div>";
        
        
        } ;
    this.showQuestionCount = function(){
        
    }
     
    
    this.inputWithRadioContainer = function(val){
        var output = '<div class="radio"> <label><input type="radio" value = 0 name="optradio" > 0 Not relevant - do not score</label></div>';
        output +=    '<div class="radio"> <label><input type="radio" value = 1 name="optradio"  > 1 Not yet started</label></div>';
        output +=    '<div class="radio"> <label><input type="radio" value = 2 name="optradio"  > 2 Started</label></div>';
        output +=    '<div class="radio"> <label><input type="radio" value = 3 name="optradio" > 3 To a certain degree</label></div>';
        output +=    '<div class="radio"> <label><input type="radio" value = 4 name="optradio" > 4 To a high degree</label></div>';
       return output;
    
    };
    
    this.createQuestionObj = function(id,row1,row2,input_val){
          return "<tr id = "+id+"><td><strong>"+row1+"</strong></td><td width = '50%'>"+row2+"</td><td>"+this.addInputField(input_val)+"</td><td><div class='btn'>next question</></td></tr>";
          
    };
     // Create the inputfield for the last tablerow  
    this.addInputField = function(val){

            var input_item = '<input id = "score"  class = "score form-control form-control-lg" min = "0" max = "4"'+
                             ' placeholder="0" size="1" autocomplete="off" value = "'+val+'" required >';
               
               return input_item;
      };      
          // Create a selectbox for the last tablerow
    this.addSelect = function(num_select_items){
            var select_elm = '<select class = "options" id = "'+sessionStorage.getItem('on_load_counter')+'">';

            for(var i = 0; i < num_select_items; i++){
                
                var id = i +1;
                  
                select_elm += "<option id = '"+id+"' value = "+i+">"+i+"</option>";
                
                }
                
                select_elm += "</select>";
               
                return select_elm;
            };
        // Put all the questionsrows together
     Question.prototype.getQue = function(que){
        
     for(var i = 0; i < que.length; i++){
         //$("#totalcount").html(" af " +" "+que.length);
         this.numquestions = que.length;
         var obj = que[i];
         
          this.createQuestion(i+1,obj.title, obj.question,obj.inputvalue);
     }
    };
    this.NextsubQuestion = function(){
        
        
    };
    
    Question.prototype.getAllQuestionObjects = function(que){
         var arr = [];
         for(var i = 0; i < que.length; i++){
         
         var obj = que[i];

          arr.push( this.createQuestionObj(i+1,obj.title, obj.question,obj.inputvalue));
     }
        return arr;
    };
    
    this.getNextQuestion = function(que_id,obj){
        for(var i = 0; i < obj.length; i++){
            switch(que_id){
                case i+1 : document.getElementById('question').innerHTML = obj[i];
                         break;
                
            }
        }
    };
 
 };
        // Handle the question text and inputvalue into objects created in the questionsdatamodel
  var question = function(title,question,inputvalue) {
                  
         this.title = title;
         this.question = question;
         this.inputvalue = inputvalue;
         
    
 };
 
 
