
// document.querySelector() é usado para selecionar um elemento do documento usando seu ID
let captchaText = document.getElementById('captcha');
var ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.getElementById('textBox');
let submitButton = document.getElementById('submitButton');
let output = document.getElementById('output');
let refreshButton = document.getElementById('refreshButton');


// alphaNums contém os caracteres com os quais se deseja criar o CAPTCHA
let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
                'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
                'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
                'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                'q', 'r', 's', 't', 'u', 'v', 'w', 
                'x', 'y', 'z', '0', '1', '2', '3', 
                '4', '5', '6', '7', '8', '9'];


// Este loop gera uma string aleatória de 7 caracteres usando alphaNums
// Além disso, esta string é exibida como um CAPTCHA
let emptyArr = [];
for (let i = 1; i <= 7; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
var c = emptyArr.join('');
ctx.fillText(emptyArr.join(''), captchaText.width/4, captchaText.height/2);

// Este evento é acionado sempre que o usuário pressiona o botão "Enter"
// "Correto!" ou "Incorreto, tente novamente!" mensagem é exibida após a validação do texto de entrada do CAPTCHA
userText.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        if (userText.value === c) {
            output.classList.add("correctCaptcha");
            output.innerHTML = "Correto!";
        } else {
            output.classList.add("incorrectCaptcha");
            output.innerHTML = "Incorreto, tente novamente!";
        }
    }
});

// Este evento é acionado sempre que o usuário pressiona o botão "Enviar"
// "Correto!" ou "Incorreto, tente novamente!" mensagem é exibida após a validação do texto de entrada do CAPTCHA
submitButton.addEventListener('click', function() {
    if (userText.value === c) {
        output.classList.add("correctCaptcha");
        output.innerHTML = "Correto!";
    } else {
        output.classList.add("incorrectCaptcha");
        output.innerHTML = "Incorreto, tente novamente!";
    }
});

// Este evento é acionado sempre que o usuário pressiona o botão "Atualizar"
// Um novo CAPTCHA aleatório é gerado e exibido após o usuário clicar no botão "Atualizar"
refreshButton.addEventListener('click', function() {
    userText.value = "";
    let refreshArr = [];
    for (let j = 1; j <= 7; j++) {
        refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    c = refreshArr.join('');
    ctx.fillText(refreshArr.join(''),captchaText.width/4, captchaText.height/2);
    output.innerHTML = "";
});
