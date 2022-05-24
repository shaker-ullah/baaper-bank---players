function setPlayerStyle(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for(const player of players){
  setPlayerStyle(player);
//   player.addEventListener('click', function(){
//     player.style.backgroundColor = 'yellow';
//   })

}

function addPlayer(){
    const players = document.getElementById('player-profile');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New-player</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, laudantium. Commodi et vitae alias, placeat voluptas impedit mollitia hic libero incidunt cumque eos, enim culpa, at quis fugiat illo aut.</p>
    `;
    setPlayerStyle(player);
    players.appendChild(player);
    // player.addEventListener('click', function(){
    //     player.style.backgroundColor = 'yellow';
    //   })
    
}
document.getElementById('player-profile').addEventListener('click', function(event){
 if (event.target.tagName.toLowerCase() == 'div'){
     event.target.style.backgroundColor = 'black';
 }
 else{
     event.target.parentNode.style.backgroundColor='black';
 }
})