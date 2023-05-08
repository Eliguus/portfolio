var i = 0;
var txt = ' Hello, i am NAOL'; /* The text */
var speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML = txt.slice(0,i+1)+'<span class="span">|</span>';
    i++;
    setTimeout(typeWriter, speed);
  }
  
}

typeWriter()


let flagFront = false
let flagAck = false
let flagOther = false


function onClick(event){

    let click = event.target.id
    node='<img  class="some" src="./images/node.svg">'
    react='<img class="some" src="./images/react.svg">'
    html = '<img class="some" src="./images/html.svg">'
    css = '<img class="some" src="./images/css.svg">'
    mongo ='<img class="some" src="./images/mongo.svg">'
    python = '<img class="some" src="./images/python.svg">'
    express = '<img class="some" src="./images/express.svg">'
    
    switch(click){
        case 'front':
            document.getElementById('front-1').innerHTML= flagFront ? '' : `${react}  ${html}  ${css}`
            flagFront = !flagFront
            break
        case 'back':
            document.getElementById('back-1').innerHTML=flagAck? '' : `${node} ${express} ${mongo}`
            flagAck=!flagAck
            break
        case 'other':
            document.getElementById('other-1').innerHTML=flagOther? '' : `${python}`
            flagOther=!flagOther
            break
        default:
            break
            
        

    }

}

document.addEventListener('click',onClick)

// document.addEventListener('mouseover',mouseOver)
// document.addEventListener('mouseout',mouseOut)