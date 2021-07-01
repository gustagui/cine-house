const catalogo = require("./catalogo");

function adicionarFilme(titulo, duracao, atores, anoDeLancamento, emCartaz) {
    const novoFilme = {
        codigo: catalogo.length + 1,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz,
    };

    catalogo.push(novoFilme);
    console.log("Filme adicionado com sucesso!");
}


function buscarFilme(codigo){
    const filmeProcurado = catalogo[codigo - 1];
    if (!filmeProcurado) {
        return console.log("Código não encontrado");
    }
    console.log(filmeProcurado);
}

function alterarStatusEmCartaz(codigo, novoStatus){
    const filmeProcurado = catalogo[codigo -1];

    if (!filmeProcurado) {
        return console.log("Código não encontrado");
    }

    catalogo[codigo - 1].emCartaz = novoStatus;

    console.log("Filme alterado!");    
}


const listarTodosOsFilmes = () => {
    for(i = 0; i < catalogo.length; i++){
        let filme = catalogo[i];
        console.log("-".repeat(12));
        console.log("Nome do filme: " + filme.titulo);
        console.log("Ano do filme: " + filme.anoDeLancamento);
        console.log("Está em cartaz " + filme.emCartaz);
    }
};

// console.table();

// ------ forEach ------
// filme == catalogo[i]
// catalogo.forEach((filme, index) => {
//     filme.emCartaz

// });

const listarFilmesEmCartaz = () => {
    for(i = 0; i < catalogo.length; i++){
        console.log(catalogo[i].emCartaz ? catalogo[i].titulo + ", estrelando" + catalogo[i].atores + ", com duração de " + catalogo[i].duracao + " h " + " está em cartaz!" : "");
        console.log("-".repeat(12));
    }
}

listarFilmesEmCartaz();