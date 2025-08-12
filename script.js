let na=document.querySelector("name").value;
let password=document.querySelector("password").value;


function welcome(){
    document.getElementById("btn").innerHTML=`Hello ${na} ! How are you?`;
    console.log("Welcome "+na+"!");
}