function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function classificarNivel(vitorias) {
    let nivel;

    switch (true) {
        case (vitorias < 10):
            nivel = "Ferro";
            break;
        case (vitorias <= 20):
            nivel = "Bronze";
            break;
        case (vitorias <= 50):
            nivel = "Prata";
            break;
        case (vitorias <= 80):
            nivel = "Ouro";
            break;
        case (vitorias <= 90):
            nivel = "Diamante";
            break;
        case (vitorias <= 100):
            nivel = "Lendário";
            break;
        default:
            nivel = "Imortal";
    }

    return nivel;
}

function gerarValoresAleatorios() {
    const vitorias = Math.floor(Math.random() * 120); 
    const derrotas = Math.floor(Math.random() * 50); 
    return { vitorias, derrotas };
}

function exibirResultado() {
    const { vitorias, derrotas } = gerarValoresAleatorios();
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = classificarNivel(vitorias);

    console.log(`Vitórias: ${vitorias}, Derrotas: ${derrotas}`);
    
    if (derrotas > vitorias) {
        console.log("O Herói tem mais derrotas que vitórias.");
    } else {
        console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
    }
}

exibirResultado();
