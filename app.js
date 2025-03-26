
document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            // Foto de perfil
            document.getElementById("foto-perfil").src = data.foto || "https://via.placeholder.com/150";
            document.getElementById("nombre").textContent = data.nombre;
            document.getElementById("titulo").textContent = data.titulo;
            
            // Contacto
            document.getElementById("contacto").innerHTML = `
                <p><i class="fas fa-phone"></i> ${data.contacto.telefono}</p>
                <p><i class="fas fa-envelope"></i> ${data.contacto.email}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${data.contacto.ubicacion}</p>
                <a href="${data.contacto.linkedin}" class="btn btn-primary btn-sm m-1" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                <a href="${data.contacto.github}" class="btn btn-dark btn-sm m-1" target="_blank"><i class="fab fa-github"></i> GitHub</a>
            `;

            // Tecnologías
            const tecnologiasContainer = document.getElementById("tecnologias");
            data.tecnologias.forEach(tech => {
                const iconElement = document.createElement("i");
                iconElement.className = `${tech.icon}`;
                iconElement.title = tech.nombre;
                tecnologiasContainer.appendChild(iconElement);
            });

            // Perfil profesional
            document.getElementById("perfil").innerHTML = `<p>${data.perfil_profesional}</p>`;

            // Experiencia
            const experienciaContainer = document.getElementById("experiencia");
            data.experiencia.forEach(exp => {
                const section = document.createElement("div");
                section.innerHTML = `<h4>${exp.cargo} <span class="text-warning">(${exp.periodo})</span></h4>`;
                const ul = document.createElement("ul");
                exp.responsabilidades.forEach(resp => {
                    const li = document.createElement("li");
                    li.textContent = resp;
                    ul.appendChild(li);
                });
                section.appendChild(ul);
                experienciaContainer.appendChild(section);
            });

        const whatsappButton = document.getElementById("whatsapp-btn");
        const phoneNumber = data.contacto.telefono.replace(/\D/g, ''); // Eliminamos cualquier carácter no numérico
        const whatsappMessage = encodeURIComponent(`Hola ${data.nombre}, estoy interesado en tu perfil.`);
        whatsappButton.setAttribute("href", `https://wa.me/${phoneNumber}?text=${whatsappMessage}`);
        whatsappButton.setAttribute("target", "_blank"); // Para abrir en una nueva pestaña

        })
        .catch(error => {
            console.error("Error cargando el JSON:", error);
            document.body.innerHTML += `<div class="alert alert-danger text-center mt-4">Error cargando datos. Verifica la ruta del archivo JSON.</div>`;
        });

   
  

});



