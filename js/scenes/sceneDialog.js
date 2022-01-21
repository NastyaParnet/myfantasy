export default class sceneDialog extends Phaser.Scene {
    constructor(){
        super('sceneDialog')
    }
    preload(){
        this.load.image('badroom', '../../assets/back/badroom.png')
        this.load.image('boy', '../../assets/boy.png')
        this.load.image('dialog/girl', '../../assets/dialog/girl.png')
        this.load.image('replica_boy', '../../assets/dialog/replica_boy.png')
        this.load.image('replica_girl', '../../assets/dialog/replica_girl.png')
    }
    create(){
        let sceneWidth = this.sys.game.canvas.width
        let sceneHeight = this.sys.game.canvas.height
        this.centerX = sceneWidth/2
        if (sceneHeight>sceneWidth) this.sizeDialog = sceneHeight 
        else this.sizeDialog = sceneWidth

        let back = this.add.image(sceneWidth/2, sceneHeight/2, 'badroom')
        back.setTint(0x808080);

        this.boy = this.add.image(-200, sceneHeight/2, 'boy');
        this.boy.setScale(sceneHeight/1800);

        this.replica_boy = this.add.sprite(sceneWidth/2, sceneHeight/2, 'replica_boy')
        this.replica_boy.setScale(0)

        this.girl = this.add.image(sceneWidth+200, sceneHeight/2, 'dialog/girl')
        this.girl.setScale(sceneHeight/1800)

        this.replica_girl = this.add.sprite(sceneWidth/2, sceneHeight/2, 'replica_girl')
        this.replica_girl.setScale(0)

        this.stageScene = 1
        this.timerForStopMove = 0

        // this.tweens.add({
        //     targets: boy,
        //     duration: 2000, 
        //     alpha: {from: 0, to: 1},
        //     ease: 'Linear',
        //     repeat: 1,
        //     yoyo: true
        // });

        //1 - boy
        //2 - 
        //3 - girl

        //boy.destroy()

        // document.body.style.cursor = 'url("../../assets/hand.png"), default';

        // this.input.on('pointerup', function (pointer) {
        //     this.scene.start('sceneGirl');
        // }, this);


        // let timer = this.time.create(false);
        // timer.loop(2000, updateCounter, this);
        // timer.start()
    }
    update(){ 
        switch(this.stageScene){
            case 1:{ // the boy comes in
                if(this.boy.x<this.centerX) this.boy.x+=20;
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
            case 2:{ // the boy is standing
                if (this.timerForStopMove<100) this.timerForStopMove++;
                else {
                    this.stageScene=3;
                    this.timerForStopMove=0;
                    this.replica_boy.destroy()
                }
                break;
            }
            case 3:{ // the girl comes in and the boy comes out
                if(this.girl.x>this.centerX) {
                    this.girl.x-=20;
                    this.boy.x-=20;
                }
                else {
                    this.stageScene = 4;
                    this.replica_boy.setScale(0)
                    this.tweens.add({
                        targets: this.replica_girl,
                        duration: 1000,
                        scaleX: this.sizeDialog/2000,
                        scaleY: this.sizeDialog/2000,
                    })
                }
            }
            case 4:{ // the girl is standing
                if(this.timerForStopMove<200) this.timerForStopMove++;
                else this.scene.start('sceneChooseClothes');
            }
        }
    }
}