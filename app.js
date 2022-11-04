window.onload = function(){
    let btn = document.getElementsByClassName("btn")[0]
    
    btn.addEventListener("click",function(){

        const xhttp = new XMLHttpRequest();
        let result = document.getElementById("result")
        
        let new_div = document.createElement("div")
        new_div.setAttribute("id","removeable")

        let userInput = document.getElementById("searchtext")
        
        
        console.log(result.children.length)
        if (result.children.length > 0){
            console.log(result.children[0].children.length)
            if (result.children[0].children.length > 0){
                result.children[0].remove()
                result.appendChild(new_div)
            }
        } 
            
        else{
            result.appendChild(new_div)
        }
        
        xhttp.onload = function() {
            //alert(this.responseText);
            
            result.children[0].innerHTML += this.response
            
        }
        
        
        xhttp.open("GET", "superheroes.php?ui="+userInput.value);
        xhttp.send();
    })

}