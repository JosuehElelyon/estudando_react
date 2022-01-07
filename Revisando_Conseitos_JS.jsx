//Arrow functions

//Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função(function expression)
//e não tem seu próprio this, arguments, super ou new.target.Estas expressões de funções são melhor aplicadas para funções que não sejam métodos,
//e elas não podem ser usadas como construtoras(constructors).

//Exemplos;

//Variale que esta armazenando um array.
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

//Aqui eu to dando um map dentro davariavel e em seguida ja chamo a funçao.
elements.map(function (element) {
  console.log(element.length)
});
//Return = [8, 6, 7, 9]

//A função regular acima pode ser escrita como a arrow function abaixo
elements.map((element) => {
  console.log(element.length)
});
//Return = [8, 6, 7, 9]
