function runCommand(){
var a=document.getElementById("input").value;
var ans = document.getElementById("answer").innerText;


if (a == 2809)
  {
document.getElementById("answer").innerHTML="Correct!";
  }

else if(a == ""){
    document.getElementById("answer").innerHTML="Enter an answer";
}

else
  {
document.getElementById("answer").innerHTML="Oops!";
  }

if(ans == "Correct!"){
    document.getElementById("next").innerHTML = "Next";
}
}