var contentEle = document.body.querySelector(".content");

var submit = document.body.querySelector(".submit");
var inputBox = document.body.querySelector(".text");
var input2Box = document.body.querySelector(".text2");
var messageBox = document.body.querySelector(".message");
var noteBox = document.body.querySelector(".name");
var note2Box = document.body.querySelector(".grade");
var list = [];

document.body.querySelector(".submit").addEventListener("click", function(){
  if(inputBox.value=="cool"&&input2Box.value=="password"){
    messageBox.innerHTML="Welcome Cool"
    inputBox.style.display = "none";
    input2Box.style.display = "none";
    submit.style.display = "none";
    addGrade();  
  }else{
    messageBox.innerHTML="No Not Cool";
  }})
 
function renderList(){
  document.body.querySelector(".list").innerHTML="";
  for(var i=0; i<list.length; i++){
    var itmEle = document.createElement("h6");
    itmEle.innerHTML="Name: "+list[i].name+" Grade: "+list[i].grade;
    document.body.querySelector(".list").appendChild(itmEle);
  }
}

function addGrade(){
  var b = document.createElement("BUTTON");
  var n = document.createTextNode("Submit");
  b.appendChild(n);
  document.body.appendChild(b);
 list.push({
      name:noteBox.value,
      grade:note2Box.value
    }); 
  renderList();
}