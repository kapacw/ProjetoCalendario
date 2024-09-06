document.addEventListener('DOMContentLoaded',function (){
    const months = ["janeiro", "fevereiro", "março", "abril","maio","junho","julho","agosto", "setembro", "outubro", "novembro","dezembro"];
    function GetDaysCalendar(month, year){
        document.getElementById("month").innerHTML = months[month];
        document.getElementById("year").innerHTML = year;

        let data = new Date();

        const sunday = document.getElementById("sunday");
        const sunday0 = document.getElementById("sunday0")
        const monday = document.getElementById("monday");
        const monday1 = document.getElementById("monday1");
        const tuesday = document.getElementById("tuesday");
        const tuesday2 = document.getElementById("tuesday2");
        const wednesday = document.getElementById("wednesday");
        const wednesday3 = document.getElementById("wednesday3");
        const thursday = document.getElementById("thursday");
        const thursday4 = document.getElementById("thursday4");
        const friday = document.getElementById("friday");
        const friday5 = document.getElementById("friday5");
        const saturday = document.getElementById("saturday");
        const saturday6 = document.getElementById("saturday6");

        function Sunday(){
          if(data.getDay() == 0){
            sunday.innerHTML = data.getDate();
            sunday.classList.add("todayNumber");
            sunday0.classList.add("todayName");
        }else if(data.getDay() == 1){
            sunday.innerHTML = data.getDate() - 1;
            sunday.classList.remove("todayNumber");
            sunday0.classList.remove("todayName");
          }else if(data.getDay() == 2){
            sunday.innerHTML = data.getDate() - 2;
            sunday.classList.remove("todayNumber");
            sunday0.classList.remove("todayName");
          }else if(data.getDay() == 3){
            sunday.innerHTML = data.getDate() - 3;
            sunday.classList.remove("todayNumber");
            sunday0.classList.remove("todayName");
          }else if(data.getDay() == 4){
            sunday.innerHTML = data.getDate() - 4;
            sunday.classList.remove("todayNumber");
            sunday0.classList.remove("todayName");
          }else if(data.getDay() == 5){
            sunday.innerHTML = data.getDate() - 5;
            sunday.classList.remove("todayNumber");
            sunday0.classList.remove("todayName");
          }else{
            sunday.innerHTML = data.getDate() - 6;
            sunday.classList.remove("todayNumber");
            sunday0.classList.remove("todayName");
          }
        }
        Sunday()

        function Monday(){
            if(data.getDay() == 0){
                monday.innerHTML = data.getDate() + 1;
                monday.classList.remove("todayNumber");
                monday1.classList.remove("todayName");
              }else if(data.getDay() == 1){
                monday.innerHTML = data.getDate();
                monday.classList.add("todayNumber");
                monday1.classList.add("todayName");
              }else if(data.getDay() == 2){
                monday.innerHTML = data.getDate() - 1;
                monday.classList.remove("todayNumber");
                monday1.classList.remove("todayName");
              }else if(data.getDay() == 3){
                monday.innerHTML = data.getDate() - 2;
                monday.classList.remove("todayNumber");
                monday1.classList.remove("todayName");
              }else if(data.getDay() == 4){
                monday.innerHTML = data.getDate() - 3;
                monday.classList.remove("todayNumber");
                monday1.classList.remove("todayName");
              }else if(data.getDay() == 5){
                monday.innerHTML = data.getDate() - 4;
                monday.classList.remove("todayNumber");
                monday1.classList.remove("todayName");
              }else{
                monday.innerHTML = data.getDate() - 5;
                monday.classList.remove("todayNumber");
                monday1.classList.remove("todayName");
              }
          }
          Monday()

          function Tuesday(){
            if(data.getDay() == 0){
                tuesday.innerHTML = data.getDate() + 2;
                tuesday.classList.remove("todayNumber");
                tuesday2.classList.remove("todayName");
              }else if(data.getDay() == 1){
                tuesday.innerHTML = data.getDate() + 1;
                tuesday.classList.remove("todayNumber");
                tuesday2.classList.remove("todayName");
              }else if(data.getDay() == 2){
                tuesday.innerHTML = data.getDate();
                tuesday.classList.add("todayNumber");
                tuesday2.classList.add("todayName");
              }else if(data.getDay() == 3){
                tuesday.innerHTML = data.getDate() - 1;
                tuesday.classList.remove("todayNumber");
                tuesday2.classList.remove("todayName");
              }else if(data.getDay() == 4){
                tuesday.innerHTML = data.getDate() - 2;
                tuesday.classList.remove("todayNumber");
                tuesday2.classList.remove("todayName");
              }else if(data.getDay() == 5){
                tuesday.innerHTML = data.getDate() - 3;
                tuesday.classList.remove("todayNumber");
                tuesday2.classList.remove("todayName");
              }else{
                tuesday.innerHTML = data.getDate() - 4;
                tuesday.classList.remove("todayNumber");
                tuesday2.classList.remove("todayName");
              }
          }
          Tuesday()

          function Wednesday(){
            if(data.getDay() == 0){
                wednesday.innerHTML = data.getDate() + 3;
                wednesday.classList.remove("todayNumber");
                wednesday3.classList.remove("todayName");
              }else if(data.getDay() == 1){
                wednesday.innerHTML = data.getDate() + 2;
                wednesday.classList.remove("todayNumber");
                wednesday3.classList.remove("todayName");
              }else if(data.getDay() == 2){
                wednesday.innerHTML = data.getDate() + 1;
                wednesday.classList.remove("todayNumber");
                wednesday3.classList.remove("todayName");
              }else if(data.getDay() == 3){
                wednesday.innerHTML = data.getDate();
                wednesday.classList.add("todayNumber");
                wednesday3.classList.add("todayName");
              }else if(data.getDay() == 4){
                wednesday.innerHTML = data.getDate() - 1;
                wednesday.classList.remove("todayNumber");
                wednesday3.classList.remove("todayName");
              }else if(data.getDay() == 5){
                wednesday.innerHTML = data.getDate() - 2;
                wednesday.classList.remove("todayNumber");
                wednesday3.classList.remove("todayName");
              }else{
                wednesday.innerHTML = data.getDate() - 3;
                wednesday.classList.remove("todayNumber");
                wednesday3.classList.remove("todayName");
              }
          }
          Wednesday()

          function Thursday(){
            if(data.getDay() == 0){
                thursday.innerHTML = data.getDate() + 4;
                thursday.classList.remove("todayNumber");
                thursday4.classList.remove("todayName");
              }else if(data.getDay() == 1){
                thursday.innerHTML = data.getDate() + 3;
                thursday.classList.remove("todayNumber");
                thursday4.classList.remove("todayName");
              }else if(data.getDay() == 2){
                thursday.innerHTML = data.getDate() + 2;
                thursday.classList.remove("todayNumber");
                thursday4.classList.remove("todayName");
              }else if(data.getDay() == 3){
                thursday.innerHTML = data.getDate() + 1;
                thursday.classList.remove("todayNumber");
                thursday4.classList.remove("todayName");
              }else if(data.getDay() == 4){
                thursday.innerHTML = data.getDate();
                thursday.classList.add("todayNumber");
                thursday4.classList.add("todayName");
              }else if(data.getDay() == 5){
                thursday.innerHTML = data.getDate() - 1;
                thursday.classList.remove("todayNumber");
                thursday4.classList.remove("todayName");
              }else{
                thursday.innerHTML = data.getDate() - 2;
                thursday.classList.remove("todayNumber");
                thursday4.classList.remove("todayName");
              }
          }
          Thursday()

          function Friday(){
            if(data.getDay() == 0){
                friday.innerHTML = data.getDate() + 5;
                friday.classList.remove("todayNumber");
                friday5.classList.remove("todayName");
              }else if(data.getDay() == 1){
                friday.innerHTML = data.getDate() + 4;
                friday.classList.remove("todayNumber");
                friday5.classList.remove("todayName");
              }else if(data.getDay() == 2){
                friday.innerHTML = data.getDate() + 3;
                friday.classList.remove("todayNumber");
                friday5.classList.remove("todayName");
              }else if(data.getDay() == 3){
                friday.innerHTML = data.getDate() + 2;
                friday.classList.remove("todayNumber");
                friday5.classList.remove("todayName");
              }else if(data.getDay() == 4){
                friday.innerHTML = data.getDate() + 1;
                friday.classList.remove("todayNumber");
                friday5.classList.remove("todayName");
              }else if(data.getDay() == 5){
                friday.innerHTML = data.getDate();
                friday.classList.add("todayNumber");
                friday5.classList.add("todayName");
              }else{
                friday.innerHTML = data.getDate() - 2;
                friday.classList.remove("todayNumber");
                friday5.classList.remove("todayName");
              }
          }
          Friday()

          function Saturday(){
            if(data.getDay() == 0){
                saturday.innerHTML = data.getDate() + 6;
                saturday.classList.remove("todayNumber");
                saturday6.classList.remove("todayName");
              }else if(data.getDay() == 1){
                saturday.innerHTML = data.getDate() + 5;
                saturday.classList.remove("todayNumber");
                saturday6.classList.remove("todayName");
              }else if(data.getDay() == 2){
                saturday.innerHTML = data.getDate() + 4;
                saturday.classList.remove("todayNumber");
                saturday6.classList.remove("todayName");
              }else if(data.getDay() == 3){
                saturday.innerHTML = data.getDate() + 3;
                saturday.classList.remove("todayNumber");
                saturday6.classList.remove("todayName");
              }else if(data.getDay() == 4){
                saturday.innerHTML = data.getDate() + 2;
                saturday.classList.remove("todayNumber");
                saturday6.classList.remove("todayName");
              }else if(data.getDay() == 5){
                saturday.innerHTML = data.getDate() + 1;
                saturday.classList.remove("todayNumber");
                saturday6.classList.remove("todayName");
              }else{
                saturday.innerHTML = data.getDate() ;
                saturday.classList.add("todayNumber");
                saturday6.classList.add("todayName");
              }
          }
          Saturday()
    }

    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();
    GetDaysCalendar(month, year);
})
//--------------------------------------------------------------------------------------------//
let card = document.getElementById("popUpCard");
const initialPos = {
  top: card.style.top,
  left: card.style.left,
}

