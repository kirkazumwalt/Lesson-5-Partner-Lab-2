function setName() {
  let tbxUserName = document.getElementById("tbxUserName");
  let userName = tbxUserName.value;
  let spnUserName1 = document.getElementById("spnUserName1");
  spnUserName1.innerHTML = userName;
}
function paragraph() {
  let tbxparagraph = document.getElementById("tbxparagraph");
  let userName = tbxparagraph.value;
  let spnUserName2 = document.getElementById("spnUserName2");
  spnUserName2.innerHTML = userName;
}

function color() {
  let color = document.getElementById("color");
  document.body.style.backgroundColor = color.value;
}
function submitChange() {
  setName();
  paragraph();
  color();
}
