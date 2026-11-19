// Expansión de tarjetas (solo en páginas que las tengan)
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('active'));
});

// Animación secuencial del diagrama de flujo (solo en la página de servicios)
const flowSteps = document.querySelectorAll('.flow-step');
let currentStep = 0;

function highlightFlow() {
    if (flowSteps.length === 0) return;
    flowSteps.forEach(s => { s.style.borderColor = ''; s.style.boxShadow = ''; });
    flowSteps[currentStep].style.borderColor = 'var(--gold)';
    flowSteps[currentStep].style.boxShadow = '0 0 20px rgba(251, 191, 36, 0.35)';
    currentStep = (currentStep + 1) % flowSteps.length;
}

if (flowSteps.length > 0) {
    setInterval(highlightFlow, 2000);
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            flowSteps.forEach(s => { s.style.borderColor = ''; s.style.boxShadow = ''; });
        });
    });
}

console.log('✅ Página cargada correctamente.');