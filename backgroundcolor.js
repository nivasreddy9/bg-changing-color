let input=document.getElementById("input");
function colorChange(x){
    if(x.key === "Enter"){
        document.body.style.backgroundColor=input.value
    }else{
        document.body.style.backgroundColor="white"

    }
}
