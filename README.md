<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Cambios Climáticos</title>
    <link rel="stylesheet" href="dise.css" />
  </head>
  <body>
    <!-- lo que me ayuda a crear el fondo -->
    <canvas id="canvas"></canvas>

    <header>
      <p></p>
      <h1>
        <img src="fts/portada.jpeg" class="imagen-inline" />
        Cambios Climáticos
      </h1>
    </header>

    <nav class="navbar">
      <ul>
        <li>
          <button class="btn-nav">
            <a href="causas.html" class="a">causas</a>
          </button>
        </li>
        <li>
          <button class="btn-nav">
            <a href="conse.html" class="a">Conciencias</a>
          </button>
        </li>
        <li>
          <button class="btn-nav">
            <a href="impacto.html" class="a">Impactos</a>
          </button>
        </li>
        <li>
          <button class="btn-nav">
            <a href="solciones.html" class="a">Soluciones</a>
          </button>
        </li>
      </ul>
    </nav>

    <div class="contenedor">
      <article class="articulo">
        <h2>¿Qué es el cambio climático?</h2>
        El cambio climático se refiere a los cambios a largo plazo de las
        temperaturas y los patrones climáticos. Estos cambios pueden ser
        naturales, debido a variaciones en la actividad solar o erupciones
        volcánicas grandes. Pero desde el siglo XIX, las actividades humanas han
        sido el principal motor del cambio climático, debido principalmente a la
        quema de combustibles fósiles como el carbón, el petróleo y el gas.
        <h2><img src="fts/calen.jpeg" class="contenedor" /></h2>
      </article>
      <aside class="programada">
        <h3>⚡ "Conéctate con el futuro hoy"</h3>
        <p>La innovación está en tus manos.
✅ Herramientas digitales de última generación
✅ Seguridad garantizada
✅ Diseño moderno y fácil de usar</p>
      </aside>
    </div>

    <div class="contenedor">
      <article class="articulo">
        <h2>El calentamiento global</h2>
        Se refiere al aumento en la temperatura promedio global de la Tierra,
        que se produce principalmente debido a la acumulación de gases de efecto
        invernadero en la atmósfera terrestre. Esto se traduce en el aumento de
        la temperatura del aire, el aumento del nivel del mar, el aumento de las
        precipitaciones, el cambio en los patrones de tormentas y el aumento de
        temperaturas extremas.
        <h2><img src="fts/cl1.jpeg" class="contenedor" /></h2>
      </article>
      <aside class="programada">
        <h3>👗 "Viste tu mejor versión"</h3>
        <p>La moda no es solo ropa, es actitud.
✨ Estilo único
✨ Tendencias exclusivas
✨ Calidad que brilla</p>
      </aside>
    </div>

    <div class="contenedor">
      <article class="articulo">
        <h2>variabilidad climática</h2>
        Esto se refiere a los cambios en los patrones climáticos a corto plazo,
        como la variación de las temperaturas y las precipitaciones. Esto puede
        ser causado por factores naturales, como el movimiento de las placas
        tectónicas, o por factores humanos, como la quema de combustibles
        fósiles.
        <h2><img src="fts/3.jpeg" class="contenedor" /></h2>
      </article>
      <aside class="programada">
        <h3>
          🍔 "El sabor que estabas esperando"
         
        </h3>

        <p>Deliciosas hamburguesas hechas con pasión.
🔥 Ingredientes frescos
🔥 Preparación al momento
🔥 Sabor irresistible</p>
      </aside>
    </div>

    <div class="contenedor">
      <article class="articulo">
        <h2>
          Los cambios climáticos tienen un gran impacto en el medio ambiente
        </h2>
        Esto incluye el calentamiento de los océanos, el aumento del nivel del
        mar, el aumento de la sequía y la erosión de la costa. También se espera
        que los cambios climáticos afecten la agricultura, la salud humana y los
        ecosistemas terrestres y marinos
        <h2><img src="fts/cl2.jpeg" class="contenedor" /></h2>
      </article>
      <aside class="programada">
        <h3>
💚 "Cuida tu cuerpo, cuida tu vida"</h3>
        <p>Tu bienestar es lo más importante.
🏃 Planes de ejercicio personalizados
🥗 Alimentación saludable
🧘 Bienestar físico y mental</p>
      </aside>
    </div>

    <title>Tipos de Cambios Climáticos</title>

    <div class="contenedor">
      <article class="articulo">
        <h2>Aumento de las temperaturas en tierra</h2>
        Los registros de estaciones meteorológicas alrededor del mundo
        demuestran un incremento constante en las temperaturas promedio de la
        superficie terrestre. Esto ha generado olas de calor más intensas y
        prolongadas, así como sequías más severas que afectan directamente a los
        ecosistemas, la salud humana y la producción agrícola.
        <h2><img src="fts/2.jpeg" class="contenedor" /></h2>
      </article>
      <aside class="programada">
        <h3>✈️ "Tu próxima aventura te espera"</h3>
        <p>Explora el mundo como nunca antes.
🌴 Paquetes exclusivos
🏔️ Destinos increíbles
💼 Viaja fácil y seguro</p>
      </aside>
    </div>

    <footer class="pie">21/09/25</footer>

    <!-- Script de partículas y temas -->
    <script>
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let particles = [];

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 4 + 1;
          this.speedX = Math.random() * 1 - 0.5;
          this.speedY = Math.random() * 1 - 0.5;
          this.color = Math.random() > 0.5 ? "#4CAF50" : "#2196F3";
        }
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }

      function init() {
        particles = [];
        for (let i = 0; i < 150; i++) {
          particles.push(new Particle());
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => {
          p.update();
          p.draw();
        });
        requestAnimationFrame(animate);
      }

      init();
      animate();

      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      });
    </script>
  </body>
</html>
