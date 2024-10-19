// Inicializa o foguinho da Anne

let anneFoguinho = localStorage.getItem('anneFoguinho') ? parseInt(localStorage.getItem('anneFoguinho')) : 34;

const today = new Date().toDateString();

const lastUpdate = localStorage.getItem('lastUpdate');

if (lastUpdate !== today) {

    anneFoguinho += 1; // Aumenta em 1 a cada dia

    localStorage.setItem('anneFoguinho', anneFoguinho);

    localStorage.setItem('lastUpdate', today);

}

document.getElementById('formConsulta').onsubmit = function(e) {

    e.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value.trim();

    const senha = document.getElementById('senha').value;

    // Validação do login e exibição das informações

    if (nome === 'Anne Bella' && senha === '010-12-67-00') {

        document.getElementById('mensagem').innerText = 'Consulta bem-sucedida!';

        document.getElementById('mensagem').style.color = 'green';

        // Exibe as informações da Anne

        const informacoes = `

            <h3>${nome}</h3>
      
