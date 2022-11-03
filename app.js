window.onload = function(){
    let listing = document.getElementsByClassName("listing")[0]
    let btn = document.getElementsByClassName("btn")[0]

    btn.addEventListener("click",function(){
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            console.log("Nice")
            alert(this.responseText);
            
        }
        xhttp.open("GET", "superheroes.php");
        xhttp.send();
    })

}