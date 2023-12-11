let application = document.querySelector('#form1');
let input = document.querySelectorAll('#input');
let textArea = document.querySelector('#comment1');

function onResponse(response) {
    return response.text();
}

function onTextReady(text) {
    console.log(text);
    let colorBlack = document.getElementById('email-confirm');
    colorBlack.style.cssText = "color: black;";
    colorBlack.textContent = text;
}

function processSubmit(e) {
    e.preventDefault();

    // Get values from form fields
    let firstName = document.querySelector("#fullname1").value;
    let lastname = document.querySelector("#lastname1").value;
    let emailaddress = document.querySelector("#email").value;
    let comment = document.querySelector("#comment1").value;

    const message = {
        firstName: firstName,
        lastname: lastname,
        emailaddress: emailaddress,
        comment: comment
    };
    const serializedMessage = JSON.stringify(message);
    console.log(serializedMessage);

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: serializedMessage
    };
    fetch('http://localhost:5500/signup', fetchOptions)
        .then(onResponse)
        .then(onTextReady);
}

application.addEventListener('submitplease', processSubmit);
