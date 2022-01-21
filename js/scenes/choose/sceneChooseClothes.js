export default class sceneChooseClothes extends Phaser.Scene {
    constructor(){
        super('sceneChooseClothes')
    }
    preload(){
        this.load.image('girl', '../../assets/girl/girl.png')
        this.load.image('dress/girl', '../../assets/girl/dress/girl.png')
        this.load.image('set/girl', '../../assets/girl/set/girl.png')
        this.load.image('dress', '../../assets/choose_clothes/dress.png')
        this.load.image('set', '../../assets/choose_clothes/set.png')
        this.load.image('field_choose', '../../assets/field_choose.png')
        this.load.image('choose_clothes/progress', '../../assets/choose_clothes/progress.png')
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
        let text = this.add.text(sceneWidth/2-sceneHeight/10, sceneHeight/30, 'Choose your dress', { fontFamily: '"Noto Serif", serif' })
        text.setScale(0)
        this.text = text

        let girl = this.add.image(sceneWidth/2, sceneHeight/2, 'girl')
        girl.setScale(scaleObject)

        let dress = this.add.sprite(sceneWidth*0.25, sceneHeight/1.3, 'dress').setInteractive();
        dress.setScale(scaleObject)
        this.dress = dress
        dress.on('pointerdown', putDress)
        
        let set = this.add.sprite(sceneWidth*0.75, sceneHeight/1.3, 'set').setInteractive()
        set.setScale(scaleObject)
        this.set = set
        set.on('pointerdown', putSet)

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setScale(scaleObject*1.1)
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.setScale(scaleObject)
        });

        function putDress () {
            destroyElements()
            girl = objectScene.add.image(sceneWidth/2, sceneHeight/2, 'dress/girl')
            girl.setScale(scaleObject)
            addProgress()
            addChoose()
            startTimer()
            initialClothes('dress')
        }

        function putSet () {
            destroyElements()
            girl = objectScene.add.image(sceneWidth/2, sceneHeight/2, 'set/girl')
            girl.setScale(scaleObject)
            addProgress()
            addChoose()
            startTimer()
            initialClothes('set')
        }

        const destroyElements = () => {
            field_choose.destroy()
            text.destroy()
            girl.destroy()
            dress.destroy()
            set.destroy()
        }
        const addProgress = () => {
            let progress = this.add.image(sceneWidth/2, sceneHeight/20, 'choose_clothes/progress')
            progress.setScale(scaleObject)
        }

        const addChoose = () => {
            dress = this.add.sprite(sceneWidth*0.25, sceneHeight/1.3, 'dress').setInteractive();
            dress.setScale(scaleObject)
            this.dress = dress
            set = this.add.sprite(sceneWidth*0.75, sceneHeight/1.3, 'set').setInteractive()
            set.setScale(scaleObject)
            this.set = set
        }

        const startTimer = () => {
            this.timer = 50
            this.startScene = false
        }

        const initialClothes = (name) => {
            this.clothes = name
        }
    }
    update(){
        if(this.timer>0) {
            if(this.startScene){
                let size = this.scaleObject*this.timer/50
                this.timer+=1
                this.field_choose.setScale(size)
                this.text.setScale(size*3)
                this.dress.setScale(size)
                this.set.setScale(size)
                if(this.timer==50) this.timer=-1
            }
            else {
                let size = this.scaleObject*this.timer/50;
                this.timer-=1
                this.dress.setScale(size)
                this.set.setScale(size)
            }
        }
        else if(this.timer==0){
            if(this.clothes=='dress') this.scene.start('sceneDressChooseBag');
            else this.scene.start('sceneSetChooseBag');
        }
    }
}
