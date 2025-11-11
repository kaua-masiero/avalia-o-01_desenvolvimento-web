// form.js - client-side validation (extra checks)
(function(){
  const form = document.getElementById('sugestaoForm');
  const errorsEl = document.getElementById('form-errors');
  if(!form) return;

  function sanitizeTrim(v){ return v? v.trim() : ''; }

  form.addEventListener('submit', function(e){
    errorsEl.textContent = '';
    const nome = sanitizeTrim(form.nome.value);
    const email = sanitizeTrim(form.email.value);
    const destino = sanitizeTrim(form.destino.value);
    const motivo = sanitizeTrim(form.motivo.value);

    const problems = [];

    if(nome.length < 3) problems.push('Nome deve ter pelo menos 3 caracteres.');
    if(!/^[A-Za-zÀ-ú\s]+$/.test(nome)) problems.push('Nome deve conter apenas letras e espaços.');
    if(!email || !/^\S+@\S+\.\S+$/.test(email)) problems.push('Email inválido.');
    if(destino.length < 2) problems.push('Destino deve ter ao menos 2 caracteres.');
    if(motivo.length < 10) problems.push('Motivo deve ter ao menos 10 caracteres.');

    if(problems.length){
      e.preventDefault();
      errorsEl.innerHTML = problems.map(p => '<div>• ' + p + '</div>').join('');
      window.scrollTo({top:120, behavior:'smooth'});
    }
  });
})();
