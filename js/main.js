function changeColor(colorName, imageSrc) {
    // Actualizar texto
    document.getElementById('color-name-display').textContent = colorName;
    
    // Actualizar imagen con efecto de fade
    const imgElement = document.getElementById('color-preview-image');
    imgElement.style.opacity = '0.5';
    setTimeout(() => {
        imgElement.src = imageSrc;
        imgElement.style.opacity = '1';
    }, 150);

    // Actualizar estilos activos de los botones (opcional, básico)
    const buttons = event.currentTarget.parentElement.children;
    for (let btn of buttons) {
        btn.classList.remove('border-white', 'ring-primary');
        btn.classList.add('border-transparent', 'ring-transparent');
    }
    event.currentTarget.classList.remove('border-transparent', 'ring-transparent');
    event.currentTarget.classList.add('border-white', 'ring-primary');
}
