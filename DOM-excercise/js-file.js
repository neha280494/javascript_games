const container = document.querySelector("#container");
const p = document.createElement('p');
p.textContent="Hey I’m red!";
p.style.color='red';
document.body.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color='blue';
h3.textContent= "I'm a blue h3!";
document.body.appendChild(h3);

const div1 = document.createElement("div");
div1.style.borderColor='black';
div1.style.backgroundColor='pink';
div1.textContent="LOOK AT ME";
div1.id="newDiv";
document.body.appendChild(div1);



const h1 = document.createElement("h1");
h1.textContent="I'm in a div";
const pContent = document.createElement("p");
pContent.textContent="ME TOO!";
newDiv.appendChild(h1);
newDiv.appendChild(pContent);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e){
    e.target.style.backgroundColor = "#ccff99";
});



