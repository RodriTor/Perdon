
// script.js - Animaciones y lógica de la página "¿Me perdonas?"

const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");
const respuesta = document.getElementById("respuesta");

// efecto de corazones al presionar "Sí"
function lanzarCorazones() {
    const cantidad = 20;
    for (let i = 0; i < cantidad; i++) {
        const heart = document.createElement("div");
        heart.classList.add("corazon");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
}

// acción botón SÍ
btnSi.addEventListener("click", () => {
    respuesta.textContent = "te amo demasiado por vos siempre estare iluminado";
    lanzarCorazones();
});

// Acción botón NO (el botón se escapa y se mueve)
btnNo.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    btnNo.style.position = "absolute";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});

btnNo.addEventListener("click", () => {
    respuesta.textContent = "¿De verdad no? 😭 Dale, pensalo otra vez...";
});

// Crear corazones con CSS desde JS
const style = document.createElement("style");
style.innerHTML = `
    .corazon {
        position: fixed;
        font-size: 2rem;
        animation: subir 3s linear forwards;
        pointer-events: none;
    }

    @keyframes subir {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }
    }
`;
document.head.appendChild(style);
