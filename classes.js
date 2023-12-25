// // Objeto
// const corredor1 = {
//     nome: 'Airton Senna',
//     equipe: 'Mclarem',
//     idade: 29,
//     // metodo
//     correr: function () {
//         console.log('Vruuuuuuuuuuum!');
//     },
// };

// // evocando o objeto
// console.log(corredor1.nome);
// corredor1.correr();


// classe === Molde do Objeto
class PilotoFormula1 {
    constructor(nomeDoPiloto, equipeDoPiloto, idadeDoPiloto) {
        this.nome = nomeDoPiloto;
        this.equipe = equipeDoPiloto;
        this.idade = idadeDoPiloto;
    }
    // Metodo que é uma classe dentro do objeto (verbo)
    correr() {
        console.log('Vruuuuuuuuuuum!');
    }
}

// Criação dos novos objetos
const corredor1 = new PilotoFormula1('Airton Sena', 'McLaren', 29 );
const corredor2 = new PilotoFormula1('Max Verstappen', 'Reed Bull Racing', 26 );
const corredor3 = new PilotoFormula1('Lewis Hamilton', 'Mercedes', 32 );
const corredor4 = new PilotoFormula1('Charles Lecler', 'Ferrari', 26 );
const corredor5 = new PilotoFormula1('Rubinho Barrichello', 'McLaren', 27 );

// evocando os objetos e metodos
console.log(corredor1);
corredor1.correr();
console.log(corredor2);
corredor1.correr();
console.log(corredor3);
corredor1.correr();
console.log(corredor4);
corredor1.correr();
console.log(corredor5);
corredor1.correr();