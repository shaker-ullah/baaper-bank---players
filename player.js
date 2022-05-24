function getStyle(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '5px';
    player.style.margin = '5px';
    player.style.padding = '10px'
}
const players= document.getElementsByClassName('player');
for(const player of players){
  getStyle(player);
//   player.addEventListener('click', function(){
//     player.style.backgroundColor = 'yellow';
//     })
}

function addPlayer(){
    const players = document.getElementById('player-profile');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    prrrrrrrrrruiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
    `;
    players.appendChild(player);
    getStyle(player);
    // player.addEventListener('click', function(){
    // player.style.backgroundColor = 'yellow';
    // })
}

document.getElementById('player-profile').addEventListener('click', function(event){
    if (event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor='yellow';
    }
   })
