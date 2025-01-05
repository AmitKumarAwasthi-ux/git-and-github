const P1=document.createElement("P")
const P2=document.createElement("P")

P1.textContent="firstchild"
P2.textContent="thirdchild"

const div=document.getElementById("box")

div.insertAdjacentElement("beforebegin",firstchild)
div.insertAdjacentElement("afterend",thirdchild);

