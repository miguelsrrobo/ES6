// REST

const usuario = {
  nome: 'Diego',
  idade: 23,
  emdereso: 'sc'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);
