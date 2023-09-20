let player1 = 0;
let player2 = 0;

let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messagetext = document.querySelectorAll('#message p');
let secondPlayer;

//adicionar o evento de clique em todas as caixas
for (let i = 0; i < boxes.length; i++) {
  //quando há o clique na caixa
  boxes[i].addEventListener('click', function () {
    //saber quem vai jogar
    let el = checkEl(player1, player2);
    if(this.childNodes.length == 0){
      //adicionar o elemento dentro da caixa
      //clonar o elemento
  let cloneEl = el.cloneNode(true);

  //usar função para inserir o elemento na lista
  this.appendChild(cloneEl);

  //verificar a troca dos elementos
  if (player1 == player2) {
    player1++;
  } else {
    player2++;
  }
  checkcondition();
    }
    
  });
}

 //definir quem começa
 function checkEl(player1 , player2){
if (player1 == player2) {
  el = x;
} else {
  el = o;
}
return el;
 }

  //definir quem venceu
 function checkcondition() {
   let b1 = document.getElementById('block1');
   let b2 = document.getElementById('block2');
   let b3 = document.getElementById('block3');
   let b4 = document.getElementById('block4');
   let b5 = document.getElementById('block5');
   let b6 = document.getElementById('block6');
   let b7 = document.getElementById('block7');
   let b8 = document.getElementById('block8');
   let b9 = document.getElementById('block9');

   // linhas horizontais do jogo
   if (
     b1.childNodes.length > 0 &&
     b2.childNodes.length > 0 &&
     b3.childNodes.length > 0
       ) {
     let b1child = b1.childNodes[0].className;
     let b2child = b2.childNodes[0].className;
     let b3child = b3.childNodes[0].className;

     //verificar a primeira linha
     if (b1child == 'x' && b2child == 'x' && b3child == 'x') {
      declareWinner('x');
     } else if (b1child == 'o' && b2child == 'o' && b3child == 'o') {
      declareWinner('o');
     }
    }
   

   //segunda linha
   if (
     b4.childNodes.length > 0 &&
     b5.childNodes.length > 0 &&
     b6.childNodes.length > 0
      ) {
     let b4child = b4.childNodes[0].className;
     let b5child = b5.childNodes[0].className;
     let b6child = b6.childNodes[0].className;
   

     //verificar a segunda linha
     if (b4child == 'x' && b5child == 'x' && b6child == 'x') {
       declareWinner('x');
     } else if (b4child == 'o' && b5child == 'o' && b6child == 'o') {
       declareWinner('o');
     }
    }


   //terceira linha
   if (
     b7.childNodes.length > 0 &&
     b8.childNodes.length > 0 &&
     b9.childNodes.length > 0
   ) {
     let b7child = b7.childNodes[0].className;
     let b8child = b8.childNodes[0].className;
     let b9child = b9.childNodes[0].className;

     //verificar a terceira linha
     if (b7child == 'x' && b8child == 'x' && b9child == 'x') {
      declareWinner('x');
     } else if (b7child == 'o' && b8child == 'o' && b9child == 'o') {
       declareWinner('o');
     }
   }

  //vertical primeira coluna
  if (
  b1.childNodes.length > 0 &&
  b4.childNodes.length > 0 &&
  b7.childNodes.length > 0
  ) {
    let b1child = b1.childNodes[0].className;
    let b4child = b4.childNodes[0].className;
    let b7child = b7.childNodes[0].className;
    
    //verificar a primeira linha
    if (b1child == 'x' && b4child == 'x' && b7child == 'x') {
      declareWinner('x');
    } else if (b1child == 'o' && b4child == 'o' && b7child == 'o') {
      declareWinner('o');
    }
  }
 
/*}*/ 

//vertical segunda coluna
if (
  b2.childNodes.length > 0 &&
  b5.childNodes.length > 0 &&
  b8.childNodes.length > 0
) {
  let b2child = b2.childNodes[0].className;
  let b5child = b5.childNodes[0].className;
  let b8child = b8.childNodes[0].className;

  //verificar a primeira linha
  if (b2child == 'x' && b5child == 'x' && b8child == 'x') {
    declareWinner('x');
  } else if (b2child == 'o' && b5child == 'o' && b8child == 'o') {
   declareWinner('o');
  }
}

//terceira coluna vertical
if (
  b3.childNodes.length > 0 &&
  b6.childNodes.length > 0 &&
  b9.childNodes.length > 0
) {
  let b3child = b3.childNodes[0].className;
  let b6child = b6.childNodes[0].className;
  let b9child = b9.childNodes[0].className;

  //verificar a primeira linha
  if (b3child == 'x' && b6child == 'x' && b9child == 'x') {
    declareWinner('x');
  } else if (b3child == 'o' && b6child == 'o' && b9child == 'o') {
    declareWinner('o');
  }
}


//diagonal primeira 
if (
  b1.childNodes.length > 0 &&
  b5.childNodes.length > 0 &&
  b9.childNodes.length > 0
) {
  let b1child = b1.childNodes[0].className;
  let b5child = b5.childNodes[0].className;
  let b9child = b9.childNodes[0].className;

  //verificar a primeira linha
  if (b1child == 'x' && b5child == 'x' && b9child == 'x') {
   declareWinner('x');
  } else if (b1child == 'o' && b5child == 'o' && b9child == 'o') {
    declareWinner('o');
  }
}

//diagonal segunda
if (
  b3.childNodes.length > 0 &&
  b5.childNodes.length > 0 &&
  b7.childNodes.length > 0
) {
  let b3child = b3.childNodes[0].className;
  let b5child = b5.childNodes[0].className;
  let b7child = b7.childNodes[0].className;

  //verificar a primeira linha
  if (b3child == 'x' && b5child == 'x' && b7child == 'x') {
    declareWinner('x');
  } else if (b3child == 'o' && b5child == 'o' && b7child == 'o') {
    declareWinner('o');
  }
}

//deu velha
let counter = 0;

for (let i = 0; i< boxes.length; i++){
if (boxes[i].childNodes != undefined){
counter++;
}

}


//testar a quantidade de elementos
if(counter == 9){
declareWinner('Deu velha!');
    }
}

 //Zerar o jogo, declarar o vencedor
 function declareWinner(winner){
   let scoreboardX = document.querySelector('#scoreboard-1');
   let scoreboardY = document.querySelector('#scoreboard-2');
   let msg = "";

   if(winner == 'x'){
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "O jogador 1 venceu!";
   }else if(winner == 'o'){
    scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    msg = "O jogador 2 venceu!";
   }else{
     msg = "Deu velha!";
   }

   //exibir a mensagem na tela
   messagetext.innerHTML = msg;
   messageContainer.classList.remove('hide');

   //esconder a mensagem
   setTimeout(function(){
    messageContainer.classList.add('hide');
   }, 2000);

   //zerar o tabuleiro
   let boxesToRemove = document.querySelectorAll('.box div');

   for(let i  = 0; i < boxesToRemove; i++){
      boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
   }
 
 }

     






