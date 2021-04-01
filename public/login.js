/*
const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // let userData = {
    //     email, password
    // }
    var auth = 'Basic ' + Buffer.from(email + ':' + password).toString('base64');
    
    // sessionStorage.setItem('email', userData.email);
    // sessionStorage.setItem('password', userData.password);
    var header = {'Host': 'https://localhost:3000/', 'Authorization': auth};
    var request = client.request('GET', '/', header);
});
*/

document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById('submit');

    submit.addEventListener('click', () => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        Axios.post('https://localhost:3000/login', {
            email: email,
            password: password
        }).then((response) => {
            console.log(response)
        })

    });

})


