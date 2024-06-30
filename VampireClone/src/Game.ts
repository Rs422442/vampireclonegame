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
                ["Game_over_buttn","./assets/buttons/button_Game_over.jpg"],
                ["Pause_buttn","./assets/buttons/button_pause.png"],
                ["Start_new_game_buttn","./assets/buttons/button_start_game.jpg"],
                ["Start_buttn","./assets/buttons/button_start.png"],
                ["Stop_buttn","./assets/buttons/button_stop.png"],
                ["Salesman_iddle_1","./assets/salesman/salesman_iddle1.png"],
                ["Salesman_iddle_2","./assets/salesman/salesman_iddle2.png"],
                ["Salesman_iddle_3","./assets/salesman/salesman_iddle3.png"],
                ["Salesman_iddle_4","./assets/salesman/salesman_iddle4.png"],
                ["Salesman_shop_1","./assets/salesman/salesman_shop1.png"],
                ["Salesman_shop_2","./assets/salesman/salesman_shop2.png"]
                
            ]);
        this.buttoncreate(_pixiApp,"Start_new_game_buttn", 1,window.innerWidth/2, window.innerWidth/5 , true, true, true);
    };

    buttoncreate(_pixiApp:PIXI.Application, key:string, scale:number,setx:number, sety:number, buttonmode: boolean,interactive:boolean,visible:boolean)
    {
        let image = this.GameLoading.getTexture(key);
        let buttonsprite = new PIXI.Sprite(image);
        buttonsprite.anchor.set(0.5);
        buttonsprite.scale.set(scale);
        buttonsprite.interactive = interactive;
        buttonsprite.buttonMode = buttonmode;
        buttonsprite.visible = visible;
        buttonsprite.x = setx;
        buttonsprite.y = sety;
        buttonsprite.on('click',(event)=>{
            console.warn("buttonsprite create");
        });
        _pixiApp.stage.addChild(buttonsprite);

        
    };
};