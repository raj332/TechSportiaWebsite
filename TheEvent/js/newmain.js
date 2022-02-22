$(document).ready(function(){
    
      document.getElementById("introtext").style.display = "none";
      document.getElementById("myVideo").addEventListener("ended",yourFunction,false);

              
        function yourFunction(e) {
          document.getElementById("introtext").style.display = "block";
        document.getElementById("myVideo").style.display = "none";

        }
      
       
        var video = document.getElementById('myVideo');
          var source = document.getElementById('sid');
        if (screen.width<460) {   
          source.setAttribute('src', '/TheEvent/img/video_mobile.mp4');
          
          video.load();
          video.play();
         }
         else{
         
          source.setAttribute('src', '/TheEvent/img/TECH SPORTIA.mp4');
          
          video.load();
          video.play();
          
         }
      
        
    });