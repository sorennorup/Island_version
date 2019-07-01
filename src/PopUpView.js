PopUpView = function(){
    
    this.modalBoxView = function(){
        let html = '<div class="modal fade" id="editComment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                    '<div class="modal-dialog" role="document">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                    '<h4 class="modal-title" id="exampleModalLabel">Skriv eller rediger kommentar</h4>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                    '<span aria-hidden="true">&times;</span>'+
                    '</button></div>'+
                    '<form> <div id = "modal-body" class="modal-body">'+
                    '<textarea  name = "comment" value="'+sessionStorage.getItem("comment")+'"></textarea> </div>'+ 
                    '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                    '<button id="submitComment" class="btn btn-primary">Gem ændringer</button>'+
                    '</form></div></div></div></div>';
  
       return html;
       
     
        
    };
    
    
    
    
  let popUpmodal = new popUpView();
  
    
    
    
    
}