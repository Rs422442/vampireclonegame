import * as PIXI from "pixi.js";
import Game from "../Game";

export default class Shop extends PIXI.Container{
    constructor(_pixiApp: PIXI.Application){
        super();
        this.Shop_block(_pixiApp);
    };

    Shop_block(_pixiApp: PIXI.Application):PIXI.Container{
        let Exit_Sprite:PIXI.Sprite = new PIXI.Sprite(Game.GameLoading.getTexture("Exit_cross"));
        Exit_Sprite.anchor.x = 0.5;
		Exit_Sprite.anchor.y = 0.5;
        Exit_Sprite.scale.x = 0.25;
		Exit_Sprite.scale.y = 0.25;
        Exit_Sprite.interactive = true;
        Exit_Sprite.buttonMode = true;
        Exit_Sprite.visible = true;

        Exit_Sprite.on('click',()=>{
            console.warn("Exit_button work");
            _pixiApp.ticker.start();
        });

        let Block: PIXI.Container = new PIXI.Container();

        Block.width = 200;
        Block.height = 200;
        Block.x = window.innerWidth/2;
        Block.y = window.innerHeight/2;

        Block.addChild(Exit_Sprite);

        Exit_Sprite.x = Block.width - Exit_Sprite.width/2;
        Exit_Sprite.y = Block.height - Exit_Sprite.height/2;
               
        return Block;
    };
}