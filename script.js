// Manejo del formulario de afiliación
const affiliateForm = document.getElementById("affiliate-form");

affiliateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capturar los datos del formulario
    const name = document.getElementById("affiliate-name").value;
    const email = document.getElementById("affiliate-email").value;
    const phone = document.getElementById("affiliate-phone").value;
    const address = document.getElementById("affiliate-address").value;
    const password = document.getElementById("affiliate-password").value;

    // Validación básica
    if (name && email && phone && address && password) {
        alert(`¡Gracias por registrarte, ${name}! Tu cuenta será revisada.`);
        // Aquí puedes implementar la lógica para enviar los datos al servidor
    } else {
        alert("Por favor, completa todos los campos.");
    }

    // Resetear el formulario
    affiliateForm.reset();
});

// Manejo del formulario de afiliación
const affiliateForm = document.getElementById("affiliate-form");

affiliateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capturar los datos del formulario
    const name = document.getElementById("affiliate-name").value;
    const email = document.getElementById("affiliate-email").value;
    const phone = document.getElementById("affiliate-phone").value;
    const address = document.getElementById("affiliate-address").value;
    const password = document.getElementById("affiliate-password").value;

    // Validación básica
    if (name && email && phone && address && password) {
        alert(`¡Gracias por registrarte, ${name}! Tu cuenta será revisada.`);
        // Aquí puedes implementar la lógica para enviar los datos al servidor
    } else {
        alert("Por favor, completa todos los campos.");
    }

    // Resetear el formulario
    affiliateForm.reset();
});
