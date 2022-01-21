export default class sceneSetFlowerChooseAccessory extends Phaser.Scene {
    constructor(){
        super('sceneSetFlowerChooseAccessory')
    }
    preload(){
        this.load.image('glasses', '../../assets/choose_accessory/glasses.png')
        this.load.image('necklace_set', '../../assets/choose_accessory/necklace_set.png')
        this.load.image('set/flower/glasses/girl', '../../assets/girl/set/flower/glasses/girl.png')
        this.load.image('set/flower/necklace/girl', '../../assets/girl/set/flower/necklace/girl.png')
        this.load.image('choose_accessory/progress', '../../assets/choose_accessory/progress.png')
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
        let text = this.add.text(sceneWidth/2-sceneHeight/10, sceneHeight/30, 'Choose your accessory', { fontFamily: '"Noto Serif", serif' })
        text.setScale(0)
        this.text = text

        let girl = this.add.image(sceneWidth/2, sceneHeight/2, 'set/flower/girl')
        girl.setScale(scaleObject)

        let glasses = this.add.sprite(sceneWidth*0.25, sceneHeight/1.3, 'glasses').setInteractive();
        glasses.setScale(0)
        this.glasses = glasses
        glasses.on('pointerdown', putGlasses)
        
        let necklace = this.add.sprite(sceneWidth*0.75, sceneHeight/1.3, 'necklace_set').setInteractive()
        necklace.setScale(0)
        this.necklace = necklace
        necklace.on('pointerdown', putNecklace)

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setScale(scaleObject*1.1)
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.setScale(scaleObject)
        });

        function putGlasses () {
            destroyElements()
            girl = objectScene.add.image(sceneWidth/2, sceneHeight/2, 'set/flower/glasses/girl')
            girl.setScale(scaleObject)
            addProgress()
            addChoose()
            startTimer()
            initialAccessory('glasses')
        }

        function putNecklace () {
            destroyElements()
            girl = objectScene.add.image(sceneWidth/2, sceneHeight/2, 'set/flower/necklace/girl')
            girl.setScale(scaleObject)
            addProgress()
            addChoose()
            startTimer()
            initialAccessory('necklace')
        }

        const destroyElements = () => {
            field_choose.destroy()
            text.destroy()
            girl.destroy()
            glasses.destroy()
            necklace.destroy()
        }
        const addProgress = () => {
            let progress = this.add.image(sceneWidth/2, sceneHeight/20, 'choose_accessory/progress')
            progress.setScale(scaleObject)
        }

        const addChoose = () => {
            glasses = this.add.sprite(sceneWidth*0.25, sceneHeight/1.3, 'glasses').setInteractive();
            glasses.setScale(scaleObject)
            this.glasses = glasses
            necklace = this.add.sprite(sceneWidth*0.75, sceneHeight/1.3, 'necklace_set').setInteractive()
            necklace.setScale(scaleObject)
            this.necklace = necklace
        }

        const startTimer = () => {
            this.timer = 50
            this.startScene = false
        }

        const initialAccessory = (name) => {
            this.accessory = name
        }
    }
    update(){
        if(this.timer>0) {
            if(this.startScene){
                let size = this.scaleObject*this.timer/50;
                this.timer+=1
                this.field_choose.setScale(size)
                this.text.setScale(size*3)
                this.glasses.setScale(size)
                this.necklace.setScale(size)
                if(this.timer==50) this.timer=-1 //обнулення
            }
            else {
                let size = this.scaleObject*this.timer/50;
                this.timer-=1
                this.glasses.setScale(size)
                this.necklace.setScale(size)
            }
        }
        else if(this.timer==0){
            if(this.accessory=='glasses') this.scene.start('sceneSetFlowerGlassesChooseBack');
            else this.scene.start('sceneSetFlowerNecklaceChooseBack');
        }
    }
}