dragElement(card);
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//--------------------------------------------------------------------------------------------//
let dayPopUp = document.getElementById("dayOfWeek");
let num = 1;

function addElementDom(){
  card.style.display = "block";
  dayPopUp.innerHTML = "(Domingo)"
}

function addElementSeg(){
  card.style.display = "block";
  dayPopUp.innerHTML = "(Segunda)";
  num = 4;
}

function addElementTer(){
  card.style.display = "block";
  dayPopUp.innerHTML = "(Terça)";
  num = 7;
}

function addElementQua(){
  card.style.display = "block";
  dayPopUp.innerHTML = "(Quarta)";
  num = 10;
}

function addElementQui(){
  card.style.display = "block";
  dayPopUp.innerHTML = "(Quinta)";
  num = 13;
}

function addElementSex(){
  card.style.display = "block";
  dayPopUp.innerHTML = "(Sexta)";
  num = 16;
}

function addElementSab(){
  card.style.display = "block";
  dayPopUp.innerHTML = "(Sábado)";
  num = 19;
}
//--------------------------------------------------------------------------------------------//
let priority = document.getElementById("priorityName");
let priorityColor = document.getElementById("priorityColor");

function selectPriority(){
    document.getElementById("dropBoxPriority").style.display = "flex";
 }

function lowPriority(){
    priority.innerHTML = "Baixa";
    priorityColor.style.backgroundColor = "green";
}

