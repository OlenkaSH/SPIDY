class Game {

    setup() {
        this.player = new Player()
        this.background = new Background()
    }



    constructor () {
    
        this.backgroundImages

    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/1.png'), x: 0, speed: 0 },
            
        ]

    }




    draw() {
        console.log('game drowing')

        
    }
    
}