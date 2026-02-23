let ultimaCategoria = "todo";

let proyectosData = [
  {
    title: "Emaus",
    category: "web",
    label: "Diseño web",
    image: "img/emaus.png",
    video: "videos/emaus.mp4",
    description: "Proyecto de diseño UI realizado en Figma.",
    fullDescription:
      "Trabajo realizado en equipo para la materia de Diseño web. La consigna consistía en elegir una organización solidaria y desarrollar una propuesta de diseño digital que respondiera a sus necesidades.",
  },
  {
    title: "Feli Pastelería",
    category: "web",
    label: "Diseño web",
    image: "img/feli.png",
    video: "videos/feli.mp4",
    description: "Proyecto de diseño UI realizado en Figma.",
    fullDescription:
      "Feli Pastelería es un proyecto desarrollado en equipo para la materia de Diseño Web. La consigna consistía en diseñar una página web sobre una temática a elección, abordando estructura, organización de contenidos y experiencia de usuario. Elegimos crear el prototipo digital de una pastelería, desarrollando la propuesta íntegramente en Figma.",
  },
  {
    title: "Prune",
    category: "code",
    label: "Programación",
    image: "img/prune.png",
    video: "videos/prune.mp4",
    description: "Sitio web desarrollado en Visual Studio.",
    fullDescription:
      "Prune es un proyecto desarrollado para la materia de Programación, donde llevé a código una propuesta web utilizando HTML, CSS y JavaScript. El objetivo fue construir una página funcional aplicando estructura semántica, estilos personalizados y lógica interactiva. Se trabajó en la maquetación y la incorporación de interacciones dinámicas para mejorar la experiencia de usuario.",
  },
  {
    title: "Proyecto Processing",
    category: "experimental",
    label: "Taller arte digital",
    image: "img/processing.png",
    videos: ["videos/processing1.mp4", "videos/processing2.mp4"],
    description: "Experimento visual con código creativo.",
    fullDescription:
      "En el Taller de Arte Digital trabajamos con Processing como herramienta para la creación visual a través de código. Exploramos programación aplicada al arte generativo, experimentando con formas, movimiento e interacción. También en Diseño Digital 6 desarrollé proyectos en After Effects, trabajando animación, composición y motion graphics.",
  },
  {
    title: "Video Animado",
    category: "motion",
    label: "Diseño y comunicación visual",
    image: "img/ratatuille.jpg",
    video: "videos/ratatuile.mp4",
    description: "Animación hecha a mano.",
    fullDescription:
      "Proyecto final de Modelado 3D: anuncio publicitario de un perfume utilizando Cinema 4D. Incluyó modelado, materiales, iluminación y animación.",
  },
  {
    title: "After Effects",
    category: "motion",
    label: "Diseño digital 6",
    image: "img/ae.jpg",
    video: "videos/after.mp4",
    description: "Motion graphics realizados en clase.",
    fullDescription:
      "En la materia Diseño Digital 6 desarrollé una serie de proyectos utilizando After Effects como herramienta principal. A lo largo de la cursada trabajamos animación, composición, tipografía en movimiento y edición audiovisual, explorando recursos como keyframes, máscaras, efectos , renders y trackings. Los trabajos reflejan un proceso de experimentación técnica y búsqueda estética dentro del campo del motion graphics.",
  },
  {
    title: "Proyecto 3D",
    category: "modeling",
    label: "Modelado 3D",
    image: "img/3d.jpg",
    video: "videos/perfume.mp4",
    description: "Modelado y render en 3D.",
    fullDescription:
      "Como proyecto final de la materia Modelado 3D, desarrollé un pequeño anuncio publicitario de un perfume utilizando Cinema 4D, software que aprendimos a lo largo de la cursada. El trabajo integró modelado, materiales, iluminación y animación.",
  },
{
  title: "Vectora",
  category: "branding",
  label: "D.I.C.W",
  image: "img/vectora.png",
  images: [
    "img/vectora-mockup1.jpg",
    "img/vectora-mockup2.jpg"
  ],
  description: "Identidad visual completa.",
  fullDescription: "En la materia Diseño de Identidad Corporativa para Web desarrollé un estudio de diseño ficticio llamado Vectora. La consigna consistía en construir una marca desde cero, definiendo concepto, personalidad, sistema visual y aplicaciones digitales. Se trabajó el desarrollo integral del branding, incluyendo logotipo, paleta cromática, tipografías, lineamientos gráficos y su adaptación a entornos web."
},
{
  title: "La Tavola",
  category: "branding",
  label: "D.I.C.W",
  image: "img/tavola.png",
  images: [
    "img/tavola-mockup1.png",
    "img/tavola-mockup2.png"
  ],
  description: "Sistema gráfico y aplicaciones.",
  fullDescription: "En la materia Diseño de Identidad Corporativa para Web se nos propuso el desarrollo de un evento desde cero, incluyendo toda su identidad visual. Elegí crear un evento gastronómico de comida italiana llamado La Tavola, planteado como una experiencia de cuatro días donde cada jornada estaba dedicada a una pasta diferente."
}
];

