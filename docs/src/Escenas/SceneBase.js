export default class SceneBase extends Phaser.Scene {
    constructor(key) {
        super(key);
    }

    create(...args) {
        super.create && super.create(...args);

        // Configurar tecla ESC para fullscreen toggle
        const esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        esc.on('down', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
            } else {
                this.scale.startFullscreen();
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
