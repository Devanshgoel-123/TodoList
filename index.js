alert("You can at a time add upto 5 tasks only!");


var tasks = [];

document.querySelector("button").addEventListener("click", addTask );
for(var i=0;i<5;i++){
  document.querySelectorAll(".box")[i].addEventListener("click",function (){
    var boxNum = this.id;
    var checked=this.checked;
    console.log(boxNum);
    taskRemoval(boxNum , checked);
    setTimeOut(function (){
      this.checked=false;
    },100);
  });
}


function addTask(){
  var task = document.querySelector(".textbox").value;
  tasks.push(task);

  for(var i=0;i<tasks.length;i++){
    listItem=document.querySelectorAll(".text-box")[i];
    listItem.value=tasks[i];
  }
  task=" ";
}

function taskRemoval(boxNum , checked){

if(checked==true){
  switch (boxNum){
    case "one":
    for(var i=1;i<tasks.length;i++){
        tasks[i-1]=tasks[i];
        listItem=document.querySelectorAll(".text-box")[i-1];
        listItem.value=tasks[i-1];
    }
    tasks.pop();
    var n=tasks.length;
    console.log(tasks);
    lastTask=document.querySelectorAll(".text-box")[n];
    lastTask.value=" ";

   break;

    case "two":
    for(var i=2;i<tasks.length;i++){
        tasks[i-1]=tasks[i];
        listItem=document.querySelectorAll(".text-box")[i-1];
        listItem.value=tasks[i-1];
    }
      tasks.pop();
      var n=tasks.length;
      lastTask=document.querySelectorAll(".text-box")[n];
      lastTask.value=" ";


   break;

    case "three":
    for(var i=3;i<tasks.length;i++){
        tasks[i-1]=tasks[i];
        listItem=document.querySelectorAll(".text-box")[i-1];
        listItem.value=tasks[i-1];
    }
    tasks.pop();
    var n=tasks.length;
    lastTask=document.querySelectorAll(".text-box")[n];
    lastTask.value=" ";
    break;

    case "four":
    for(var i=4;i<tasks.length;i++){
        tasks[i-1]=tasks[i];
        listItem=document.querySelectorAll(".text-box")[i-1];
        listItem.value=tasks[i-1];
    }
    tasks.pop();
    var n=tasks.length;
    lastTask=document.querySelectorAll(".text-box")[n];
    lastTask.value=" ";
    break;
    case "five":
    tasks.pop();
    lastTask=document.querySelectorAll(".text-box")[4];
    lastTask.value=" ";

  }
}

}

// console.log(tasks);
