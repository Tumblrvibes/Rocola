var textbox=document.getElementById("textbox");
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function comenzar(){
    document.getElementById("audio1").pause();
       document.getElementById("audio2").pause();
       document.getElementById("audio3").pause();
       document.getElementById("audio4").pause();
       document.getElementById("audio5").pause();
       document.getElementById("audio6").pause();
       document.getElementById("audio7").pause();
       document.getElementById("audio8").pause();
       document.getElementById("audio9").pause();
    textbox.innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var cancion=event.results[0][0].transcript;

    textbox.innerHTML=cancion;
    console.log(cancion);

    if(cancion=="One Kiss"||cancion=="one kiss"||cancion=="One kiss"){
        document.getElementById("audio1").play();
        console.log("Reproduciendo One Kiss");
    }
    
    if(cancion=="Cupid"||cancion=="cupid"){
       document.getElementById("audio2").play();
       console.log("Reproduciendo Cupid");
    }
    if(cancion=="if we ever broke up"||cancion=="if We Ever broke up"||cancion=="if we ever broke up"){
    document.getElementById("audio3").play();
    console.log("Reproduciendo If we ever broke up");  
    }
    if(cancion=="Bela Padilla"||cancion=="Bela Padilla"){
        document.getElementById("audio4").play();
        console.log("Reproduciendo Telepatia");
     }
     if(cancion=="See you again"||cancion=="see you again"){
        document.getElementById("audio5").play();
        console.log("Reproduciendo Cupid");
     }
     if(cancion=="Only Love Can Hurt Like This"||cancion=="Only Love Can Hurt Like This"){
        document.getElementById("audio6").play();
        console.log("Reproduciendo Cupid");
     }
     if(cancion=="peaches"||cancion=="peaches"){
        document.getElementById("audio7").play();
        console.log("Reproduciendo Cupid");
     }
     if(cancion=="say so"||cancion=="say so"){
        document.getElementById("audio8").play();
        console.log("Reproduciendo Cupid");
     }
     if(cancion=="they"||cancion=="they"){
        document.getElementById("audio9").play();
        console.log("Reproduciendo Cupid");
     }
}