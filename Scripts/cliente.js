document.addEventListener('DOMContentLoaded', (event) => {
            const inputs = {
                'i-cnpj': 'cnpj',
                'i-rs': 'razaosocial',
                'i-tipo': 'tipo-pendencia',
                'i-pendencia': 'pendencia'
            };

            for (let inputId in inputs) {
                let inputElement = document.getElementById(inputId);
                let targetId = inputs[inputId];
                let targetElement = document.getElementById(targetId);

                // Store the original content of the target element
                targetElement.dataset.originalContent = targetElement.textContent;

                inputElement.addEventListener('input', () => {
                    if (inputElement.value.trim() === '') {
                        targetElement.textContent = targetElement.dataset.originalContent;
                    } else {
                        targetElement.textContent = inputElement.value;
                    }
                });
            }
        });

document.getElementById('i-cnpj').addEventListener('input', function() {
            syncInputWithElement('i-cnpj', 'cnpj');
        });

        document.getElementById('i-rs').addEventListener('input', function() {
            syncInputWithElement('i-rs', 'razao-social');
        });

        document.getElementById('i-tipo').addEventListener('input', function() {
            syncInputWithElement('i-tipo', 'tipo-pendencia');
        });

        document.getElementById('i-pendencia').addEventListener('input', function() {
            syncInputWithElement('i-pendencia', 'pendencia');
        });

        function syncInputWithElement(inputId, targetId) {
            let inputElement = document.getElementById(inputId);
            let targetElement = document.getElementById(targetId);

            // Store the original content of the target element
            targetElement.dataset.originalContent = targetElement.textContent;

            if (inputElement.value.trim() === '') {
                targetElement.textContent = targetElement.dataset.originalContent;
            } else {
                targetElement.textContent = inputElement.value;
            }
        }