document.addEventListener("DOMContentLoaded", function() {
	const inputGerente = document.getElementById('i-gerente');
	const gerente1 = document.getElementById('gerente1');
	const gerente2 = document.getElementById('gerente2');

	// Function to update the text content
	function updateGerenteText() {
		const value = inputGerente.value;
		const displayValue = value.trim() === '' ? '[Gerente]' : value;
		gerente1.innerText = displayValue;
		gerente2.innerText = displayValue;
	}

	// Initial call to set the text when the page loads
	updateGerenteText();

	// Event listener to update the text whenever the input value changes
	inputGerente.addEventListener('input', updateGerenteText);
});
