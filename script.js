let cadastro = false;

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;

    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.getElementById("button").innerText = cadastro ? "Cadastrar" : "Entrar";
    document.getElementById("texto-toggle").innerText = cadastro
        ? "Já tem conta? "
        : "Não tem conta? ";

    document.getElementById("toggle").innerText = cadastro
        ? "Faça Login!"
        : "Cadastre-se!";

    document.getElementById("mensagem").innerHTML = "";
};

document.getElementById("form-login").onsubmit = (e) => {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "";

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.innerHTML = "<div class='erro'><p> Email Invalido !</p></div>"; return;
    }

    if (senha.length < 4) {
        mensagem.innerHTML = "<div class='erro'><p>Senha muito curta!</p></div>";
        return;
    }

    if (cadastro) {
        localStorage.setItem(email, senha);
        mensagem.innerHTML = "<div class='sucesso'><p>Cadastrado com sucesso!</p></div>";
    } else {
        let salva = localStorage.getItem(email);

        if (salva === senha) {
            mensagem.innerHTML = "<div class='sucesso'><p>Login com sucesso!</p></div>";
        } else {
            mensagem.innerHTML = "<div class='erro'><p>Dados incorretos!</p></div>";
        }
    }

    document.getElementById("form-login").reset();
};