// script.js - usada para mostrar dados enviados via GET em formAction.html
(function(){
  function escapeHtml(str){
    if(!str) return '';
    return String(str).replace(/[&<>"'`=\\/]/g, function(s){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'\/','=':'&#61;','`':'&#96;'}[s];
    });
  }

  function showSubmitted(){
    const container = document.getElementById('dados');
    if(!container) return;
    const params = new URLSearchParams(window.location.search);

    if([...params.keys()].length === 0){
      container.innerHTML = '<p>Nenhum dado recebido. Volte para a página de <a href="form.html">envio</a>.</p>';
      return;
    }

    const nome = escapeHtml(params.get('nome'));
    const email = escapeHtml(params.get('email'));
    const destino = escapeHtml(params.get('destino'));
    const motivo = escapeHtml(params.get('motivo'));
    const data = escapeHtml(params.get('data'));

    const html = `
      <div class="card">
        <p><strong>Nome:</strong> ${nome || '<em>não informado</em>'}</p>
        <p><strong>Email:</strong> ${email || '<em>não informado</em>'}</p>
        <p><strong>Destino sugerido:</strong> ${destino || '<em>não informado</em>'}</p>
        <p><strong>Motivo:</strong><br>${motivo ? motivo.replace(/\n/g,'<br>') : '<em>não informado</em>'}</p>
        <p><strong>Data prevista:</strong> ${data || '<em>não informada</em>'}</p>
      </div>
    `;
    container.innerHTML = html;
  }

  window.addEventListener('DOMContentLoaded', showSubmitted);
})();
