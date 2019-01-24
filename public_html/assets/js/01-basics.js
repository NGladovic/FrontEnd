//Primer za alert

//alert("hello");

var userElement = document.getElementById("user");

//console.log(userElement);
console.log("Korisnik(id-user)je: " + userElement.innerHTML);

//Dohvatanje elemenata preko klase
console.log("Element sa klasom desc: ");
var descElements = document.getElementsByClassName("desc");

//console.log("student 1: ");
//console.log(descElements[0].innerHTML);
//console.log("student 2: ");
//console.log(descElements[1].innerHTML);
//console.log("student 3: ");
//console.log(descElements[2].innerHTML);

console.log("studenti su: " 
        + descElements[0].innerHTML +","
        + descElements[1].innerHTML +","
        + descElements[2].innerHTML +"."
           );
   
//Izmena vrednosti elementa

userElement.innerHTML = "Petar";
console.log("Korisnik(id-user)je: " + userElement.innerHTML);
   
descElements[0].innerHTML = "Marija";
descElements[1].innerHTML = "Milica";
descElements[2].innerHTML = "Maja";

console.log("studenti su: " 
        + descElements[0].innerHTML +","
        + descElements[1].innerHTML +","
        + descElements[2].innerHTML +"."
           );
   
//Provera da li je korisnik punoletan




function ageVerification(){
    var ageInput = document.getElementById("age").value;
    var messageBoxElement = document.getElementById("message-box");
    console.log(ageInput);
    
    if(ageInput >=18){
        messageBoxElement.innerHTML = "Korisnik je punoletan";
    }else{
        messageBoxElement.innerHTML = "Korisnik nije punoletan";
    }
}


function verification(){
    var aInput = document.getElementById("a").value;
    var bInput = document.getElementById("b").value;
    var messageElement = document.getElementById("message");
    
    if(aInput == "" || bInput == ""){
        messageElement.innerHTML = "Popunite prazna polja";
    }else{
    
    if(parseInt(aInput) > parseInt(bInput)){
        messageElement.innerHTML = "Broj A je veci od broja B";
    }else if (parseInt(aInput) < parseInt(bInput)){
        messageElement.innerHTML = "Broj A je manji od broja B";
    }
    else{
        messageElement.innerHTML = "Broj A jednak je broju B";
    }
}
}