function medPriority(){
    priority.innerHTML = "Intermediária";
    priorityColor.style.backgroundColor = "yellow";
}   

function highPriority(){
    priority.innerHTML = "Alta";
    priorityColor.style.backgroundColor = "red";
}
//--------------------------------------------------------------------------------------------//
onclick = function evento1(event1) {
    if (!event1.target.matches('.selectPriority')) {
        var dropdowns1 = document.getElementsByClassName("dropBoxPriorityClass");
            for (let i = 0; i < dropdowns1.length; i++) {
            var openDropdown = dropdowns1[i];
            if (openDropdown.style.display = "flex") {
                openDropdown.style.display = "none";
                }
            }
    }
}
//--------------------------------------------------------------------------------------------//
function selectColor(){
    document.getElementById("dropBoxColors").style.display = "flex";
}

let eventColor = document.getElementById("eventColor");
let dropBoxColors = document.getElementById("dropBoxColors");

function eventColorGold(){
    eventColor.style.backgroundColor = "gold";
    dropBoxColors.style.display = "none";
}

function eventColorBlue(){
    eventColor.style.backgroundColor = "blue";
    dropBoxColors.style.display = "none";
}

function eventColorPink(){
    eventColor.style.backgroundColor = "pink";
    dropBoxColors.style.display = "none";
}

