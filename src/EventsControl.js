EventsControl = function() {
    
    
    this.adClickedToButton = function(){
        let idArray = [document.getElementById("profileid_1"),document.getElementById("profileid_2"),document.getElementById("profileid_3").classList.remove("clicked")];
        if( sessionStorage.profilename == "Unge"){
            
         document.getElementById("profileid_1").classList.add("clicked");
         document.getElementById("profileid_2").classList.remove("clicked");
         document.getElementById("profileid_3").classList.remove("clicked");
              } else if(sessionStorage.profilename == "Vejleder"){
                document.getElementById("profileid_2").classList.add("clicked");
                document.getElementById("profileid_1").classList.remove("clicked");
                document.getElementById("profileid_3").classList.remove("clicked");
              } else if(sessionStorage.profilename == "MŒl"){
                document.getElementById("profileid_2").classList.remove("clicked");
                document.getElementById("profileid_1").classList.remove("clicked");
                 document.getElementById("profileid_3").classList.add("clicked");
                
              }
    };
    
    this.addListenerToProfileLink = function(){
        
        if(sessionStorage.profilename === undefined){
                    sessionStorage.profilename = "Unge";
                    }
             document.getElementById('profileid_1').addEventListener('click',function(){
                    sessionStorage.profileid = this.value;
                    sessionStorage.setItem('on_load_counter',1);
                   
                    document.getElementById("profileid_1").classList.add("jep");
                    sessionStorage.profilename = "Unge";
                    location.reload();
                
                });
             
             document.getElementById('profileid_2').addEventListener('click',function(){
                    sessionStorage.profileid = this.value;
                    sessionStorage.setItem('on_load_counter',1);
                    sessionStorage.profilename = "Vejleder";
                    location.reload();
                       
                });
             document.getElementById('profileid_3').addEventListener('click',function(){
                    sessionStorage.profileid = this.value;
                    sessionStorage.setItem('on_load_counter',1);
                    sessionStorage.profilename = "MŒl";
                    location.reload();
                       
                });
        
        };
        
    this.clickableLabels = function(obj){
            $(obj).css('cursor', 'pointer');
            $(obj).click(function(){
            // Go to the content of the select view
            sessionStorage.setItem('on_load_counter',$(this).index()+1);
            location.reload();
                
                });
            
        };
        
};
        
  var event_control = new EventsControl();      
        
        
         