import sceneChooseClothes from "./scenes/choose/sceneChooseClothes.js"
import sceneDialog from "./scenes/sceneDialog.js"
import sceneDressChooseBag from "./scenes/choose/dress/sceneDressChooseBag.js"
import sceneDressStrawChooseAccessory from "./scenes/choose/dress/straw/sceneDressStrawChooseAccessory.js"
import sceneDressStrawGlassesChooseBack from "./scenes/choose/dress/straw/glasses/sceneDressStrawGlassesChooseBack.js"
import sceneDressStrawGlassesBeach from "./scenes/choose/dress/straw/glasses/beach/sceneDressStrawGlassesBeach.js"
import sceneDressStrawGlassesSea from "./scenes/choose/dress/straw/glasses/sea/sceneDressStrawGlassesSea.js"
import sceneDressStrawNecklaceChooseBack from "./scenes/choose/dress/straw/necklace/sceneDressStrawNecklaceChooseBack.js"
import sceneDressStrawNecklaceSea from "./scenes/choose/dress/straw/necklace/sea/sceneDressStrawNecklaceSea.js"
import sceneDressStrawNecklaceBeach from "./scenes/choose/dress/straw/necklace/beach/sceneDressStrawNecklaceBeach.js"
import sceneDressFlowerChooseAccessory from "./scenes/choose/dress/flower/sceneDressFlowerChooseAccessory.js"
import sceneDressFlowerGlassesChooseBack from "./scenes/choose/dress/flower/glasses/sceneDressFlowerGlassesChooseBack.js"
import sceneDressFlowerGlassesBeach from "./scenes/choose/dress/flower/glasses/beach/sceneDressFlowerGlassesBeach.js"
import sceneDressFlowerGlassesSea from "./scenes/choose/dress/flower/glasses/sea/sceneDressFlowerGlassesSea.js"
import sceneDressFlowerNecklaceChooseBack from "./scenes/choose/dress/flower/necklace/sceneDressFlowerNecklaceChooseBack.js"
import sceneDressFlowerNecklaceBeach from "./scenes/choose/dress/flower/necklace/beach/sceneDressFlowerNecklaceBeach.js"
import sceneDressFlowerNecklaceSea from "./scenes/choose/dress/flower/necklace/sea/sceneDressFlowerNecklaceSea.js"
import sceneSetChooseBag from "./scenes/choose/set/sceneSetChooseBag.js"
import sceneSetStrawChooseAccessory from "./scenes/choose/set/straw/sceneSetStrawChooseAccessory.js"
import sceneSetStrawGlassesChooseBack from "./scenes/choose/set/straw/glasses/sceneSetStrawGlassesChooseBack.js"
import sceneSetStrawGlassesBeach from "./scenes/choose/set/straw/glasses/beach/sceneSetStrawGlassesBeach.js"
import sceneSetStrawGlassesSea from "./scenes/choose/set/straw/glasses/sea/sceneSetStrawGlassesSea.js"
import sceneSetStrawNecklaceChooseBack from "./scenes/choose/set/straw/necklace/sceneSetStrawNecklaceChooseBack.js"
import sceneSetStrawNecklaceSea from "./scenes/choose/set/straw/necklace/sea/sceneSetStrawNecklaceSea.js"
import sceneSetStrawNecklaceBeach from "./scenes/choose/set/straw/necklace/beach/sceneSetStrawNecklaceBeach.js"
import sceneSetFlowerChooseAccessory from "./scenes/choose/set/flower/sceneSetFlowerChooseAccessory.js"
import sceneSetFlowerGlassesChooseBack from "./scenes/choose/set/flower/glasses/sceneSetFlowerGlassesChooseBack.js"
import sceneSetFlowerGlassesBeach from "./scenes/choose/set/flower/glasses/beach/sceneSetFlowerGlassesBeach.js"
import sceneSetFlowerGlassesSea from "./scenes/choose/set/flower/glasses/sea/sceneSetFlowerGlassesSea.js"
import sceneSetFlowerNecklaceChooseBack from "./scenes/choose/set/flower/necklace/sceneSetFlowerNecklaceChooseBack.js"
import sceneSetFlowerNecklaceBeach from "./scenes/choose/set/flower/necklace/beach/sceneSetFlowerNecklaceBeach.js"
import sceneSetFlowerNecklaceSea from "./scenes/choose/set/flower/necklace/sea/sceneSetFlowerNecklaceSea.js"



const config = {
    type: Phaser.AUTO,
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: true,
        }
    },
    scene: [
        sceneDialog,
        sceneChooseClothes, 
        sceneDressChooseBag,
        sceneDressStrawChooseAccessory,
        sceneDressStrawGlassesChooseBack,
        sceneDressStrawGlassesBeach,
        sceneDressStrawGlassesSea,
        sceneDressStrawNecklaceChooseBack,
        sceneDressStrawNecklaceBeach,
        sceneDressStrawNecklaceSea,
        sceneDressFlowerChooseAccessory,
        sceneDressFlowerGlassesChooseBack,
        sceneDressFlowerGlassesBeach,
        sceneDressFlowerGlassesSea,
        sceneDressFlowerNecklaceChooseBack,
        sceneDressFlowerNecklaceBeach,
        sceneDressFlowerNecklaceSea,
        sceneSetChooseBag,
        sceneSetStrawChooseAccessory,
        sceneSetStrawGlassesChooseBack,
        sceneSetStrawGlassesBeach,
        sceneSetStrawGlassesSea,
        sceneSetStrawNecklaceChooseBack,
        sceneSetStrawNecklaceBeach,
        sceneSetStrawNecklaceSea,
        sceneSetFlowerChooseAccessory,
        sceneSetFlowerGlassesChooseBack,
        sceneSetFlowerGlassesBeach,
        sceneSetFlowerGlassesSea,
        sceneSetFlowerNecklaceChooseBack,
        sceneSetFlowerNecklaceBeach,
        sceneSetFlowerNecklaceSea
    ]
}

new Phaser.Game(config)