function eventColorPurple(){
    eventColor.style.backgroundColor = "purple";
    dropBoxColors.style.display = "none";
}

function eventColorOrange(){
    eventColor.style.backgroundColor = "orange";
    dropBoxColors.style.display = "none";
}

function eventColorCornFlowerBlue(){
    eventColor.style.backgroundColor = "cornflowerblue";
    dropBoxColors.style.display = "none";
}

function eventColorGreen(){
    eventColor.style.backgroundColor = "green";
    dropBoxColors.style.display = "none";
}

function eventColorAquamarine(){
    eventColor.style.backgroundColor = "aquamarine";
    dropBoxColors.style.display = "none";
}

function eventColorBrown(){
    eventColor.style.backgroundColor = "brown";
    dropBoxColors.style.display = "none";
}

function eventColorLime(){
    eventColor.style.backgroundColor = "lime";
    dropBoxColors.style.display = "none";
}
//--------------------------------------------------------------------------------------------//
let selectedBox = null;
const form = document.getElementById("form"); 
let selectedColor = '#ffffff';
const colorButtons = document.querySelectorAll('.eventColorClass');

function selectBox(boxNumber) {
    selectedBox = boxNumber;
}
function popUp(){
    document.addEventListener('DOMContentLoaded', () => {

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedColor = button.getAttribute('data-color');
            colorButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    const model = document.getElementById("example");
    let cont = 0;

    form.addEventListener('submit', (event) => {
      event.preventDefault(); 

      if(selectedBox === null && selectedColor == '#ffffff'){
        alert('Por favor, escolha um Grau de Prioridade e uma Cor.');
        return;
      }else if (selectedBox === null) {
        alert('Por favor, escolha um Grau de Prioridade.');
        return;
      }else if (selectedColor == '#ffffff') {
        alert('Por favor, escolha uma Cor.');
        return;
      }
      let newDiv = model.cloneNode(true);
      newDiv.style.display = "flex"

      const title = document.getElementById('tittle').value;
      const description = document.getElementById('description').value;

      const h = newDiv.querySelector('#titleContent');
      const p = newDiv.querySelector('#descriptionContent');    
      newDiv.className = 'copy'; 

      newDiv.style.backgroundColor = selectedColor;
      h.innerHTML = title;
      p.innerHTML = description;

      newDiv.id = `Copy-${Date.now()}`;
      
      cont ++;

      const editButton = document.getElementById("edit");
      editButton.addEventListener('click', () => {
        editCard(newDiv.id);
      })

      const deleteButton = document.getElementById("delete");
      deleteButton.addEventListener('click', () => {
        deleteCard(newDiv.id);
      })

      document.getElementById(`box${selectedBox}`).appendChild(newDiv);

      resetForm();
    });
  });
}
popUp()

function editCard(divId){
  card.style.display = "block";
  document.getElementById(divId).remove();
  popUp();
}

function deleteCard(divId){
  document.getElementById(divId).remove();
}

function resetForm(){
  form.reset();

  selectedColor = '#ffffff';
  colorButtons.forEach(btn => btn.classList.remove('selected'));
  selectedBox = null;
  eventColor.style.backgroundColor = "white";
  priority.innerHTML = "";
  priorityColor.style.backgroundColor = "#f1f1f1";
}

function cancelAction(){
  resetForm();
  card.style.display = "none";
  card.style.top = initialPos.top;
  card.style.left = initialPos.left;
}
