document.getElementById("buttonForm1").addEventListener('click', () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (email === "tryber@teste.com" && password === "123456") {
        window.alert('Olá, Tryber!');
    } else {
        window.alert('Email ou senha inválidos.');
    }
});
