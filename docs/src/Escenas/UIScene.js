export default class UIScene extends Phaser.Scene {
    constructor() {
        super({ key: 'UIScene', active: true }); //active=true para que la escena siempre persista
    }

    create() {
        if (!this.scene.isActive("Menu")) {
            this.scene.launch("Menu");
        }
        // Mantener la escena encima de las demás


        // ESCAPE sale del fullscreen
        this.scale.on('leavefullscreen', () => {
            this.showLayout();
        });

        this.input.keyboard.on('keydown-ESC', () => {
            if (this.scale.isFullscreen) {
                this.exitFullscreen();   // Salir
            } else {
                this.enterFullscreen();  // Entrar
            }
        });
    }

    enterFullscreen() {
        this.hideLayout();
        this.scale.startFullscreen();
    }

    exitFullscreen() {
        this.scale.stopFullscreen();
        this.showLayout();
    }

    hideLayout() {
        document.querySelector('header').style.display = 'none';
        document.querySelector('footer').style.display = 'none';
    }

    showLayout() {
        document.querySelector('header').style.display = '';
        document.querySelector('footer').style.display = '';
    }
}
