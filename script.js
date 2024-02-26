let interval;
//let box;
let both = 0;
let drop = 0;
let counter = 0;
let currentBlocks = [];

const character = document.getElementById("character");
//console.log(character);
const game = document.getElementById("game");
//console.log(game);

// document.addEventListener('DOMContentLoaded', ()=>{
    //     box = document.querySelector('#test');
    //     box.addEventListener('click', chooseSide);
// });

// function chooseSide(e){
    //     const {clientX, clientY} = e;
    //     const {clientHeight, clientWidth} = box
    //     if(clientY > (clientHeight/ 3)){
        //         console.log('bottom')
        //     }else if(clientX < (clientWidth/ 2)){
            //         console.log('left')
            //     } else{
                //         console.log('right')
                //     }
                // }
                
    
                
                function moveLeft(){
                    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
                    if(left>0){
                        character.style.left = left - 1 + "px";
                    }}
                    
                    function moveRight(){
                        let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
                        if(left<350){
                            character.style.left = left + 1 + "px";
                        }}
                        
                        document.addEventListener("keydown", event =>{
                            if(both==0){
                                both++
                                
                                if(event.key === "ArrowLeft"){
                                    interval = setInterval(moveLeft, 1);
                                }
                                if(event.key === "ArrowRight"){
                                    interval = setInterval(moveRight, 1);
                                }
                            }
                        })
                        
                        document.addEventListener("keyup", event =>{
                            clearInterval(interval);
                            both=0;
                        })

                        document.addEventListener("touchstart", e=>{
                            e.preventDefault()
                            let spot = e.touches[0].screenX;
                            let touch = spot - 1200;

                            if(touch <=200){
                                interval = setInterval(moveLeft, 1);
                            }else{
                                interval = setInterval(moveRight, 1);
                            }
                        })

                        document.addEventListener("touchend", e=>{
                            //console.log(e);
                            clearInterval(interval);
                        })

            //direct copy
function Play(){
        let button = document.getElementById("start");
        button.style.display = "none";

            var blocks = setInterval(function(){
                var blockLast = document.getElementById("block"+(counter-1));
                var holeLast = document.getElementById("hole"+(counter-1));
                if(counter>0){
                    var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
                    var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
                }
                if(blockLastTop<750||counter==0){
                    var block = document.createElement("div");
                    var hole = document.createElement("div");
                    block.setAttribute("class", "block");
                    hole.setAttribute("class", "hole");
                    block.setAttribute("id", "block"+counter);
                    hole.setAttribute("id", "hole"+counter);
                    block.style.top = blockLastTop + 125 + "px";
                    hole.style.top = holeLastTop + 125 + "px";
                    var random = Math.floor(Math.random() * 320);
                    hole.style.left = random + "px";
                    game.appendChild(block);
                    game.appendChild(hole);
                    currentBlocks.push(counter);
                    counter++;
                }
                var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
                var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
                var drop = 0;
                if(characterTop <= 0){
                    if(confirm("Game over. Score: "+(counter-7)+". Play again?")){
                        clearInterval(blocks);
                        location.reload();
                    }else{
                        points.innerHTML = (counter-7);
                        clearInterval(blocks);
                    }
                }
                for(var i = 0; i < currentBlocks.length;i++){
                    let current = currentBlocks[i];
                    let iblock = document.getElementById("block"+current);
                    let ihole = document.getElementById("hole"+current);
                    let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
                    let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
                    iblock.style.top = iblockTop - 0.5 + "px";
                    ihole.style.top = iblockTop - 0.5 + "px";
                    if(iblockTop < -20){
                        currentBlocks.shift();
                        iblock.remove();
                        ihole.remove();
                    }
                    if(iblockTop-20<characterTop && iblockTop>characterTop){
                        drop++;
                        if(iholeLeft<=characterLeft && iholeLeft+20>=characterLeft){
                            drop = 0;
                        }
                    }
                }
                if(drop==0){
                    if(characterTop < 480){
                        character.style.top = characterTop + 2 + "px";
                    }
                }else{
                    character.style.top = characterTop - 0.5 + "px";
                }

            },1);
        }    
        
        
        
        
        //Hard-coding blocks

        










        
    // const blocks = setInterval(function(){
    //         let numBlock = "block"+(counter-1);
    //         console.log(numBlock)
    //         let numHole = "hole"+(counter-1);
    //         console.log(numHole)
    //         let blockLast = document.getElementById(numBlock)
    //         console.log(blockLast);
    //         let holeLast = document.getElementById(numHole)
    //         console.log(counter)
        
    //         if(counter>0){
    //                     let blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
    //                     console.log(blockLastTop)
    //                     let holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
    //         if(counter === 0 || blockLastTop<400){
    //                 counter++;
    //                 let block = document.createElement("div");
    //                 let hole = document.createElement("div");
    //                 console.log(block)
    //                 console.log(hole)
    //                 block.setAttribute("class", "block");
    //                 hole.setAttribute("class", "hole");
    //                 block.setAttribute("id","block"+counter);
    //                 hole.setAttribute("id","hole"+counter);
    //                 block.style.top = blockLastTop + 100 + "px";
    //                 hole.style.top = holeLastTop + 100 + "px";
    //                 let random = Math.floor(Math.random() * 320);
    //                 hole.style.left = random + "px";
    //                 game.append("block");
    //                 game.append("hole");
    //                 currentBlocks.push(counter);
    //                 scoreCheck(counter);
    // }}

    //     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //     let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    
    //     if(characterTop <= 0){
    //         alert("Game over. Score:"+(counter-9))
    //         clearInterval(blocks)
    //         location.reload();
    // }
        
    // for(let i=0; i < currentBlocks.length; i++){
    //     let current = currentBlocks[i];
    //     let blockNum = "block"+current
    //     let iblock = document.getElementById(blockNum);
    //     console.log(iblock)
    //     let holeNum = "hole"+current
    //     let ihole = document.getElementById(holeNum);
    //     console.log(ihole)
    //     let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
    //     let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
    //     iblock.style.top = iblockTop - 0.5 + "px";
    //     ihole.style.top = iblockTop - 0.5 + "px";
    //     if(iblockTop < -50){
    //         currentBlocks.shift();
    //         iblock.remove();
    //         ihole.remove();
    //     }

    // if(iblockTop-50<characterTop && iblockTop>characterTop){
    //     drop++
    //     if(iholeLeft<=characterLeft && iholeLeft+50>=characterLeft){
    //         drop = 0;
    //     }
    // }

    // if(drop==0){
    //     if(characterTop<550)
    //     character.style.top = characterTop + 2 + "px";
    // }else{
    //     character.style.top = characterTop - 0.5 + "px";}
    // }
    //     }, 10000)