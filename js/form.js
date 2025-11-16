// form.js - Valida os campos do formulário cliente, mostrando erros em tempo real
(function(){
  const form = document.getElementById('sugestaoForm');
  const errorsEl = document.getElementById('form-errors');
  if(!form) return;

  // Função para retirar espaços extras
  function sanitizeTrim(v){ return v ? v.trim() : ''; }

  form.addEventListener('submit', function(e){
    errorsEl.textContent = '';
    const nome = sanitizeTrim(form.nome.value);
    const email = sanitizeTrim(form.email.value);
    const destino = sanitizeTrim(form.destino.value);
    const motivo = sanitizeTrim(form.motivo.value);
    // Array para acumular mensagens de erro
    const problems = [];

    // Valida nome (mínimo, letras, espaços)
    if(nome.length < 3) problems.push('Nome deve ter pelo menos 3 caracteres.');
    if(!/^[A-Za-zÀ-ú\s]+$/.test(nome)) problems.push('Nome deve conter apenas letras e espaços.');
    // Valida email (regex simples para formato)
    if(!email || !/^\S+@\S+\.\S+$/.test(email)) problems.push('Email inválido.');
    // Valida destino
    if(destino.length < 2) problems.push('Destino deve ter ao menos 2 caracteres.');
    // Valida motivo
    if(motivo.length < 10) problems.push('Motivo deve ter ao menos 10 caracteres.');

    // Se houver erros, impede envio e mostra lista
    if(problems.length){
      e.preventDefault();
      errorsEl.innerHTML = problems.map(p => `<div>${p}</div>`).join('');
      window.scrollTo({top:120, behavior:"smooth"});
    }
  });
})();
