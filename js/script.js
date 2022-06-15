let userName = document.querySelector('#name');
const userTitle = document.querySelector('#title');
const userOtherTitle = document.querySelector('#other-job-role');
let userEmail = document.getElementById('email');
let cardNumber = document.getElementById('cc-num');
let zipCode = document.getElementById('zip');
let cvv = document.getElementById('cvv');
const form = document.querySelector('form');

// focus is on Name field when page is loaded
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

// Event listener for payment method change. Default is Credit Card, but other payment options are hidden if not selected, and show if selected.
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



//helper function for Name Validation
const nameValidator = () => {
  userName = userName.value;
  const userNameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(userName);
  console.log(`This user name ${userName} is ${userNameIsValid}`);

  return userNameIsValid;
}

//helper function for Email Validation
const emailValidator = () => {
  userEmail = userEmail.value;
  const userEmailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmail);
  console.log(`This user email ${userEmail} is ${userEmailIsValid}`);

  return userEmailIsValid;
}
// console.log(cardNumber.value);
// helper function for visa Credit Card Number, begins with 4 and takes 13 or 16 digits, from https://www.vrsofttech.com/javascript/how-to-validate-debit-or-credit-card-number-using-javascript-regex
const cardNumberValidator = () => {
  cardNumber = cardNumber.value;
  const cardNumberIsValid = /^(?:4[0-9]{12})(?:[0-9]{3})?$/.test(cardNumber);
  console.log(`This credit card ${cardNumber} is ${cardNumberIsValid}`);

  return cardNumberIsValid;
}

//helper function for 5 or 9 digit zip code, from https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
const zipCodeValidator = () => {
  zipCode = zipCode.value;
  const zipCodeIsValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
  console.log(`This zip code ${zipCode} is ${zipCodeIsValid}`);

  return zipCodeIsValid;
}

//helper function for three digit cvv
const cvvValidator = () => {
  cvv = cvv.value;
  const cvvIsValid = /(^\d{3}$)/.test(cvv);
  console.log(`This CVV ${cvv} is ${cvvIsValid}`);

  return cvvIsValid;
}

//submit handler for payment info.
form.addEventListener('submit', (e) => {

  if(!nameValidator()){
    e.preventDefault(); 
  }
  if(!emailValidator()){
    e.preventDefault(); 
  }
  if(!cardNumberValidator()){
    e.preventDefault(); 
  }
  if(!zipCodeValidator()){
    e.preventDefault(); 
  }
  if(!cvvValidator()){
    e.preventDefault(); 
  }

});

//Accessibility improvements for Register for Activities section
// let activitiesBox = document.getElementById('activities-box');
// let activitiesCheckboxes = activitiesBox.querySelectorAll('input');

// for(i = 0; i < activitiesCheckboxes.length; i++){
//   activitiesCheckboxes[i].addEventListener('focus', (e) => {
//     let checkedBox = e.target;
//     checkedBox = activitiesCheckboxes[i].parentElement.classList.add = 'focus';
//   })
//   activitiesCheckboxes[i].addEventListener('blur', (e) => {
//     let uncheckedBox = e.target;
//     uncheckedBox = activitiesCheckboxes[i].parentElement.classList.remove = 'focus';
//   })
// }


