// script.js
// Exibe na tela os dados enviados via GET do formulário
// Garante tratamento seguro contra HTML injection

(function(){
  // Função para escapar caracteres especiais e evitar risco de código malicioso
  function escapeHtml(str){
    if(!str) return '';
    return String(str).replace(/[&<>\"'`=\\/]/g, function(s){
      return {
        '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;',
        "'":"&#39;", '/':'&#47;', '=':'&#61;', '`':'&#96;'
      }[s];
    });
  }

  // Função principal que mostra os dados se existirem
  function showSubmitted(){
    const container = document.getElementById('dados');
    if(!container) return;

    const params = new URLSearchParams(window.location.search);
    if([...params.keys()].length === 0){
      // Nenhum dado, informa usuário
      container.innerHTML = '<p>Nenhum dado recebido. Volte para a página de envio.</p>';
      return;
    }
    // Pega cada campo recebido e exibe na tela
    const nome = escapeHtml(params.get('nome'));
    const email = escapeHtml(params.get('email'));
    const destino = escapeHtml(params.get('destino'));
    const motivo = escapeHtml(params.get('motivo'));
    const data = escapeHtml(params.get('data'));

    // Monta card com os dados
    container.innerHTML = `
      <div class="card">
        <p><strong>Nome:</strong> ${nome || ' *não informado*'}</p>
        <p><strong>Email:</strong> ${email || ' *não informado*'}</p>
        <p><strong>Destino sugerido:</strong> ${destino || ' *não informado*'}</p>
        <p><strong>Motivo:</strong><br>${motivo ? motivo.replace(/\n/g,'<br>') : ' *não informado*'}</p>
        <p><strong>Data prevista:</strong> ${data || ' *não informada*'}</p>
      </div>
    `;
  }

  // Quando a página carregar, executa a função
  window.addEventListener('DOMContentLoaded', showSubmitted);
})();
