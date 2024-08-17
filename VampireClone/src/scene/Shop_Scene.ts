import * as PIXI from "pixi.js";
import Game from "../Game";

export default class Shop extends PIXI.Container{
    constructor(_pixiApp: PIXI.Application){
        super();
        this.Shop_block(_pixiApp);
    };

    Shop_block(_pixiApp: PIXI.Application):PIXI.Container{

        let Block: PIXI.Container = new PIXI.Container();

        Block.x = window.innerWidth/2;
        Block.y = window.innerHeight/2;

        const Exit_Sprite:PIXI.Sprite = new PIXI.Sprite(Game.GameLoading.getTexture("Exit_cross"));
        Exit_Sprite.anchor.x = 0.5;
		Exit_Sprite.anchor.y = 0.5;
        Exit_Sprite.scale.x = 0.2;
		Exit_Sprite.scale.y = 0.2;
        Exit_Sprite.interactive = true;
        Exit_Sprite.buttonMode = true;
        Exit_Sprite.visible = true;

        

        const Weapon_1_sprite: PIXI.Sprite = new PIXI.Sprite(Game.GameLoading.getTexture("Onehand_sword"));
        Weapon_1_sprite.anchor.x = 0.5;
		Weapon_1_sprite.anchor.y = 1;
        Weapon_1_sprite.scale.x = 1.5;
		Weapon_1_sprite.scale.y = 1.5;
        


        const Weapon_2_sprite: PIXI.Sprite = new PIXI.Sprite(Game.GameLoading.getTexture("Twohand_sword"));
        Weapon_2_sprite.anchor.x = 0.5;
		Weapon_2_sprite.anchor.y = 1;
        Weapon_2_sprite.scale.x = 1.5;
		Weapon_2_sprite.scale.y = 1.5;

        const Weapon_3_sprite: PIXI.Sprite = new PIXI.Sprite(Game.GameLoading.getTexture("Spear"));
        Weapon_3_sprite.anchor.x = 0.5;
		Weapon_3_sprite.anchor.y = 1;
        Weapon_3_sprite.scale.x = 1.5;
		Weapon_3_sprite.scale.y = 1.5;

        const graphics_1 = new PIXI.Graphics();
        graphics_1.beginFill(0xFF3300);
        graphics_1.drawRect(Weapon_1_sprite.x, Weapon_1_sprite.y, Weapon_1_sprite.width, Weapon_1_sprite.height);
        //graphics_1.endFill();

        const graphics_2 = new PIXI.Graphics();
        graphics_2.beginFill(0xFF3300);
        graphics_2.drawRect(Weapon_2_sprite.x, Weapon_2_sprite.y, Weapon_2_sprite.width, Weapon_2_sprite.height);
        //graphics_2.endFill();

        const graphics_3 = new PIXI.Graphics();
        graphics_3.beginFill(0xFF3300);
        graphics_3.drawRect(Weapon_3_sprite.x, Weapon_3_sprite.y, Weapon_3_sprite.width, Weapon_3_sprite.height);
        //graphics_3.endFill();


        Exit_Sprite.x = Block.width + 20;
        Exit_Sprite.y = Block.height - Weapon_1_sprite.height/2 + Exit_Sprite.height/2;

        Weapon_1_sprite.x = Block.width - 30;
        Weapon_1_sprite.y = Block.height + 30;

        Weapon_2_sprite.x = Block.width - 30;
        Weapon_2_sprite.y = Block.height + 30 + Weapon_1_sprite.height + 5;

        Weapon_3_sprite.x = Block.width - 30;
        Weapon_3_sprite.y = Block.height + 30 + Weapon_1_sprite.height + Weapon_2_sprite.height + 10;

        Block.addChild(Exit_Sprite);
        Block.addChild(Weapon_1_sprite);
        Block.addChild(Weapon_2_sprite);
        Block.addChild(Weapon_3_sprite);

        //Weapon_1_sprite.mask = graphics_1; //Как-то неправильно работает
        //Weapon_2_sprite.mask = graphics_2; //Как-то неправильно работает
        //Weapon_3_sprite.mask = graphics_3; //Как-то неправильно работает

        Exit_Sprite.on('click',()=>{
            console.warn("Exit_button work");
            _pixiApp.ticker.start();
            Block.removeChildren();
        });
               
        return Block;
    };


}