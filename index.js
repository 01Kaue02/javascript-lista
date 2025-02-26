const inputItem = document.getElementById("input-item");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(inputItem.value);
    if (inputItem.value === ""){
        return
    }
    const itemDaLista = document.createElement("li")
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container")
});