let navItems = document.querySelectorAll(".nav-item");
let content = document.getElementById("content");

function renderSection(section) {
  content.innerHTML = "";

  if (section === "about") {
  content.innerHTML = `
    <div class="seccion-sobremi">
      <div class="sobremi-izq">
        <img src="img/foto-mia.jpg" alt="Foto de perfil">
      </div>
      <div class="sobremi-der">
        <h1>María José Valiño</h1>
        <h3>Estudiante de Diseño Multimedia · 3er año</h3>

        <p>
          Soy María José Valiño, estudiante en tercer año de Diseño Multimedia.
          Me encanta experimentar y salir un poco de lo predecible.
          Me apasiona el motion graphic y todo lo que implique movimiento y ritmo.
        </p>

        <p>
          Siempre estoy probando cosas nuevas y buscando formas distintas
          de encarar cada proyecto.
        </p>

        <div class="skills">
          <h4>Skills</h4>
          <div class="lista-skills">
            <span>Premiere Pro</span>
            <span>After Effects</span>
            <span>Figma</span>
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>Processing</span>
            <span>Cinema 4D</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
          </div>
        </div>

      </div>
    </div>
  `;
}

  if (section === "projects") {
    renderVistaProyectos();
  }

  if (section === "contact") {
    content.innerHTML = `
    <div class="seccion-contacto">

      <h1>Hablemos</h1>

      <div class="estado">
        <span class="estado-punto"></span>
        Disponible
      </div>

      <p class="texto-contacto">
        Me interesa trabajar en proyectos vinculados a motion,
        identidad visual y experiencias digitales.
        Si tenés una idea, podemos desarrollarla juntas.
      </p>

      <div class="cards-contacto">

        <div class="contact-caja">
    <h3>Email</h3>
    <span>mariajosevalino1@gmail.com</span>
  </div>

        <a href="https://www.linkedin.com/in/maria-jose-vali%C3%B1o-882601336/" 
   target="_blank" 
   class="contact-caja">
  <h3>LinkedIn</h3>
  <span>Ver perfil profesional</span>
</a>

      </div>

    </div>
  `;
  }
}

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
    let section = this.getAttribute("data-section");
    renderSection(section);
  });
});

