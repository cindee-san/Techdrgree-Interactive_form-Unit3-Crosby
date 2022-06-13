const userName = document.querySelector('#name');
const userTitle = document.querySelector('#title');
const userOtherTitle = document.querySelector('#other-job-role');

userName.focus();
userOtherTitle.style.display = 'none';

//When a "change" is detected, use a conditional statement to check the value property of the element.
userTitle.addEventListener('change', (e) => {
    if (e.target.value === 'other'){
      userOtherTitle.style.display = 'block';
    } else { 
        userOtherTitle.style.display = 'none'
    }
});

//Create variables to reference the "Design" <select> element and the "Color" <select> element. 

var shirtDesign = document.getElementById('design');
var shirtColor = document.getElementById('color')
var shirtColorChoices = document.getElementById('color').children;

shirtColor.disabled = true;

shirtDesign.addEventListener('change', (e) =>{
  shirtColor.disabled = false;

  for(let i = 0; i < shirtColorChoices.length; i++){
    var userSelection = e.target.value;
    var designTheme = shirtColorChoices[i].getAttribute('data-theme');

      if(userSelection === designTheme) {
        shirtColorChoices[i].hidden = false;
        shirtColorChoices[i].selected = true;
      } else {
        shirtColorChoices[i].hidden = true;
        shirtColorChoices[i].selected = false;
      }
  }
});

//Atendees can register for activities and a running total is kept at the bottom of the fieldset
const activitiesForm = document.getElementById('activities');
const activitiesTotalCostElement = document.getElementById('activities-cost');
let activitiesTotalCost = 0;

activitiesForm.addEventListener('change', (e) =>{
  let activityCost = e.target.getAttribute('data-cost');
  activityCost = +activityCost
  
  if(e.target.checked){
    activitiesTotalCost += activityCost;
  } else {
    activitiesTotalCost -= activityCost;
  }
  activitiesTotalCostElement.textContent= `Total: ${activitiesTotalCost}`;
});

