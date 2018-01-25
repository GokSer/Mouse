const text  = document.querySelector(".mainText");
const mainContainer  = document.querySelector(".container");

mainContainer.addEventListener("mousemove", runEvent);

function runEvent(e){
    e.preventDefault();
    
    //mouse hareketinde kordinat gösterimi
    text.textContent = `Mouse-X: ${e.offsetX}, Mouse-Y: ${e.offsetY}`;

    //kordinat değişirken arka plan rengi değişimi
    document.body.style.backgroundColor = `rgb(${e.offsetX}, 180, ${e.offsetY})`;
}