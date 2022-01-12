document.getElementById('buttonForm1').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

const chkConcordo = document.getElementById('agreement');
const enviar = document.getElementById('submit-btn');

function habilitaBotao() {
  if (chkConcordo.checked === true) {
    enviar.disabled = false;
    enviar.className = 'ativado';
  } else if (chkConcordo.checked === false) {
    enviar.disabled = true;
    enviar.className = 'desativado';
  }
}

chkConcordo.addEventListener('change', habilitaBotao);

function desativaPadrao(evento) {
  evento.preventDefault();
}

enviar.addEventListener('click', desativaPadrao);
