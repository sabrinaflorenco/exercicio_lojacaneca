let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Loja de Canecas Personalizadas";

let body = document.querySelector("body");

body.appendChild(titulo);

let produto = document.createElement("div");

produto.innerHTML = `
    <div>
        <h2>Caneca Personalizada Programador</h2>
        <img src="assets/caneca.jpg" alt="imagem caneca programador">
        <p>Personalize sua caneca com seu jeito</p>
        <p id= "preco-caneca">R$ 39.90</p>
    </div>
`;
body.appendChild(produto)