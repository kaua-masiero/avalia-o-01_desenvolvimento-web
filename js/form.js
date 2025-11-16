form.addEventListener("submit", function(e) {
    errorsEl.textContent = "";
    const nome = sanitizeTrim(form.nome.value);
    const email = sanitizeTrim(form.email.value);
    const destino = sanitizeTrim(form.destino.value);
    const motivo = sanitizeTrim(form.motivo.value);
    const data = sanitizeTrim(form.data.value);
    const problems = [];

    // Validação dos campos (mantém como já está no seu projeto)
    // ... (sua validação aqui, igual já existe)

    if (problems.length) {
        e.preventDefault();
        errorsEl.innerHTML = problems.map(p => `<div>${p}</div>`).join('');
        window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
        // Integração JSON começa aqui
        const sugestaoJSON = {
            nome: nome,
            email: email,
            destino: destino,
            motivo: motivo,
            data: data
        };
        // Exemplo: mostrar no console (para testar)
        console.log(JSON.stringify(sugestaoJSON));

        // Exemplo: salvar no localStorage
        localStorage.setItem('sugestaoViagem', JSON.stringify(sugestaoJSON));

        // Se quiser enviar via AJAX para um servidor, pode usar fetch:
        /*
        fetch('/api/recebeSugestao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sugestaoJSON)
        }).then(res => ...);
        */

        // Se quiser prevenir o envio padrão do formulário:
        // e.preventDefault();
        // alert("Sugestão salva com sucesso!");
    }
});
