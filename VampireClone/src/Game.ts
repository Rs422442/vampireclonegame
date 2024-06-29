import * as PIXI from 'pixi.js';
import AssetManager from './AssetsManager.ts';

export default class Game{

    resources: any;
    GameLoading = new AssetManager(); 
    Scene:any;
    renderer = PIXI.autoDetectRenderer();

    constructor(_pixiApp:PIXI.Application)
    {
              
    };

    async loading(_pixiApp:PIXI.Application){
        await this.GameLoading.preload
            ([
                ["Coins","./assets/Coins.json"],
                ["Entityatlas","./assets/Entityatlas.json"],
                ["HealthBar","./assets/HealthBar.json"],
                ["terrain","./assets/terrain.json"],
                ["atlas","./assets/atlas.json"],
                ["GG_IDLE","./assets/GG_IDLE.json"]
            ]);
        this.buttoncreate(_pixiApp);
    };

    buttoncreate(_pixiApp:PIXI.Application)
    {
        /*var graphics = new PIXI.Graphics();
        graphics.lineStyle(2, 0xff0000, 1);
        graphics.beginFill(0x650A5A);
        graphics.drawRoundedRect(10, 10, 100, 100, 10);
        graphics.endFill();*/
        let image = this.GameLoading.getTexture("GG_IDLE", "sabrisv3-1 1.png");
        let buttonsprite = new PIXI.Sprite(image); //_pixiApp.renderer.generateTexture(graphics)
        buttonsprite.anchor.set(0.5);
        buttonsprite.scale.set(5);
        buttonsprite.interactive = true;
        buttonsprite.buttonMode = true;
        buttonsprite.visible = true;
        buttonsprite.x = window.innerWidth/2;
        buttonsprite.y = window.innerWidth/5;
        _pixiApp.stage.addChild(buttonsprite);

        console.warn("sprite create");
    };
};