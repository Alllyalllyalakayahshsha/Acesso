// Dados dos usuários
const usuarios = {
    "Anne Bella": {
        ci: "010-12-67-00",
        senha: "sua_senha", // Coloque a senha que você escolher
        idade: "10 anos",
        amigo: "Amiga do coração",
        foguinho: 34,
    },
    "Wesley": {
        ci: "013-26-78-92",
        senha: "sua_senha_wesley", // Coloque a senha que você escolher
        idade: "Idade desconhecida",
        amigo: "Amigo legítimo",
        foguinho: "No momento não está disponível",
    }
};

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('nome').value.trim();
    const ci = document.getElementById('ci').value.trim();
    const senha = document.getElementById('senha').value.trim();

    // Verifique as credenciais
    if (usuarios[nome] && usuarios[nome].ci === ci && usuarios[nome].senha === senha) {
        // Exibe os dados pessoais
        document.getElementById('dados-pessoais').style.display = 'block';
        document.getElementById('nome-pessoa').innerText = nome;
        document.getElementById('idade-pessoa').innerText = "Idade: " + usuarios[nome].idade;
        document.getElementById('amigo').innerText = usuarios[nome].amigo;
        document.getElementById('ci-pessoa').innerText = ci;

        // Atualiza o foguinho
        const foguinhoAtual = typeof usuarios[nome].foguinho === 'number' ? usuarios[nome].foguinho + 1 : usuarios[nome].foguinho;
        document.getElementById('foguinho').innerText = foguinhoAtual;
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
});

// Exibir mensagem ao clicar no "Esqueci meu C.I"
document.getElementById('esqueci-ci').addEventListener('click', function () {
    alert('Caso esqueça, entre em contato com quem te deu o C.I');
});
