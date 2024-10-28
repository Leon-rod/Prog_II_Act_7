const turnos = ["Augusto Flores","Martin Guzman","Sergio Diaz"];

function SetBasis(){
    const $divPrevio = document.querySelector(".m_c__container");
    if($divPrevio != null){
        $divPrevio.remove();
    }
    const $items = document.querySelectorAll(".m_c__item");
    for(var i of $items){
        i.style.display = "none";
    }
    const $div = document.createElement("div");
    $div.classList.add("m_c__container");
    const $mainContent = document.getElementById("main__content");
    // $mainContent.removeChild($mainContent.lastElementChild);
    $mainContent.appendChild($div);
}
function InsertarCliente(){
    const $textarea = document.querySelector(".textarea_result");
    if($textarea.value=== ""){
        alert("Escriba el nombre del cliente");
    }
    else{
        turnos.push($textarea.value);
        $textarea.value = "";
        alert("Turno agregado");
    }
}

function EventoConsultar(){
    SetBasis();
    const $pTittle = document.createElement("p")
    $pTittle.classList.add("p_tittle");
    $pTittle.innerText = "Total de turnos por cliente";
    const $divResult = document.createElement("div");
    $divResult.classList.add("div_result");
    let numerador = 0;
    for(let nombre of turnos){
        numerador++;
        const $pCliente = document.createElement("p");
        $pCliente.innerText = `Cliente ${numerador}: ${nombre}`;
        $pCliente.classList.add("p_cliente");
        $divResult.appendChild($pCliente);
    }
    const $mainContentContainer = document.querySelector(".m_c__container");
    $mainContentContainer.appendChild($pTittle);
    $mainContentContainer.appendChild($divResult);
}
function EventoAgregar(){
    SetBasis();
    const $pTittle = document.createElement("p")
    $pTittle.classList.add("p_tittle");
    $pTittle.innerText = "Agregar turno para cliente";
    const $textarea = document.createElement("textarea");
    $textarea.classList.add("textarea_result");
    $textarea.setAttribute("placeholder", "Escriba el nombre del cliente");
    const $button = document.createElement("button");
    $button.classList.add("button_result");
    $button.innerText = "Agregar";
    const $mainContentContainer = document.querySelector(".m_c__container");
    $mainContentContainer.appendChild($pTittle);
    $mainContentContainer.appendChild($textarea);
    $mainContentContainer.appendChild($button);
    $button.addEventListener("click", InsertarCliente);
}
function EventoInicio(){
    const $mainContent = document.getElementById("main__content");
    const $item = document.querySelector(".m_c__container");
    if ($item != null)
        $mainContent.removeChild($item);
    const $divs = document.querySelectorAll(".m_c_div");
    for(let div of $divs){
        div.style.display = "inline-block";
    }
}

document.getElementById("m_c_d_primer_item").addEventListener("click", EventoConsultar);
document.getElementById("list__consultar").addEventListener("click", EventoConsultar);

document.getElementById("list__agregar").addEventListener("click", EventoAgregar);
document.getElementById("m_c_d_segundo_item").addEventListener("click", EventoAgregar);

document.getElementById("list__inicio").addEventListener("click", EventoInicio);