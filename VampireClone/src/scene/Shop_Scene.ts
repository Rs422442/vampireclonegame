import * as PIXI from "pixi.js";
import Game from "../Game";

export default class Shop extends PIXI.Container{
    pixiapp!: PIXI.Application;
    static Shop_flag:boolean = false;

    constructor(_pixiApp: PIXI.Application){
        super();
        this.pixiapp = _pixiApp;
        this.Shop_block(_pixiApp);
    };

    Shop_block(_pixiApp: PIXI.Application):PIXI.Container{

        Shop.Shop_flag = true;

        let Block: PIXI.Container = new PIXI.Container();

        Block.x = window.innerWidth/2;
        Block.y = window.innerHeight/2;

        let Shop_back_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Shop_back"),
            0.5,
            0.5,
            1,
            1,
            window.innerWidth/2,
            window.innerHeight/2,
            false,
            false,
            Block.width,
            Block.height
        );

        const Shop_item_1_back_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Shop_item_back"),
            0.5,
            0.5,
            1,
            1,
            Shop_back_sprite.width - 30,
            Shop_back_sprite.height + 30,
            false,
            false
        );

        const Shop_item_2_back_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Shop_item_back"),
            0.5,
            0.5,
            1,
            1,
            Shop_back_sprite.width - 30,
            Shop_back_sprite.height + 30 + Shop_item_1_back_sprite.height + 5,
            false,
            false
        );

        const Shop_item_3_back_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Shop_item_back"),
            0.5,
            0.5,
            1,
            1,
            Shop_back_sprite.width - 30,
            Shop_back_sprite.height + 30 + Shop_item_1_back_sprite.height + Shop_item_2_back_sprite.height + 10,
            false,
            false
        );

        const Exit_Sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Exit_cross"),
            0.5,
            0.5,
            0.2,
            0.2,
            Shop_back_sprite.width + 30,
            Shop_back_sprite.height + 10,
            true,
            true
        );

        const Weapon_1_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Onehand_sword"),
            0.5,
            0.5,
            1.5,
            1.5,
            Shop_item_1_back_sprite.x,
            Shop_item_1_back_sprite.y,
            true,
            true
        );

        const Weapon_2_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Twohand_sword"),
            0.5,
            0.5,
            1.5,
            1.5,
            Shop_item_2_back_sprite.x,
            Shop_item_2_back_sprite.y,
            true,
            true
        );

        const Weapon_3_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Spear"),
            0.5,
            0.5,
            1.5,
            1.5,
            Shop_item_3_back_sprite.x,
            Shop_item_3_back_sprite.y,
            true,
            true
        );

        Shop_item_1_back_sprite.addChild(Weapon_1_sprite);
        Shop_item_2_back_sprite.addChild(Weapon_2_sprite);
        Shop_item_3_back_sprite.addChild(Weapon_3_sprite);        

        Shop_back_sprite.addChild(Exit_Sprite);
        Shop_back_sprite.addChild(Shop_item_1_back_sprite);
        Shop_back_sprite.addChild(Shop_item_2_back_sprite);
        Shop_back_sprite.addChild(Shop_item_3_back_sprite);        

        Block.addChild(Shop_back_sprite);

        Exit_Sprite.on('click',()=>{
            this.Exit_shop(Block);
        });

        Weapon_1_sprite.on('click',()=>{
            console.log("Weapon 1");
        });

        Weapon_2_sprite.on('click',()=>{
            console.log("Weapon 2");            
        });

        Weapon_3_sprite.on('click',()=>{
            console.log("Weapon 3");            
        });
               
        return Block;
    };

    Exit_shop(Container: PIXI.Container){
        console.warn("Exit_button work");
        this.pixiapp.ticker.start();
        Container.removeChildren();
        Shop.Shop_flag = false;
    };

    Shop_sprite_create(
        image: PIXI.Texture,
        anchor_x: number,
        anchor_y: number,
        scale_x: number,
        scale_y: number,
        x_cor: number,
        y_cor: number,
        interactive: boolean,
        buttonMode: boolean,
        width?:number,
        height?:number
    ): PIXI.Sprite{
        const Button:PIXI.Sprite = new PIXI.Sprite(image);

        Button.anchor.x = anchor_x;
		Button.anchor.y = anchor_y;

        if (width != undefined && height != undefined){
            Button.width = width;
            Button.height = height;
        } else {
            Button.scale.x = scale_x;
		    Button.scale.y = scale_y;
        };        

        Button.interactive = interactive;
        Button.buttonMode = buttonMode;
        Button.visible = true;

        Button.x = x_cor;
        Button.y = y_cor;

        console.log("Ok");

        return Button;
    };
};

/*const graphics_1 = new PIXI.Graphics();
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
        //graphics_3.endFill();*/