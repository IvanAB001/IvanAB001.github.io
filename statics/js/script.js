function mostrarSeccion(seccionId) {
    var secciones = document.getElementsByClassName('seccion');
    for (var i = 0; i < secciones.length; i++) {
        secciones[i].className = 'seccion';
    }
    
    var seccionActiva = document.getElementById(seccionId);
    if (seccionActiva) {
        seccionActiva.className = 'seccion activa';
    }
    
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('formulario-contacto');
    
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            var nombre = formulario.elements['nombre'].value;
            var email = formulario.elements['email'].value;
            var telefono = formulario.elements['telefono'].value;
            var asunto = formulario.elements['asunto'].value;
            var mensaje = formulario.elements['mensaje'].value;
            
            if (nombre === '' || email === '' || asunto === '' || mensaje === '') {
                alert('Por favor complete todos los campos requeridos');
                return false;
            }
            
            alert('Gracias por contactarnos. Hemos recibido su mensaje y nos pondremos en contacto pronto.');
            formulario.reset();
            return false;
        });
    }
});
