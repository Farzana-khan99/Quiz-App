let data = [
  {
    Q: " Q:Inside which HTML element do we put the JavaScript?",
    a: "<script>",
    b: "<js>",
    c: "<javascript>",
    d: "<scripting>",
    ans: "ans1",
  },

  {
    Q: " Q:The external JavaScript file must contain the <script> tag.",
    a: "<script>",
    b: "true",
    c: "false",
    d: "<scripting>",
    ans: "ans2",
  },
  {
    Q: " Q:How do you write 'Hello World' in an alert box?",
    a: "msgBox('Hello World')",
    b: " alertBox('Hello World')",
    c: " alert('Hello World')",
    d: " msg('Hello World')",

    ans: "ans3",
  },
];

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let num = 0;
let score = 0;
let myScor = document.querySelector(".myScore")
let nextBtn = document.getElementById("next")

question.innerText = data[num].Q;
option1.innerText = data[num].a;
option2.innerText = data[num].b;
option3.innerText = data[num].c;
option4.innerText = data[num].d;

let answer = document.querySelectorAll(".option");
function CheckedAn() {
  let ans;
  //   for (let i = 0; i <answer.length; i++) {
  //     if (answer[i].checked) {
  //       ans = answer[i].id;
  //     }
  //     console.log(ans)
  //   }
  answer.forEach((e) => {
    if (e.checked) {
      ans = e.id;
    }
  });
  return ans;
}
function deSlected(){
    answer.forEach((e)=>{
    e.checked = false
    })
}

function next() {
  let checkedOutput = CheckedAn();
  console.log(checkedOutput);

  if(checkedOutput == data[num].ans){
    score++
  }
  deSlected()
  num++;

  if(num <data.length){
    question.innerText = data[num].Q;
    option1.innerText = data[num].a;
    option2.innerText = data[num].b;
    option3.innerText = data[num].c;
    option4.innerText = data[num].d;
  }
  else{
    myScor.innerHTML = ` your score is ${score} / ${data.length} <br/> <br/>  <button onclick ="location.reload()">Play Again</button>
   `
   nextBtn.style.display= "none"
  }
 
  
}
