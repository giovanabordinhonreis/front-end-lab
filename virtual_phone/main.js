const display = document.querySelector('input[type=tel]');

const teclas = document.querySelectorAll('input[type=button]');

const limpar = document.querySelector('.icon');

limpar.onclick = () => {
    const opcao = confirm("Tem certeza que deseja limpar?");
    if(opcao){
        display.value = "";
    }
}

function valorTeclaToDisplay (i) {
    if (display.value.length < 14) {
        display.value += teclas[i].value;
    } else {
        alert("Chegou no limite de dígitos!")
    }
}

for (let i = 0; i < teclas.length; i++){
    teclas[i].onclick = () => {
        valorTeclaToDisplay(i);
    }
}
