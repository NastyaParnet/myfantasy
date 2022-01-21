export default class sceneSetStrawNecklaceChooseBack extends Phaser.Scene {
    constructor(){
        super('sceneSetStrawNecklaceChooseBack')
    }
    preload(){
        this.load.image('choose/beach', '../../assets/choose_back/beach.png')
        this.load.image('choose/sea', '../../assets/choose_back/sea.png')
    }
    create(){
        let sceneWidth = this.sys.game.canvas.width
        let sceneHeight = this.sys.game.canvas.height
        let scaleObject = sceneHeight/1800
        let objectScene = this
        this.scaleObject = scaleObject
        this.timer = 1

        this.input.setDefaultCursor('url(../../assets/hand.cur), pointer');

        this.add.image(sceneWidth/2, sceneHeight/2, 'badroom')

        let field_choose = this.add.image(sceneWidth/2, sceneHeight/20, 'field_choose')
        field_choose.setScale(0)
        this.field_choose = field_choose
        let text = this.add.text(sceneWidth/2-sceneHeight/10, sceneHeight/30, 'Choose your place', { fontFamily: '"Noto Serif", serif' })
        text.setScale(0)
        this.text = text

        let girl = this.add.image(sceneWidth/2, sceneHeight/2, 'set/straw/necklace/girl')
        girl.setScale(scaleObject)

        let beach = this.add.sprite(sceneWidth*0.25, sceneHeight/1.3, 'choose/beach').setInteractive();
        beach.setScale(0)
        this.beach = beach
        beach.on('pointerdown', putBeach)
        
        let sea = this.add.sprite(sceneWidth*0.75, sceneHeight/1.3, 'choose/sea').setInteractive()
        sea.setScale(0)
        this.sea = sea
        sea.on('pointerdown', putSea)

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setScale(scaleObject*1.1)
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.setScale(scaleObject)
        });

        function putBeach () {
            objectScene.timer=0
            initialAccessory('beach')
        }

        function putSea () {
            objectScene.timer=0
            initialAccessory('sea')
        }

        const initialAccessory = (name) => {
            this.accessory = name
        }
    }
    update(){
        if(this.timer>0) {
            let size = this.scaleObject*this.timer/50;
            this.timer+=1
            this.field_choose.setScale(size)
            this.text.setScale(size*3)
            this.beach.setScale(size)
            this.sea.setScale(size)
            if(this.timer==50) this.timer=-1 //обнулення
        }
        else if(this.timer==0){
            if(this.accessory=='beach') this.scene.start('sceneSetStrawNecklaceBeach');
            else this.scene.start('sceneSetStrawNecklaceSea');
        }
    }
}
