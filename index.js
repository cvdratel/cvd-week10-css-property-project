
let slider = document.getElementById("slider");
let box = document.getElementById("box");


function opacity(){
  console.log("opacity");
    let value = slider.value;
    console.log(value);
    box.style.opacity = `${value / 100}`;  
}

slider.addEventListener('input', opacity);

