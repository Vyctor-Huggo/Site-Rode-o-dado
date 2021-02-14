var a = 0;

function Dado(){
    a = document.getElementById("text").value;
    if(a > 100)
    {
        alert("We don't accept numbers greater than 100");
        document.getElementById("number").innerHTML = 0;
        document.getElementById("text").value = 0;
    }
    if(a <= 100)
    {
        document.getElementById("number").innerHTML = Math.floor(Math.random() * a + 1);
    }
}