const example = document.querySelector("#another-id");
document.addEventListener("mousemove",(e)=>{

    const{screenX} = e;
    example.style.width = `${screenX}px`
})