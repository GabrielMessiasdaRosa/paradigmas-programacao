
//######################//   PARADIGMAS   //######################//

//      É o modelo mental que você vai usar pra te guiar ou dar uma estrutura pra você transformar um problema do 
// mundo real em software.

//      Imagine o que você quer resolver um problema de um escritório de contabilidade, tem toda uma lógica
// interna de como a empresa atende os clientes e terá que saber das principais principais regras relacionadas à contabilidade.
//      Você tem por exemplo que atender determinadas legislações do governo e tudo isso precisa ser modelado em software.

//      Por exemplo: você vai criar um sistema pra uma universidade:
// >> Terá que definir a matrícula do aluno.
// >> Terá que criar um sistema que vai ajudar na alocação dos espaços físicos e nas salas dos auditórios.

//      Qual é a relação que existe entre aluno e a disciplina?
//      Como é que você vai alocar os espaços?

//      Tudo isso precisa ser modelado a partir de um problema real.
//      E como você vai modelar? Isso você precisa decidir. Qual o paradigma você vai usar ou quais paradigmas
// você vai usar pra modelar o seu software? Entender os princípios por trás dos paradigmas é fundamental 
// pra que você consiga executar de uma forma coerente o desenvolvimento do software.

//      Você pode, por exemplo, segundo a ótica do paradigma OO, analisar o mundo como objetos e suas relações;
// Os objetos têm atributos e responsabilidade e a relação entre esses objetos vão estabelecer todas essas
// comunicações e você vai tentar pegar o mundo real e abstrair isso pra software.
// 
//      Já quando você enxerga um problema do ponto de vista funcional você vai enxergar o problema como a série
// de funções. Trabalhando em cima dos dados, você tem uma série de regras em relação à programação funcional que vão
// te ajudar a fazer um código da melhor forma possível.

//      JavaScript é a linguagem dita de multi paradigma, ou seja, você consegue em JavaScript escrever código procedural,
// orientado a objeto e funcional.

//      Então muitas vezes as pessoas tem dificuldades de compreender bem o JavaScript.

//      Essa bagagem em programação funcional também vai te transformar num programador JavaScript melhor
// exatamente porque entender a função e entender todos os recursos relacionados à função, vai fazer com 
// que você tenha a mente de um programador JavaScript, e boa parte da dificuldade dos programadores em 
// compreender certas linguagens é exatamente a falta de base nos paradigmas.

//      Daí a importância de entender quais são os paradigmas que a linguagem que você vai aprender implementa, OO? Funcional?
// Procedural? TODOS?! 

//      Depois de um tempo, aprender novas linguagens é muito mais fácil do que você aprender novos paradigmas. Quando se aprende 
// um novo paradigma, tem toda uma nova estrutura e uma nova lógica de como você vai pensar e fazer as coisas.

//      Já quando você aprende uma nova linguagem, é muito um detalhe de sintaxe. Você vai precisar aprender a como se
// define uma função, um objeto, os tipos, como se define um bloco de codigo, etc.

//      São problemas estruturais que você facilmente vai aprender quando você já conhece um determinado paradigma.

//      Se por exemplo, você já era um programador experiente em Java, e você quer aprender a linguagem C#, você vai ver que
// a curva de aprendizado vai ser muito mais rápida exatamente porque você está dentro de um paradigma que já é conhecido.
// Pois C#, assim como Java, implementam o paradigma de orientação a objeto.

//      Por conta desse conhecimento você vai conseguir migrar de uma linguagem pra outra de uma forma muito fácil.

//      Quando você escolhe programar de forma orientada a objeto, você precisa ter um cuidado maior pra entender bem os 
// princípios. Como por exemplo encapsulamento, herança, polimorfismo, composição, priorizar a composição em vez de herança, etc.

//      Isso também acontece com programação funcional, você tem que saber o que é higher order functions, first class functions,
// ter uma noçao do que é currying, saber o conceito de imutabilidade, composição de funções, etc.

<a href="https://bit.ly/3BB8aFf" /> // <- doc sobre o básico

//      Tem uma série de princípios que precisam ser aplicados pra que o código seja realmente um código funcional.

//      Quando você trabalha no procedural você acaba não tendo tantos princípios, basicamente o que você está codando já é um código
// procedural e é óbvio que isso gera impacto na qualidade do seu código.

//      O mundo procedural, praticamente, você só faz, sem precisar muito dos princípios. Quando você escolhe o paradigma funcional ou OO
// você tem que ter uma série de conceitos pra te ajudar. 

// Princípios vão te ajudar a escrever código com maior qualidade !!!



// BÔNUS !
// //######################//   IMPERATIVO vs DECLARATIVO   //######################//

// considere este array como as notas de uma turma.
const notas = [10, 10, 10, 9, 8, 5, 6, 10]

//      O estilo de código imperativo é o mais comum e mais popular por ser a base da programação procedural e da programação orientada
// a objeto, tendo um maior foco no fluxo, com códigos mais leves.

//      Você acaba escrevendo COMO as coisas devem ser feitas e todo o fluxo de COMO funcionar.

// exemplo de um codigo imperativo.
function media(notas) {
    let total = 0                              // Estados mutaveis
    for (let i = 0; i < notas.length; i++) {   // COMO as coisas devem acontecer
        total = notas[i]                       // Mais explícito
        return total / notas.length            // Maior quantidade de codigo
    }                                          // Mais conhecido
}                                              // Baixo nível de escalabilidade
const mediaDaTurma = media(notas)
console.log(`mediaDaTurma`, mediaDaTurma)


//      Já o código declarativo foca em O QUE precisa ser feito e não COMO, esta parte do "COMO" ele deixa pra a linguagem resolver.
//      Você vai dizer apenas O QUE você quer que seja feito, com dados imutáveis e código mais pesado, o que antigamente era um problema,
// visto que não tinhamos mémorias RAM de 16gb por "pente", nem processadores com 8 núcleos, e o smartphone, que nem era sequer cogitado, hoje
// já existem modelos com hardware melhor que muito notebook por ai no mercado!

// exemplo de um codigo declarativo. (comum no paradigma Funcional)
const somar = (a, b) => a + b                                   // Imutabilidade 
const dividir = (a, b) => a / b                                 // O QUE deve ser feito e não COMO
const mediaTurma = dividir(notas.reduce(somar), notas.length)   // Menos explícito
                                                                // Menor quantidade de código
                                                                // Menos conhecido
console.log(`mediaTurma`, mediaTurma)                           // Alto nivel de escalabilidade


// Importante ressaltar que em programação funcional, utiliza-se o estilo de código DECLARATIVO em sua maioria !

// Conclusão:
//      Existem vários paradigmas, todos com seus beneficios e maleficios, e existem também estilos de codificação como o imperativo e o 
// declarativo. 

//      Cada paradigma segue um estilo de codificação que mais se encaixa ao seu contexto.

//      Se você não conhecia o código declarativo, Olhe este código.

// <div>
//     <div>
//         <h1>{title}</h1>
//     </div>
// </div>

//      HTML é uma linguagem voltada pra o código declarativo, assim como SQL, entre outras, então não se assuste, nao é algo tão novo assim, 
// você só não sabia o que era.


// Repasse o que você aprendeu, pois conhecimento não se leva para o túmulo!
