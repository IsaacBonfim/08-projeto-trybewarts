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

function montaNome() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;

  const fullname = `Nome: ${nome} ${sobrenome}`;

  return fullname;
}

function montaEmail() {
  const email = `Email: ${document.getElementById('input-email').value}`;

  return email;
}

function montaCasa() {
  const select = document.getElementById('house');

  const casa = `Casa: ${select.options[select.selectedIndex].value}`;

  return casa;
}

function montaFamilia() {
  const radios = document.getElementsByName('family');
  let familia = '';

  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      familia = `Família: ${radios[i].value}`;
    }
  }

  return familia;
}

function listaMaterias(array, string) {
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      string += `${array[i]} `;
    } else if (i === 1) {
      string += `${array[i]}`;
    } else {
      string += `, ${array[i]}`;
    }
  }

  return string;
}

function montaMaterias() {
  const checkboxs = document.getElementsByName('materia');
  const lista = ['Matérias:'];
  let materias = '';

  for (let i = 0; i < checkboxs.length; i += 1) {
    if (checkboxs[i].checked) {
      lista.push(checkboxs[i].value);
    }
  }

  materias = listaMaterias(lista, materias);

  return materias;
}

function montaAvaliacao() {
  const radios = document.getElementsByName('rate');
  let avaliacao = '';

  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      avaliacao = `Avaliação: ${radios[i].value}`;
    }
  }

  return avaliacao;
}

function montaObservacao() {
  const texto = document.getElementById('textarea');

  const obs = `Observações: ${texto.value}`;

  return obs;
}

function montaRetorno() {
  const info = [];

  info.push(montaNome());
  info.push(montaEmail());
  info.push(montaCasa());
  info.push(montaFamilia());
  info.push(montaMaterias());
  info.push(montaAvaliacao());
  info.push(montaObservacao());

  return info;
}

function limpaFormulario() {
  const titulo = document.getElementById('titulo');
  const form = document.getElementById('evaluation-form');
  const aux = form.childElementCount - 1;

  titulo.innerText = 'Informações Repassadas';

  for (let i = aux; i > 0; i -= 1) {
    form.removeChild(form.children[i]);
  }
}

function montaFormulario() {
  const retorno = document.createElement('div');
  const form = document.getElementById('evaluation-form');
  const infos = montaRetorno();

  retorno.className = 'retorno';
  limpaFormulario();

  for (let i = 0; i < infos.length; i += 1) {
    const p = document.createElement('p');

    p.innerText = infos[i];
    retorno.appendChild(p);
  }

  form.appendChild(retorno);
}

enviar.addEventListener('click', desativaPadrao);
enviar.addEventListener('click', montaFormulario);
