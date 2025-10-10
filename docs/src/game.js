let config = {
  type: Phaser.CANVAS,
  canvas: document.getElementById('juego'),
  width: 1000,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

// 2. Creación de la instancia del juego
let game = new Phaser.Game(config);

// Variable para guardar nuestro logo
let logo;

// 3. Funciones de la escena

function preload() {
  // 'this.load.image' carga una imagen.
  // El primer parámetro es una clave única ('logo') para referenciarla después.
  // El segundo es la ruta a la imagen. Usaremos una de las que ya tienes.
  this.load.image('logo', 'imgs/war-canvas.webp');
}

function create() {
  // 'this.add.image' crea un objeto de imagen en el juego.
  // Los dos primeros parámetros son las coordenadas x e y (el centro de la pantalla).
  // El tercer parámetro es la clave de la imagen que cargamos en preload.
  logo = this.add.image(400, 300, 'logo');
}

function update() {
  // Haremos que el logo gire lentamente.
  // La propiedad 'rotation' está en radianes.
  logo.rotation += 0.01;
}