renderSection("about");
function renderVistaProyectos() {
  content.innerHTML = `
    <h1>Proyectos</h1>
    <div class="vista-compu"></div>
  `;

  let desktopView = document.querySelector(".vista-compu");

  let categorias = [
    { name: "Todo", filter: "todo" },
    { name: "Diseño web", filter: "web" },
    { name: "Programación", filter: "code" },
    { name: "Arte digital", filter: "experimental" },
    { name: "Motion", filter: "motion" },
    { name: "3D", filter: "modeling" },
    { name: "Branding", filter: "branding" },
  ];

  categorias.forEach((cat) => {
    let carpeta = document.createElement("div");
    carpeta.classList.add("item-compu");
    carpeta.setAttribute("data-filter", cat.filter);

    carpeta.innerHTML = `
      <div class="contenedor-carpeta">
        <div class="carpeta">
          <div class="parte-arriba">
            <div class="tip"></div>
            <div class="cover"></div>
          </div>
          <div class="parte-abajo cover"></div>
        </div>
      </div>
      <span>${cat.name}</span>
    `;

    carpeta.addEventListener("click", (e) => {
      abrirCarpeta(cat.filter, e);
    });

    desktopView.appendChild(carpeta);
  });
}

function abrirCarpeta(filter, event) {
  ultimaCategoria = filter;

 let carpeta = event.currentTarget;
 let front = carpeta.querySelector(".parte-arriba");

  front.style.transform = "rotateX(-75deg) skewX(20deg)";

  setTimeout(() => {
    let desktopView = document.querySelector(".vista-compu");

    if (desktopView) {
      desktopView.style.opacity = "0";
      desktopView.style.transform = "translateX(-40px)";
    }

    setTimeout(() => {
      renderProyectos(filter);
    }, 400);

  }, 250);
}

function abrirProyecto(project) {

  let mediaSection = "";
  if (project.images && project.images.length > 0) {
    mediaSection = `
      <div class="grid-imagen">
        ${project.images.map(img => `
          <img src="${img}" alt="${project.title}">
        `).join("")}
      </div>
    `;
  }

  else if (project.videos && project.videos.length > 0) {
    mediaSection = `
      <div class="video-proyecto-grid">
        ${project.videos.map(v => `
          <video src="${v}" controls autoplay muted loop></video>
        `).join("")}
      </div>
    `;
  }
  else if (project.video) {
    mediaSection = `
      <div class="video-proyecto">
        <video src="${project.video}" controls autoplay muted></video>
      </div>
    `;
  }

  content.innerHTML = `
    <button class="btn-volver">Volver</button>

    <div class="detalle-proyecto">
      ${mediaSection}

      <div class="info-proyecto">
        <h1>${project.title}</h1>
        <h4>${project.label}</h4>
        <p>${project.fullDescription}</p>
      </div>
    </div>
  `;

  document.querySelector(".btn-volver").addEventListener("click", () => {
    renderProyectos(ultimaCategoria);
  });
}

function renderProyectos(filter) {
  content.innerHTML = `
    <div class="breadcrumb">
      <span class="breadcrumb-home">Proyectos</span> >
      <span class="breadcrumb-actual">${filter}</span>
    </div>
    <button class="btn-volver">Volver</button>
    <div class="proyectos-grid"></div>
  `;

  document
    .querySelector(".breadcrumb-home")
    .addEventListener("click", () => {
      renderVistaProyectos();
    });

  let grid = document.querySelector(".proyectos-grid");

  let filtrados =
    filter === "todo"
      ? proyectosData
      : proyectosData.filter(
        (p) => p.category === filter
      );

  filtrados.forEach((project) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-arriba"
        style="background-image: url('${project.image}')">
      </div>
      <div class="card-abajo">
        <div class="card-content">
          <span class="titulo-card">
            ${project.title}
          </span>
          <p class="card-txt">
            ${project.description}
          </p>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      abrirProyecto(project);
    });

    grid.appendChild(card);
  });

  document
    .querySelector(".btn-volver")
    .addEventListener("click", () => {
      let grid =
        document.querySelector(".proyectos-grid");

      grid.style.transition = "0.4s ease";
      grid.style.transform = "translateX(50px)";
      grid.style.opacity = "0";

      setTimeout(() => {
        renderVistaProyectos();
      }, 400);
    });
}