Atividade Somativa 1 - Meu Diário de Viagens
Autor: Hugo Souza
Conteúdo: site estático (HTML/CSS/JS) com menu fixo no topo, formulário com validação e página que
recebe dados via GET e trata com JavaScript.

Como testar localmente:
1) Descompacte o arquivo 'meudiariodeviagens_site.zip' em uma pasta local (por exemplo C:\meusite\).
2) Abra o arquivo index.html no seu navegador (duplo clique) ou sirva a pasta com um servidor local (recomendado)
   - Exemplo rápido em Python (na pasta onde está index.html):
     python -m http.server 8000
   - Depois abra: http://localhost:8000

Observações:
- Todas as referências usam caminhos relativos (/css, /js, /img).
- O formulário envia via método GET para 'formAction.html' e os dados são lidos com JavaScript.
- Tema claro e menu fixo no topo conforme solicitado.
- Imagens são SVGs simples para ilustração; substitua em /img por fotos reais se desejar.
