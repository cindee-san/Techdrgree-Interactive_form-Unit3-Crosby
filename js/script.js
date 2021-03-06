//variables for basic info section
let userName = document.querySelector('#name');
const userTitle = document.querySelector('#title');
const userOtherTitle = document.querySelector('#other-job-role');
let userEmail = document.getElementById('email');
//variables for Shirt design section
var shirtDesign = document.getElementById('design');
var shirtColor = document.getElementById('color')
var shirtColorChoices = document.getElementById('color').children;
//variables for payment section
let cardNumber = document.getElementById('cc-num');
let zipCode = document.getElementById('zip');
let cvv = document.getElementById('cvv');
const payingWith = document.getElementById('payment');
const payCreditCard = document.getElementById('credit-card');
const payPayPal = document.getElementById('paypal');
const payBitcoin = document.getElementById('bitcoin');
//form variable for submit handler
const form = document.querySelector('form');

// focus is on Name field when page is loaded
userName.focus();
userOtherTitle.style.display = 'none';

//Event listener for entering a different job role
userTitle.addEventListener('change', (e) => {
    if (e.target.value === 'other'){
      userOtherTitle.style.display = 'block';
    } else { 
        userOtherTitle.style.display = 'none'
    }
});

// event listener for user shirt design choice, presents the color options available for chosen design, hides color choices not available for design
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

//Attendees can register for activities and a running total is kept at the bottom of the fieldset
//Activity validator for page submission built in
const activitiesForm = document.getElementById('activities');
const activitiesTotalCostElement = document.getElementById('activities-cost');
let activitiesTotalCost = 0;

activitiesForm.addEventListener('change', (e) =>{
  let activityCost = e.target.getAttribute('data-cost');
  let chosenActivity = +activityCost
  
  if(e.target.checked){
    activitiesTotalCost += chosenActivity;
  } else {
    activitiesTotalCost -= chosenActivity;
  }
  if (!activitiesTotalCost > 0) {
    activitiesForm.className = 'activities not-valid';
    activitiesForm.lastElementChild.style.display = 'block';
  } else {
    activitiesForm.className = 'activities valid';
    activitiesForm.lastElementChild.style.display = 'none';
  }
  activitiesTotalCostElement.textContent= `Total: $${activitiesTotalCost}`;

});

//Default payment method is Credit Card, but other payment options are hidden if not selected, and show if selected.
payPayPal.hidden = true;
payBitcoin.hidden = true;

const creditCardOption = payingWith.children[1]
creditCardOption.setAttribute('selected', true);
let creditCardOptionValue = creditCardOption.value;

// Event listener for payment method change. 
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
  let userNameValue = userName.value;
  let userNameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(userNameValue);

    //conditional to pass this element as an argument in 'validation pass' or 'validation fail'
    if(userNameIsValid ===true){
      validationPass(userName);
    } else {
      validationFail(userName);
    }
    
  return userNameIsValid;
  }

//helper function for Email Validation
const emailValidator = () => {
  let userEmailValue = userEmail.value;
  let userEmailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmailValue);

    //conditional to pass this element as an argument in 'validation pass' or 'validation fail'
    if(userEmailIsValid ===true){
      validationPass(userEmail);
    } else {
      validationFail(userEmail);
    }
    
  return userEmailIsValid;

}
//helper function for Activity Validation

const activityValidator = () =>{
//conditional to pass this element as an argument in 'validation pass' or 'validation fail'
  let activitiesBox= document.getElementById('activities-box');
  let activityIsValid = activitiesTotalCost > 0;

    if (!activitiesTotalCost > 0) {
      activitiesForm.className = 'activities not-valid';
      activitiesForm.lastElementChild.style.display = 'block';
    } else {
      activitiesForm.className = 'activities valid';
      activitiesForm.lastElementChild.style.display = 'none';
    }
  return activityIsValid;
 }

// helper function for Credit Card Number, takes 13 or 16 digits, from https://www.regular-expressions.info/creditcard.html#:~:text=The%20regex%20%5Cb%5Cd%7B,of%2013%20to%2016%20digits.
const cardNumberValidator = () => {
  let cardNumberValue = cardNumber.value;
  let cardNumberIsValid = /^\b\d{13,16}\b$/.test(cardNumberValue);

    //conditional to pass this element as an argument in 'validation pass' or 'validation fail'
    if(cardNumberIsValid ===true){
      validationPass(cardNumber);
    } else {
      validationFail(cardNumber);
    }
  return cardNumberIsValid;
}

//helper function for 5 or 9 digit zip code, from https://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
const zipCodeValidator = () => {
  let zipCodeValue = zipCode.value;
  let zipCodeIsValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCodeValue);

    //conditional to pass this element as an argument in 'validation pass' or 'validation fail'
    if(zipCodeIsValid ===true){
      validationPass(zipCode);
    } else {
      validationFail(zipCode);
    }
  return zipCodeIsValid;
}

//helper function for three digit cvv
const cvvValidator = () => {
  let cvvValue = cvv.value;
  let cvvIsValid = /(^\d{3}$)/.test(cvvValue);

    //conditional to pass this element as an argument in 'validation pass' or 'validation fail'
    if(cvvIsValid ===true){
      validationPass(cvv);
    } else {
      validationFail(cvv);
    }
  return cvvIsValid;
}

//Form input Validation error indicator accessibility improvements

//functions to check if the element passes or fails validation
function validationPass(element){
  element.parentElement.className = 'valid';
  element.parentElement.lastElementChild.style.display = 'none';

  return validationPass;
}

function validationFail(element){
   element.parentElement.className = 'not-valid';
   element.parentElement.lastElementChild.style.display = 'block';
  
  return validationFail;
}

//validates form as user types
userName.addEventListener('keyup', nameValidator);
userEmail.addEventListener('keyup', emailValidator);
cardNumber.addEventListener('keyup', cardNumberValidator);
zipCode.addEventListener('keyup', zipCodeValidator);
cvv.addEventListener('keyup', cvvValidator);


//submit handler for entire form, stops the page from submitting if a field is not valid.
form.addEventListener('submit', (e) => {

  if(!nameValidator()){
    e.preventDefault(); 
  }
  if(!emailValidator()){
    e.preventDefault(); 
  }
  if(!activityValidator()){
    e.preventDefault();
  }

  if (payingWith.value === 'credit-card'){

    if(!cardNumberValidator()){
      e.preventDefault(); 
    }
    if(!zipCodeValidator()){
      e.preventDefault(); 
    }
    if(!cvvValidator()){
      e.preventDefault(); 
    }
  } 
  });

