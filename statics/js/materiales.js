// EFECTOS Y INTERACTIVIDAD PARA MATERIALES

// Obtener elementos del modal
const detalleModal = document.getElementById('detalleModal');
const closeBtn = document.querySelector('.close');
const materialCards = document.querySelectorAll('.material-card');

// Datos detallados de cada material
const datosDetallados = {
    papel: {
        titulo: '📄 Papel y Cartón',
        contenido: `
            <h3>Papel y Cartón - Detalles Completos</h3>
            <p><strong>Descripción:</strong> Aceptamos todo tipo de papel y cartón, desde papel de oficina blanco hasta cartones de embalaje corrugados.</p>
            
            <p><strong>Tipos de Papel que Aceptamos:</strong></p>
            <ul style="margin-left: 20px; color: #666;">
                <li>Papel de Oficina (blanco y de color)</li>
                <li>Periódicos y Revistas</li>
                <li>Cartón Corrugado</li>
                <li>Cartón Gris</li>
                <li>Papel Kraft</li>
                <li>Embalajes de Cartón</li>
            </ul>
            
            <p><strong>Proceso de Reciclaje:</strong> Los materiales se clasifican por tipo, se eliminan contaminantes, se tritura en fibra y se compacta para ser transportado a plantas de procesamiento donde se convierte en nueva pulpa de papel.</p>
            
            <p><strong>Beneficios del Reciclaje:</strong> Ahorra 50% de energía y 10,000 litros de agua por tonelada. Reduce deforestación.</p>
            
            <p><strong>Precio:</strong> Variable según cantidad y calidad. Contacte para cotización.</p>
        `
    },
    plastico: {
        titulo: '🔵 Plásticos',
        contenido: `
            <h3>Plásticos - Detalles Completos</h3>
            <p><strong>Descripción:</strong> Reciclamos todos los tipos de plástico clasificados por resina (PET, HDPE, PVC, LDPE, PP, PS).</p>
            
            <p><strong>Tipos de Plástico (Clasificación):</strong></p>
            <ul style="margin-left: 20px; color: #666;">
                <li>PET (1) - Botellas de bebidas, envases</li>
                <li>HDPE (2) - Botellas de leche, recipientes rígidos</li>
                <li>PVC (3) - Tuberías, ventanas, envoltorios</li>
                <li>LDPE (4) - Películas, bolsas plásticas</li>
                <li>PP (5) - Contenedores, juguetes</li>
                <li>PS (6) - Vasos desechables, poliestireno</li>
                <li>Otros - Mezclas y especiales</li>
            </ul>
            
            <p><strong>Proceso de Reciclaje:</strong> Separación por tipo de resina, trituración, limpieza, fusión y pelletización para crear nuevas resinas de plástico.</p>
            
            <p><strong>Beneficios:</strong> El plástico reciclado reduce contaminación y consume 66% menos energía que plástico nuevo.</p>
            
            <p><strong>Precio:</strong> Cotización según tipo de plástico y cantidad.</p>
        `
    },
    metal: {
        titulo: '⚙️ Metales',
        contenido: `
            <h3>Metales - Detalles Completos</h3>
            <p><strong>Descripción:</strong> Especializados en la recolección y procesamiento de metales ferrosos y no ferrosos de alta calidad.</p>
            
            <p><strong>Tipos de Metales:</strong></p>
            <ul style="margin-left: 20px; color: #666;">
                <li>Hierro y Acero - Chatarra industrial, estructuras metálicas</li>
                <li>Aluminio - Latas, ventanas, estructuras</li>
                <li>Cobre - Cables, tuberías, equipos eléctricos</li>
                <li>Bronce y Latón - Accesorios, equipamientos</li>
                <li>Metales Mixtos - Chatarra variada industrial</li>
            </ul>
            
            <p><strong>Proceso de Reciclaje:</strong> Separación magnética de ferrosos, clasificación manual de no ferrosos, compactación y venta a fundiciones.</p>
            
            <p><strong>Beneficios:</strong> 100% reciclable infinitas veces. El acero reciclado ahorra 60% de energía.</p>
            
            <p><strong>Precio:</strong> Cotización en tiempo real según tipo de metal y precio de mercado.</p>
        `
    },
    vidrio: {
        titulo: '🥛 Vidrio',
        contenido: `
            <h3>Vidrio - Detalles Completos</h3>
            <p><strong>Descripción:</strong> Aceptamos botellas y envases de vidrio de todos los colores, separados por tipo.</p>
            
            <p><strong>Tipos de Vidrio:</strong></p>
            <ul style="margin-left: 20px; color: #666;">
                <li>Vidrio Transparente - Botellas claras, envases</li>
                <li>Vidrio Verde - Botellas de cerveza, vino</li>
                <li>Vidrio Ámbar - Botellas obscuras, medicinas</li>
                <li>Vidrio Blanco - Frascos, contenedores especiales</li>
            </ul>
            
            <p><strong>Proceso de Reciclaje:</strong> Clasificación por color, trituración, limpieza, fusión a 1750°C en hornos especiales para crear nuevo vidrio.</p>
            
            <p><strong>Beneficios:</strong> Infinitamente reciclable. Cada tonelada de vidrio reciclado ahorra 1 tonelada de materia prima.</p>
            
            <p><strong>Precio:</strong> Variable por color y cantidad. Consulte cotización.</p>
        `
    },
    electronico: {
        titulo: '💻 Electrónicos',
        contenido: `
            <h3>Electrónica - Detalles Completos</h3>
            <p><strong>Descripción:</strong> Reciclaje especializado de equipos electrónicos con tratamiento seguro de componentes peligrosos.</p>
            
            <p><strong>Equipos que Aceptamos:</strong></p>
            <ul style="margin-left: 20px; color: #666;">
                <li>Computadoras y Servidores - CPU, placas base, discos duros</li>
                <li>Teléfonos Celulares - Recuperación de metales preciosos</li>
                <li>Cables y Conectores - Cobre de alta pureza</li>
                <li>Monitores y Pantallas - Vidrio especial, componentes raros</li>
                <li>Electrodomésticos - Motores, cableado, metales</li>
            </ul>
            
            <p><strong>Proceso:</strong> Desmantelamiento seguro, extracción de componentes peligrosos (mercurio, plomo), reciclaje de metales valiosos (oro, plata, cobre, estaño).</p>
            
            <p><strong>Beneficios:</strong> Recuperación de oro, plata y metales valiosos. Prevención de contaminación ambiental.</p>
            
            <p><strong>Precio:</strong> Cotización especial según tipo de equipo.</p>
        `
    },
    textil: {
        titulo: '👕 Textiles',
        contenido: `
            <h3>Textiles - Detalles Completos</h3>
            <p><strong>Descripción:</strong> Reciclaje de prendas de vestir, telas y materiales textiles diversos.</p>
            
            <p><strong>Tipos de Textiles:</strong></p>
            <ul style="margin-left: 20px; color: #666;">
                <li>Algodón Natural - Ropa, manteles, toallas</li>
                <li>Poliéster Sintético - Ropa moderna, mezclas</li>
                <li>Lana Natural - Abrigos, suéteres, accesorios</li>
                <li>Mezclas Textiles - Combinaciones de fibras</li>
            </ul>
            
            <p><strong>Proceso de Reciclaje:</strong> Clasificación por tipo de fibra, limpieza, deshilachado, transformación en fieltro o nueva fibra, o donación para reutilización directa.</p>
            
            <p><strong>Beneficios:</strong> Ropa vintage reutilizable, fieltro para aislantes, fibras para nuevos textiles.</p>
            
            <p><strong>Precio:</strong> Consulte según cantidad y tipo de textil.</p>
        `
    }
};

