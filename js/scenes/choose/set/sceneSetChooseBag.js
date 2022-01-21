export default class sceneSetChooseBag extends Phaser.Scene {
    constructor(){
        super('sceneSetChooseBag')
    }
    preload(){
        this.load.image('straw', '../../assets/choose_bag/straw.png')
        this.load.image('flower', '../../assets/choose_bag/flower.png')
        this.load.image('set/straw/girl', '../../assets/girl/set/straw/girl.png')
        this.load.image('set/flower/girl', '../../assets/girl/set/flower/girl.png')
        this.load.image('choose_bag/progress', '../../assets/choose_bag/progress.png')
    }
    create(){
        let sceneWidth = this.sys.game.canvas.width
        let sceneHeight = this.sys.game.canvas.height
        let scaleObject = sceneHeight/1800
        let objectScene = this
        this.scaleObject = scaleObject
        this.timer = 1
        this.startScene = true

        this.input.setDefaultCursor('url(../../assets/hand.cur), pointer');

        this.add.image(sceneWidth/2, sceneHeight/2, 'badroom')

        let field_choose = this.add.image(sceneWidth/2, sceneHeight/20, 'field_choose')
        field_choose.setScale(0)
        this.field_choose = field_choose
        let text = this.add.text(sceneWidth/2-sceneHeight/10, sceneHeight/30, 'Choose your bag', { fontFamily: '"Noto Serif", serif' })
        text.setScale(0)
        this.text = text

        let girl = this.add.image(sceneWidth/2, sceneHeight/2, 'set/girl')
        girl.setScale(scaleObject)

        let straw = this.add.sprite(sceneWidth*0.25, sceneHeight/1.3, 'straw').setInteractive();
        straw.setScale(0)
        this.straw = straw
        straw.on('pointerdown', putStraw)
        
        let flower = this.add.sprite(sceneWidth*0.75, sceneHeight/1.3, 'flower').setInteractive()
        flower.setScale(0)
        this.flower = flower
        flower.on('pointerdown', putFlower)

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setScale(scaleObject*1.1)
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.setScale(scaleObject)
        });

        function putStraw () {
            destroyElements()
            girl = objectScene.add.image(sceneWidth/2, sceneHeight/2, 'set/straw/girl')
            girl.setScale(scaleObject)
            addProgress()
            addChoose()
            startTimer()
            initialBag('straw')
        }

        function putFlower () {
            destroyElements()
            girl = objectScene.add.image(sceneWidth/2, sceneHeight/2, 'set/flower/girl')
            girl.setScale(scaleObject)
            addProgress()
            addChoose()
            startTimer()
            initialBag('flower')
        }

        const destroyElements = () => {
            field_choose.destroy()
            text.destroy()
            girl.destroy()
            straw.destroy()
            flower.destroy()
        }
        const addProgress = () => {
            let progress = this.add.image(sceneWidth/2, sceneHeight/20, 'choose_bag/progress')
            progress.setScale(scaleObject)
        }

        const addChoose = () => {
            straw = this.add.sprite(sceneWidth*0.25, sceneHeight/1.3, 'straw').setInteractive();
            straw.setScale(scaleObject)
            this.straw = straw
            flower = this.add.sprite(sceneWidth*0.75, sceneHeight/1.3, 'flower').setInteractive()
            flower.setScale(scaleObject)
            this.flower = flower
        }

        const startTimer = () => {
            this.timer = 50
            this.startScene = false
        }

        const initialBag = (name) => {
            this.bag = name
        }
    }
    update(){
        if(this.timer>0) {
            if(this.startScene){
                let size = this.scaleObject*this.timer/50;
                this.timer+=1
                this.field_choose.setScale(size)
                this.text.setScale(size*3)
                this.straw.setScale(size)
                this.flower.setScale(size)
                if(this.timer==50) this.timer=-1 //обнулення
            }
            else {
                let size = this.scaleObject*this.timer/50;
                this.timer-=1
                this.straw.setScale(size)
                this.flower.setScale(size)
            }
        }
        else if(this.timer==0){
            if(this.bag=='straw') this.scene.start('sceneSetStrawChooseAccessory');
            else this.scene.start('sceneSetFlowerChooseAccessory');
        }
    }
}
