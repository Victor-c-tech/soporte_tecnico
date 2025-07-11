document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para obtener el plan de la URL (se mantiene igual) ---
    const urlParams = new URLSearchParams(window.location.search);
    const planSeleccionado = urlParams.get('plan');
    const planTitleElement = document.getElementById('plan-title');
    const planInputElement = document.getElementById('plan-input');

    if (planSeleccionado) {
        planTitleElement.textContent = `Confirmar: ${planSeleccionado}`;
        planInputElement.value = planSeleccionado;
    }

    // --- NUEVA LÓGICA PARA MANEJAR EL ENVÍO DEL FORMULARIO ---
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');

    async function handleSubmit(event) {
        // 1. Prevenir el comportamiento por defecto (la redirección a Formspree)
        event.preventDefault();

        // 2. Crear un objeto FormData con los datos del formulario
        const data = new FormData(event.target);

        try {
            // 3. Enviar los datos a Formspree usando Fetch (envío en segundo plano)
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // 4. Si el envío fue exitoso...
            if (response.ok) {
                // 5. Reiniciar el campo de email
                emailInput.value = ''; 
                
                // 6. Redirigir al usuario a nuestra página de éxito
                window.location.href = 'exito.html';
            } else {
                // Si hubo un error de red o de Formspree...
                const responseData = await response.json();
                if (Object.hasOwn(responseData, 'errors')) {
                    alert(responseData["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Oops! Hubo un problema al enviar tu solicitud.');
                }
            }
        } catch (error) {
            // Si hubo un error de conexión...
            alert('Oops! Hubo un problema de red. Inténtalo de nuevo.');
        }
    }

    // 7. Añadir el "escuchador" de eventos al formulario
    form.addEventListener("submit", handleSubmit);
});