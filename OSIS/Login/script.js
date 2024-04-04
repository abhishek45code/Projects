// const user_con=document.querySelector('.usercontainer');
// const reg_btn=document.querySelector('.rgbtn');
// const login_btn=document.querySelector('.btn');
// reg_btn.addEventListener('click', ()=>{
//     user_con.classList.remove('usercontainer')

// })
// login_btn.addEventListener('click',()=>{
//     user_con.classList.remove('usercontainer')
// })
const user_con = document.querySelector('.usercontainer');
const reg_btn = document.querySelector('.rgbtn');
const login_btn = document.querySelector('.btn');

reg_btn.addEventListener('click', () => {
    user_con.querySelector('.registration').style.display = 'block';
    user_con.querySelector('.login').style.display = 'none';
});

login_btn.addEventListener('click', () => {
    user_con.querySelector('.registration').style.display = 'none';
    user_con.querySelector('.login').style.display = 'block';
});
const registrationForm = document.querySelector('.registration form');
const loginForm = document.querySelector('.login form');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to check for validation

    const username = this.querySelector('#username').value.trim();
    const email = this.querySelector('#Email').value.trim();
    const password = this.querySelector('#Password').value.trim();

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // If all fields are filled, display success message and reset form
    alert('Successfully Registered!');
    this.reset(); // Reset the form
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to check for validation

    const email = this.querySelector('#Email1').value.trim();
    const password = this.querySelector('#Password1').value.trim();

    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // If all fields are filled, you can submit the form
    // Replace this with your form submission logic
    console.log('Login form submitted!');
});

