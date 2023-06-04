Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camara=document.getElementById("camara");

Webcam.attach("#camara");

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log("ml5 version:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1Tz8MUbww/model.json",modelLoaded);
function modelLoaded(){
    console.log("Modelo cargado");
}

function check(){
    console.log("revisando");
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}


function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultado_objeto").innerHTML=results[0].label;
        presicion_porcentaje=results[0].confidence.toFixed(3)*100;
        document.getElementById("resultado_presicion").innerHTML=presicion_porcentaje+"%";
    }
}