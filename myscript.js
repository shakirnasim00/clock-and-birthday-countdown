setInterval(myTimer, 1000);

setInterval(changeToBlue, 5000);

function myTimer() {
    
        const d = new Date();
        let formattedDate = d.toLocaleDateString();
        let formattedTime = d.toLocaleTimeString();

        document.getElementById("today").innerHTML = formattedDate + " " + formattedTime
      
}


function changeToBlue() {
    var bodyBackground = document.getElementById("body");

    bodyBackground.style.backgroundColor = "purple";

    setTimeout(changeToPurple, 5000);

}

function changeToPurple() {
    var bodyBackground = document.getElementById("body");

    bodyBackground.style.backgroundColor = "blueviolet";

    setTimeout(changeToBlue, 5000);
}


  



