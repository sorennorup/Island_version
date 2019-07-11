View = function(){
    
    this.modalBoxView = function(){
       
        let html = '<div class="modal fade" id="editComment" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
                    '<div class="modal-dialog" role="document">'+
                    '<div class="modal-content">'+
                    '<div class="modal-header">'+
                    '<h4 class="modal-title" id="exampleModalLabel">Comments</h4>'+
                    '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                    '<span aria-hidden="true">&times;</span>'+
                    '</button></div>'+
                    '<form> <div id = "modal-body" class="modal-body"><div class = "form-group">'+
                    '<div id = "wysiwyg_cn" style = "padding-bottom:8px; width: 600px;">'+
                    '<input type = "button" class="btn btn-default" onclick = "iBold();" value = "B" />'+
                    '<input type = "button" class="btn btn-default" onclick = "iItalic();" value = "I" />'+
                    '<input type = "button" class="btn btn-default" onclick = "iLink();" value = "Link" />'+
                    '<input type = "button" class="btn btn-default" onclick = "iUnorderedList();" value = "ul" />'+
                    '<input type = "button" class="btn btn-default" onclick = "iTextcolor();" value = "Color" />'+
                    '<input type = "button" class="btn btn-default" onclick = "iImage();" value = "Img" /> '+
                    '</div>'+
                    '<textarea class="form-control" rows="5"  name = "comment" value=""></textarea></div> </div>'+
                  
                    '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-secondary" data-dismiss="modal">close</button>'+
                    '<button id="submitComment" class="btn btn-primary">finish</button>'+
                    '</form></div></div></div></div>';
  
      return html;
        
    };
    this.displayTextInView = function(){
         if(sessionStorage.getItem('Comment')===null){
            sessionStorage.setItem('Comment','');
         }
        document.getElementById('modal-body').innerHTML =
        '<textarea class="form-control" rows="5"   name = "comment" placeholder ="">'+
        sessionStorage.getItem("Comment")+'</textarea>';
        
        
    };
    
     this.showCommentBoxAfterSubmit = function(){
         let elm =  document.getElementById('collapseCommentBox');
         if(sessionStorage.getItem('isStored')!== ''){
                   
                   elm.classList.add('show');
                   document.getElementById('collapse-sign').innerHTML = "-    ";
                   sessionStorage.setItem('isStored','');

        } else {
                   elm.classList.remove('show');
              }
    
     };
     
     this.showTaxamoniView = function(taxo){
        
        let html = '<table>';
                        
                    for(let i = 0; i < taxo.length; i++){
                     html +=   '<tr>'+
                            '<td>'+taxo[i]+'</td>'+
                            '<td> '+i+' </td>'+
                        '</tr>';
                    }
                      html += '</table>';  

          return html;
        
     };
     this.displayIntroMessage = function(message){
          let introMessage = '<div style = "z-index:9999;" class="alert alert-light" role="alert"><span style = "font-size: 16px;"><h4 class="alert-heading"> Start: </h4>'+message+'</span>'+
             '</div>';
             
          return introMessage;
        
        
     };
     
     this.displayManualInputView = function(){
         let html = '<div style = "margin-top:10px;"class="alert alert-light" role="alert">'+
               ' Du kan nu indtaste manuelt 0 - 5 med 1 decimal (eks 1.4) <br/>'+
               ' <a style = "" class = "alert-link" href = "index.html"><- Return to questions</a></div>'+
                ' <div class="panel-heading"><span id = "profilename"></span></div>'+
                ' <div class="panel-body">'+
                '<form action = "resultInsert.html"><table class = "manualView"  id = "resultView"> </table>'+         
                '<input id = "manual-sub"  class = "btn btn-succes" type = "submit" value= "Save" /></form> </div>';
                    
         return html;

     };
     this.displayInfoMessage = function(){
          let message = '<div class="alert alert-light" role="alert"><span style = "font-size: 16px;">Answer questions or</span>'+
             '<a class = "alert-link" style = "font-size:16px;" href = "resultInsert.html"> Insert direct -></a>'+
               ' <br/>'+
               ' <a style = " z-index:9999;" class = "alert-link" href = "index.html"></a></div>';
        return message;
                 
     };
    
    this.displayFooter = function(){
        let html = ' <div class = " container logos"> <hr/> '+
                        
                    '<div class="row">'+
                           
                    '<div class = "col-sm-3"></div>'+
                          
                    '<div class = " bottom-margin col-sm-2 mb-5 mr-3"><img class = "img-responsive" src = "logoer/Erasmus-250x59.png" width = "220"  /> </div>'+

                    '<div class = " bottom-margin col-sm-2 mr-5 mb-5"><img class = "img-responsive" src = "logoer/YIT-fin-clean-2.png" width = "240"  /> <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">'+
                    '<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a><br />'+
                    'This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">'+
                    'Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>. </div>'+
                    '<div class = " bottom-margin col-sm-2 mb-5"><p>Udarbejdet af<br/>  Moeve og UU DANMARK</p> </div>'+
                    '<div class = "col-sm-3"></div></div></div>';
                        
                        
                    
        return html;
        
    };
    
    
  
  
    
  
    
    
};
 let newView = new View();