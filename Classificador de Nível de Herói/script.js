document.getElementById("heroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter valores do formulário
    const nome = document.getElementById("heroName").value;
    const xp = parseInt(document.getElementById("heroXP").value);

    let nivel;

    // Classificar o herói com base no XP
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    // Exibir resultado
    const output = document.getElementById("output");
    output.innerHTML = `O Herói de nome <strong>${nome}</strong> está no nível de <strong>${nivel}</strong>.`;
});