function hiddenCard(el){
    var divDisplay = document.getElementById(el);
    var display = divDisplay.style.display;
    var btnHidden = document.getElementById("btnHidden");
    if(display != "flex"){
        divDisplay.style.display = 'flex';
        btnHidden.textContent = 'Mostrar Menos';
    }else{
        divDisplay.style.display = 'none';
        btnHidden.textContent = 'Mostrar Mais';
    }
}