// script.js - Recebe os dados via GET e mostra na página de confirmação
(function(){
  // Função de segurança para escapar caracteres HTML
  function escapeHtml(str){
    if(!str) return '';
    return String(str).replace(/[&<>\"'`=\\/]/g, function(s){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;",'/':'&#47;','=':'&#61;','`':'&#96;'}[s];
    });
  }
  function showSubmitted(){
    const container = document.getElementById('dados');
    if(!container) return;
    const params = new URLSearchParams(window.location.search);
    // Caso não haja dados enviados
    if([...params.keys()].length === 0){
      container.innerHTML = '<p>Nenhum dado recebido. Volte para a página de envio.</p>';
      return;
    }
    // Recupera e mostra cada campo submetido
    const nome = escapeHtml(params.get('nome'));
    const email = escapeHtml(params.get('email'));
    const destino = escapeHtml(params.get('destino'));
    const motivo = escapeHtml(params.get('motivo'));
    const data = escapeHtml(params.get('data'));
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
  window.addEventListener('DOMContentLoaded', showSubmitted);
})();
