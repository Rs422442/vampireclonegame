import * as PIXI from 'pixi.js';
import AssetManager from './AssetsManager.ts';

export default class Game{

    resources: any;
    pixiApp:PIXI.Application;
    GameLoading = new AssetManager(); 
    Scene:any;  

    constructor(_pixiApp:PIXI.Application){
        this.pixiApp = _pixiApp;
        this.GameLoading.preload ([
            ["Coins","./assets/Coins.json"],
            ["Entityatlas","./assets/Entityatlas.json"],
            ["HealthBar","./assets/HealthBar.json"],
            ["terrain","./assets/terrain.json"],
            ["atlas","./assets/atlas.json"],
            ["GG_IDLE","./assets/GG_IDLE.json"]
        ])

        this.GameLoading.promises[0].then(()=>{
            let image = AssetManager.getTexture("GG_IDLE", "sabrisv3-1 1.png");
            let sprite = new PIXI.Sprite(image);
            this.pixiApp.stage.addChild(sprite);
        })    

        //this.Scene = new StartGame(this.pixiApp, this.GameLoading);    
    }
}