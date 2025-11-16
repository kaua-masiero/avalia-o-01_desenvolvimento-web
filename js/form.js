// form.js
// Validação de todos os campos do formulário sugestaoForm usando JS puro
// Exibe mensagem de erro para cada campo inválido evitando envio incorreto

(function(){
  // Seleciona o formulário
  const form = document.getElementById('sugestaoForm');
  // Elemento para mostrar erros na tela
  const errorsEl = document.getElementById('form-errors');
  if(!form) return;

  // Remove espaços extras antes/depois do valor
  function sanitizeTrim(v){ return v ? v.trim() : ''; }

  // Evento de envio do formulário
  form.addEventListener('submit', function(e){
    errorsEl.textContent = '';
    const nome = sanitizeTrim(form.nome.value);
    const email = sanitizeTrim(form.email.value);
    const destino = sanitizeTrim(form.destino.value);
    const motivo = sanitizeTrim(form.motivo.value);

    // Array para juntar todos problemas
    const problems = [];

    // Validação campo nome
    if(nome.length < 3) problems.push('Nome deve ter pelo menos 3 caracteres.');
    if(!/^[A-Za-zÀ-ú\s]+$/.test(nome)) problems.push('Nome deve conter apenas letras e espaços.');

    // Validação campo email com regex simples
    if(!email || !/^\S+@\S+\.\S+$/.test(email)) problems.push('Email inválido.');

    // Validação campo destino
    if(destino.length < 2) problems.push('Destino deve ter ao menos 2 caracteres.');

    // Validação campo motivo
    if(motivo.length < 10) problems.push('Motivo deve ter ao menos 10 caracteres.');

    // Se algum erro, impede envio e mostra lista de erros
    if(problems.length){
      e.preventDefault();
      errorsEl.innerHTML = problems.map(p => `<div>${p}</div>`).join('');
      // Scroll na tela para mostrar os erros imediatamente
      window.scrollTo({top:120, behavior:"smooth"});
    }
  });
})();
