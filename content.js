function start()
{
    url = location.href;
//    alert("URl : "+location.href);
    
    if(url.includes("teams.microsoft.com"))
        {
            teams();
        }
    else if(url.includes("meet.google.com"))
        {
            meet();
        }
    
}


function teams()
{
   setTimeout(function(){
       try{
           document.getElementById("microphone-button").click();
       document.getElementById("video-button").click();
       }
       
       catch(err)
           {
               console.log(err);
           }
       teams();
       
    },3000) 
}

start()
