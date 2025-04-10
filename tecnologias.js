const tecnologias = [
    {
      icon: "🖥️",
      titulo: "Backend",
      color: "dark",
      datos: {
        "Lenguajes": ["Java SE 7, 8, 11", "Java EE 5, 6, 7", "PHP"],
        "Frameworks": [
          "Spring (Boot, JPA, MVC, Batch, Cache, Microservices, Security)",
          "Hibernate",
          "Express.js",
          "Laravel"
        ]
      }
    },
    {
      icon: "🌐",
      titulo: "Frontend",
      color: "primary",
      datos: {
        "Lenguajes y Frameworks": [
          "JavaScript",
          "JSF, PrimeFaces, RichFaces",
          "Angular, AngularJS",
          "JQuery",
          "Android nativo (Java)"
        ]
      }
    },
    {
      icon: "☁️",
      titulo: "Cloud / DevOps",
      color: "info",
      datos: {
        "Herramientas": [
          "Docker",
          "Jenkins",
          "Spring Cloud",
          "Azure",
          "AWS"
        ]
      }
    },
    {
      icon: "🧩",
      titulo: "Servidores de Aplicaciones",
      color: "secondary",
      datos: {
        "Servidores": ["JBoss (4, 6, 7, 7.4)", "Tomcat", "IBM WebSphere"]
      }
    },
    {
      icon: "💾",
      titulo: "Bases de Datos",
      color: "success",
      datos: {
        "Gestores": [
          "Oracle (11 – 19C)",
          "SQL Server",
          "MySQL",
          "MariaDB",
          "DB2 IBM",
          "Sybase",
          "AS400",
          "IBM (genérico)"
        ]
      }
    },
    {
      icon: "📦",
      titulo: "Gestión de Proyectos / Build",
      color: "warning",
      datos: {
        "Herramientas": ["Maven", "Gradle"]
      }
    }
  ];

  document.addEventListener("DOMContentLoaded", function() {

    const container = document.getElementById('techCards');

    tecnologias.forEach(tech => {
      const col = document.createElement('div');
      col.className = 'col-md-6';
  
      const card = document.createElement('div');
      card.className = 'card shadow-sm border-0';
  
      const header = document.createElement('div');
      header.className = `card-header bg-${tech.color} text-white`;
      header.innerHTML = `<h5 class="mb-0">${tech.icon} ${tech.titulo}</h5>`;
  
      const body = document.createElement('div');
      body.className = 'card-body';
  
      for (const [subtitulo, items] of Object.entries(tech.datos)) {
        const h6 = document.createElement('h6');
        h6.textContent = subtitulo;
        const ul = document.createElement('ul');
        items.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
        body.appendChild(h6);
        body.appendChild(ul);
      }
  
      card.appendChild(header);
      card.appendChild(body);
      col.appendChild(card);
      container.appendChild(col);
    });

  });



  