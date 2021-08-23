// https://teachablemachine.withgoogle.com/models/hG6bJ4Z8I/
function startClassification()
{
    console.log("'Sir' we have reached function startClassification!")
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hG6bJ4Z8I/model.json', modelReady);

}


function modelReady(){
    console.log("'Sir' we have reached function modelReady!")
    classifier.classify(gotResults);
}

function gotResults(){
 console.log("'Sir' we have reached the final desitnation the function gotResults!")
}