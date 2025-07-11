document.addEventListener('DOMContentLoaded', () => {
    // ---- Animación del número principal ----
    const numberElement = document.getElementById('stat-number');
    const targetNumber = 42;
    let currentNumber = 0;
    const animationDuration = 2000; // 2 segundos
    const stepTime = Math.abs(Math.floor(animationDuration / targetNumber));

    const timer = setInterval(() => {
        currentNumber += 1;
        numberElement.textContent = currentNumber;
        if (currentNumber === targetNumber) {
            clearInterval(timer);
        }
    }, stepTime);
    
    // ---- Animación del círculo principal ----
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // --- NUEVA LÓGICA PARA EL RELOJ Y CÍRCULO DE HORA ---
    const timeValueElement = document.getElementById('time-value');
    const timeCircleElement = document.querySelector('.progress-circle.time-circle');
    const timeCircleCircumference = 345; // 2 * Math.PI * 55

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = now.getSeconds();

        // Actualizar el texto de la hora
        timeValueElement.textContent = `${hours}:${minutes}`;

        // Calcular el progreso del círculo basado en los segundos
        const secondsProgress = seconds / 60;
        const dashOffset = timeCircleCircumference * (1 - secondsProgress);

        // Actualizar el círculo de la hora
        timeCircleElement.style.strokeDashoffset = dashOffset;
    }

    // Actualizar el reloj inmediatamente y luego cada segundo
    updateClock();
    setInterval(updateClock, 1000);

    // --- LÓGICA OPCIONAL PARA EL BOTÓN DE SUBIR ARCHIVO ---
    const fileUploadInput = document.getElementById('file-upload');
    const fileUploadLabel = document.querySelector('label[for="file-upload"]');

    fileUploadInput.addEventListener('change', () => {
        if (fileUploadInput.files.length > 0) {
            // Informa al usuario que el archivo fue seleccionado
            fileUploadLabel.textContent = `Archivo: ${fileUploadInput.files[0].name}`;
            fileUploadLabel.style.backgroundColor = 'var(--accent-green)';
            fileUploadLabel.style.color = 'var(--bg-color)';
        }
    });
});