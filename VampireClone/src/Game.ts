import * as PIXI from 'pixi.js';
import AssetManager from './AssetsManager.ts';

export default class Game{

    resources: any;
    GameLoading = new AssetManager(); 
    Scene:any;  

    constructor(_pixiApp:PIXI.Application)
    {
        this.GameLoading.preload
        ([
            ["Coins","./assets/Coins.json"],
            ["Entityatlas","./assets/Entityatlas.json"],
            ["HealthBar","./assets/HealthBar.json"],
            ["terrain","./assets/terrain.json"],
            ["atlas","./assets/atlas.json"],
            ["GG_IDLE","./assets/GG_IDLE.json"]
        ]);

        this.GameLoading.promises[0].then(()=>
        {
            let buttonsprite = new PIXI.Sprite(AssetManager.getTexture("atlas", "block1"));
            _pixiApp.stage.addChild(buttonsprite);
            buttonsprite.anchor.set(0.5);
            buttonsprite.interactive = true;
            buttonsprite.buttonMode = true;
            //this.Scene = new StartGame(this.pixiApp, this.GameLoading);
        });            
    };
};