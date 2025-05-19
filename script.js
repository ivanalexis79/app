function convert() {
    let feet = document.getElementById("inputFeet").value;
    let cm = feet * 30.48;
    document.getElementById("result").innerText = `${feet} pies son ${cm.toFixed(2)} cm.`;
}

// Registrar Service Worker (para PWA)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log("Service Worker registrado con éxito", reg))
    .catch(err => console.error("Error al registrar el Service Worker", err));
}
