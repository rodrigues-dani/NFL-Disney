const perguntas = [
    {
      pergunta: "Qual é o nome da princesa em 'A Pequena Sereia'?",
      respostas: [
        "Ariel",
        "Bela",
        "Elsa",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do leão protagonista em 'O Rei Leão'?",
      respostas: [
        "Simba",
        "Mufasa",
        "Scar",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o vilão em 'A Bela e a Fera'?",
      respostas: [
        "Gaston",
        "Fera",
        "Lumière",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da protagonista em 'Frozen: Uma Aventura Congelante'?",
      respostas: [
        "Elsa",
        "Anna",
        "Olaf",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do brinquedo cowboy em 'Toy Story'?",
      respostas: [
        "Woody",
        "Buzz Lightyear",
        "Jessie",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o companheiro de Aladdin em 'Aladdin'?",
      respostas: [
        "Abu",
        "Jafar",
        "Genie",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da sereia amiga de Ariel em 'A Pequena Sereia'?",
      respostas: [
        "Sebastião",
        "Eric",
        "Ursula",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o animal de estimação de Mulan?",
      respostas: [
        "Dragão",
        "Gato",
        "Cavalo",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o vilão em 'A Pequena Sereia'?",
      respostas: [
        "Sebastião",
        "Ursula",
        "Eric",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome da irmã de Elsa em 'Frozen: Uma Aventura Congelante'?",
      respostas: [
        "Anna",
        "Olaf",
        "Kristoff",
      ],
      correta: 0
    },
  ];
  
  
  const quiz = document.querySelector('#quiz')
  //usar o documento para utilizar uma função dele. Essa função é para buscar elemente html e colocar numa variavel para mudar conteudo. 
  //criação de uma constante 'quiz' e atribuindo a ela o valores das tags relacionadas ao 'quiz'.
  const template =  document.querySelector('template')
  //criação de uma constante 'template' e atribuindo a ela o valores das tags relacionadas ao 'template'.
  
  //novo conjunto. Set -> posso tirar ou acrescenta, não posso repetir informação. 
  const corretas = new Set()
  //contagem de perguntas -> variavel não pode ter espaço.
  const totalDePerguntas = perguntas.length
  //pegar dentro do acertos HTML, dentro do span e atribuir ao mostrarTotal
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição 
  for(const item of perguntas){
  //criação de laço de repetição para puxar cada pergunta criada na constante perguntas um a um da array
    const quizItem = template.content.cloneNode(true)
    //criação de uma constante 'quizItem' e atribuindo a ela o conteudo das tags relacionadas ao 'template'. selecionando todas as tags da familia
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      //criação de laço de repetição para puxar cada resposta criada na constante perguntas um a um da array
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //adicionar um clone
      dt.querySelector('span').textContent = resposta
      //selecionar atraves do querySelector, dentro do dt, dentro do Input e atribuido as respostas de cada pergunta um name e um valor. Sendo o name 'Pergunta + o indice indicando qual é a pergunta, e o valor indicando qual o indice de resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      //selecionando dentro do input, alterar o valor referente ao input, guarde o valor de cada indice referente as respostas. 
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      //evento = a interação que está ocorrendo na tela. 
      //verificando o evento ocorrendo no input. 
      dt.querySelector('input').onchange = (event) => {
        //valor do indice referente a resposta selecionada
        //event.target.value
        //verificando se a resposta selecionada é igual a resposta correta -> retorna um booleano (0 ou 1 / true or false)
        const estaCorreta = event.target.value == item.correta
        //deletar das corretas, sempre que encontrar o item. 
        corretas.delete(item)
        //se estiver correta, adicionar o item.
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
      //adicionar um filho ao dt
    }
    quizItem.querySelector('dl dt').remove()
    //remover a resposta que esta no HTML como exemplo
    
    quiz.appendChild(quizItem)
    // coloca a pergunta na tela
  
  }
  
  