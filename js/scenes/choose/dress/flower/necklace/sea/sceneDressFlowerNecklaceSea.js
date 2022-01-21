export default class sceneDressFlowerNecklaceSea extends Phaser.Scene {
    constructor(){
        super('sceneDressFlowerNecklaceSea')
    }
    preload(){
        this.load.image('sea', '../../assets/back/sea.png')
        this.load.image('boy', '../../assets/boy.png')
        this.load.image('finish/replica', '../../assets/finish/replica.png')
        this.load.image('button', '../../assets/finish/button.png')
    }
    create(){
        let sceneWidth = this.sys.game.canvas.width
        let sceneHeight = this.sys.game.canvas.height
        if (sceneHeight>sceneWidth) this.sizeDialog = sceneHeight 
        else this.sizeDialog = sceneWidth
        this.sceneWidth = sceneWidth
        this.sceneHeight = sceneHeight

        this.add.image(sceneWidth/2, sceneHeight/2, 'sea')

        this.boy = this.add.image(sceneWidth+200, sceneHeight/2, 'boy');
        this.boy.setScale(sceneHeight/1800);

        this.girl = this.add.image(-200, sceneHeight/1.9, 'dress/flower/necklace/girl')
        this.girl.setScale(sceneHeight/1800)

        this.replica_boy = this.add.sprite(sceneWidth/2, sceneHeight/2, 'finish/replica')
        this.replica_boy.setScale(0)

        this.stageScene = 1
        this.timerForStopMove = 0
    }
    update(){ 
        switch(this.stageScene){
            case 1:{ // the boy and girl comes in
                if(this.boy.x>this.sceneWidth*0.7) {
                    this.boy.x-=20;
                    this.girl.x+=20;
                }
                else {
                    this.stageScene=2;
                    this.tweens.add({
                        targets: this.replica_boy,
                        duration: 1000,
                        scaleX: this.sizeDialog/2000,
                        scaleY: this.sizeDialog/2000,
                    })
                }
                break;
            }
            case 2:{ // scene is stop
                if (this.timerForStopMove<100) this.timerForStopMove++;
                else {
                    this.timerForStopMove=0;
                    this.replica_boy.destroy()
                    let button = this.add.image(this.sceneWidth/2, this.sceneHeight/1.3, 'button')
                    button.setScale(this.sizeDialog/2000)
                }
            }
        }
    }
}