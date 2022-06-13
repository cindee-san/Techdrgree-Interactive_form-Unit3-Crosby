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
  activitiesTotalCostElement.textContent= `Total: $${activitiesTotalCost}`;
});

//The preferred or most common payment method option should be selected and the corresponding payment form sections should be displayed by default, while the other payment form sections should be hidden.

const payingWith = document.getElementById('payment');
const payCreditCard = document.getElementById('credit-card');
const payPayPal = document.getElementById('paypal');
const payBitcoin = document.getElementById('bitcoin');

payPayPal.hidden = true;
payBitcoin.hidden = true;

const creditCardOption = payingWith.children[1];
creditCardOption.setAttribute('credit-card', 'selected');

payingWith.addEventListener('change', (e) => {
  
  if(e.target.value === 'paypal'){
    payBitcoin.style.display = 'none';
    payPayPal.style.display = 'block';
    payCreditCard.style.display = 'none';

  } else if(e.target.value === 'bitcoin'){
    payBitcoin.style.display = 'block';
    payPayPal.style.display = 'none';
    payCreditCard.style.display = 'none';

  } else {
    payBitcoin.style.display = 'none';
    payPayPal.style.display = 'none';
    payCreditCard.style.display = 'block';
  }
  });

