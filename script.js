document.addEventListener('DOMContentLoaded', () => {
    // ---- Animación del número principal ----
    const numberElement = document.getElementById('stat-number');
    if (numberElement) {
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
    }
    
    // ---- Animación del círculo principal ----
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // --- LÓGICA PARA EL RELOJ Y CÍRCULO DE HORA ---
    const timeValueElement = document.getElementById('time-value');
    const timeCircleElement = document.querySelector('.progress-circle.time-circle');
    
    if (timeValueElement && timeCircleElement) {
        const timeCircleCircumference = 345; // 2 * Math.PI * 55

        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = now.getSeconds();

            timeValueElement.textContent = `${hours}:${minutes}`;
            const secondsProgress = seconds / 60;
            const dashOffset = timeCircleCircumference * (1 - secondsProgress);
            timeCircleElement.style.strokeDashoffset = dashOffset;
        }

        updateClock();
        setInterval(updateClock, 1000);
    }

    // --- LÓGICA OPCIONAL PARA EL BOTÓN DE SUBIR ARCHIVO ---
    const fileUploadInput = document.getElementById('file-upload');
    const fileUploadLabel = document.querySelector('label[for="file-upload"]');
    
    if (fileUploadInput && fileUploadLabel) {
        fileUploadInput.addEventListener('change', () => {
            if (fileUploadInput.files.length > 0) {
                const fileName = fileUploadInput.files[0].name;
                // Acorta el nombre del archivo si es muy largo
                const labelText = fileName.length > 12 ? `${fileName.substring(0, 10)}...` : fileName;
                
                fileUploadLabel.textContent = labelText;
                fileUploadLabel.style.backgroundColor = 'var(--accent-green)';
                fileUploadLabel.style.color = 'var(--bg-color)';
                fileUploadLabel.style.fontSize = '0.8rem'; // Ajusta el tamaño de fuente si es necesario
            }
        });
    }

    // --- LÓGICA PARA EL MENÚ DE HAMBURGUESA (AÑADIDO) ---
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-nav-menu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('open');
            mobileMenu.classList.toggle('open');
        });
    }
});
