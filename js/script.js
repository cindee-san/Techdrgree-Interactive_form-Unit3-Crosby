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