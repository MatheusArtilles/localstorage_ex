const btn = document.getElementById("btn-env");
const input = document.querySelector("input");
const div = document.getElementById("comentarios");

const comentariosSalvos = JSON.parse(localStorage.getItem("comentarios"));
if(comentariosSalvos !== null) {
    comentariosSalvos.forEach(comentario => {
        addComentarios(comentario);
    });
}
function addComentarios(comentario) {
    let p = document.createElement("p");
    p.innerText = comentario;
    div.appendChild(p);
    
}
btn.addEventListener("click", () => {

    if(comentariosSalvos !== null){
        //comentariosSalvos.push(input.value);
        localStorage.setItem("comentarios", JSON.stringify([...comentariosSalvos, input.value]));
    } else {
        localStorage.setItem("comentarios", JSON.stringify([input.value]));   
    }
    
    addComentarios(input.value);
    
});
