document.addEventListener('DOMContentLoaded', () => {
    const botaoImprimir = document.getElementById('botao-imprimir');
    const secaoConfig = document.querySelector('.config');
    const documento = document.getElementById('documento');
    const inputsConfig = document.querySelectorAll('.input-config');

    const verificarInputsPreenchidos = () => Array.from(inputsConfig).every(input => input.value);
    const validarInputs = () => {
        botaoImprimir.disabled = !verificarInputsPreenchidos();
        if (botaoImprimir.disabled) {
            botaoImprimir.classList.add('botao-desabilitado');
			botaoImprimir.classList.remove('botao-habilitado');
        } else {
			botaoImprimir.classList.add('botao-habilitado');
            botaoImprimir.classList.remove('botao-desabilitado');
        }
    };

    inputsConfig.forEach(input => input.addEventListener('input', validarInputs));

    if (botaoImprimir && secaoConfig) {
        botaoImprimir.addEventListener('click', () => {
            secaoConfig.classList.add('ocultar-na-impressao');
            documento.style.border = "0px solid #00003F";
            window.print();
            setTimeout(() => {
                secaoConfig.classList.remove('ocultar-na-impressao');
                documento.style.border = "2px solid #00003F";
            }, 500);
            botaoImprimir.classList.toggle('exportado');
        });
        validarInputs();
    }
});
