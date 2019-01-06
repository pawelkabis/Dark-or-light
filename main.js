let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  code = e.keyCode;
  // if (code == 38){
  //   if (red <250){
  //     red +=10;
  //     green +=10;
  //     blue +=10;
  //     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  //     console.log(`${red}`)
  //   }
  // }else if (code == 40){
    // if (red > 0){
    //   red -=10;
    //   green -=10;
    //   blue -=10;
    //   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    //   console.log(`${red}`)
    // }
  // }

  switch(code) {
    case 38:
      if (red <255){
           red +=10;
           green +=10;
           blue +=10;
           document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
           console.log(`${red}`)
         }
      break;
    case 40:
      if (red > 0){
        red -=10;
        green -=10;
        blue -=10;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(`${red}`)
      }
      break;
    default:
      console.log("Niezdefiniowany przycisk :O")
  }


}

window.addEventListener('keydown', changeColor)