// Función para abrir detalles
function abrirDetalle(button) {
    const card = button.closest('.material-card');
    const materialType = card.dataset.material;
    const datos = datosDetallados[materialType];
    
    // Alternar clase expanded
    const detalles = card.querySelector('.material-details');
    if (detalles.style.display !== 'block') {
        card.classList.add('expanded');
    } else {
        card.classList.remove('expanded');
    }
    
    // Abrir modal
    if (datos) {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = datos.contenido;
        detalleModal.classList.add('show');
    }
}

// Cerrar modal
closeBtn.addEventListener('click', () => {
    detalleModal.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target == detalleModal) {
        detalleModal.classList.remove('show');
    }
});

// Efecto de clic en tarjetas
materialCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // No ejecutar si se hace clic en el botón (que ya tiene su propio evento)
        if (!e.target.classList.contains('btn-detalles')) {
            const button = card.querySelector('.btn-detalles');
            button.click();
        }
    });

    // Efecto hover de profundidad
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
    });

    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '1';
    });
});

// Animación de entrada de tarjetas
window.addEventListener('load', () => {
    materialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});

// Scroll reveal effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar pasos del proceso
document.querySelectorAll('.paso').forEach(paso => {
    observer.observe(paso);
});

// Efecto de contador de animación en badges
document.querySelectorAll('.stat-badge').forEach((badge, index) => {
    badge.style.animation = `slideDown 0.4s ease ${0.05 * index}s backwards`;
});

// Animación CSS para badges
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('✅ Materiales.js cargado - Efectos activados');
