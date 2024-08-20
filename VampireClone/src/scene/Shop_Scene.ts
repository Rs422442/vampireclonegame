import * as PIXI from "pixi.js";
import Game from "../Game";

export default class Shop extends PIXI.Container{
    pixiapp!: PIXI.Application;
    static Shop_flag:boolean = false;

    constructor(){
        super();
    };

    Shop_create(_pixiApp: PIXI.Application):PIXI.Container{

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
            0,
            0,
            false,
            false,
        );

        console.log(Shop_back_sprite.width, "  " ,Shop_back_sprite.height)

        const Exit_Sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Exit_cross"),
            0.5,
            0.5,
            0.25,
            0.25,
            Shop_back_sprite.width/2 - 20 - 6,
            - Shop_back_sprite.height/2 + 20 + 6,
            true,
            true
        );

        const Shop_description_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Description_back"),
            0.5,
            0.5,
            1,
            1,
            0,
            Shop_back_sprite.height/2 - 95,
            false,
            false
        );

        const Shop_item_1_back_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Shop_item_back"),
            0.5,
            0.5,
            1,
            1,
            - Shop_back_sprite.width/2 + 38 + 6,
            - Shop_back_sprite.height/2 + 38 + Exit_Sprite.height + 10,
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
            - Shop_back_sprite.width/2 + 38 + 6,
            - Shop_back_sprite.height/2 + 38 + Exit_Sprite.height + 10 + Shop_item_1_back_sprite.height + 10,
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
            - Shop_back_sprite.width/2 + 38 + 6,
            - Shop_back_sprite.height/2 + 38 + Exit_Sprite.height + 10 + Shop_item_1_back_sprite.height + 10 + Shop_item_2_back_sprite.height + 10,
            false,
            false
        );

        const Shop_item_1_parameters_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Parameters_back"),
            0.5,
            0.5,
            1,
            1,
            32,
            - Shop_back_sprite.height/2 + 38 + Exit_Sprite.height + 10,
            false,
            false
        );

        const Shop_item_2_parameters_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Parameters_back"),
            0.5,
            0.5,
            1,
            1,
            32,
            - Shop_back_sprite.height/2 + 38 + Exit_Sprite.height + 10 + Shop_item_1_back_sprite.height + 10,
            false,
            false
        );

        const Shop_item_3_parameters_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Parameters_back"),
            0.5,
            0.5,
            1,
            1,
            32,
            - Shop_back_sprite.height/2 + 38 + Exit_Sprite.height + 10 + Shop_item_1_back_sprite.height + 10 + Shop_item_2_back_sprite.height + 10,
            false,
            false
        );

        const Weapon_1_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Onehand_sword"),
            0.5,
            0.5,
            1.5,
            1.5,
            0,
            0,
            true,
            true,
            45
        );

        const Weapon_2_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Twohand_sword"),
            0.5,
            0.5,
            1.5,
            1.5,
            0,
            0,
            true,
            true,
            45
        );

        const Weapon_3_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Game.GameLoading.getTexture("Spear"),
            0.5,
            0.5,
            1.5,
            1.5,
            0,
            0,
            true,
            true,
            45
        );

        console.log(Shop_item_3_back_sprite.x, "  ", Shop_item_3_back_sprite.y)

        Block.addChild(Shop_back_sprite);        

        Shop_back_sprite.addChild(Exit_Sprite);
        Shop_back_sprite.addChild(Shop_description_sprite);
        Shop_back_sprite.addChild(Shop_item_1_parameters_sprite);
        Shop_back_sprite.addChild(Shop_item_2_parameters_sprite);
        Shop_back_sprite.addChild(Shop_item_3_parameters_sprite);
        Shop_back_sprite.addChild(Shop_item_1_back_sprite);
        Shop_back_sprite.addChild(Shop_item_2_back_sprite);
        Shop_back_sprite.addChild(Shop_item_3_back_sprite);        

        Shop_item_1_back_sprite.addChild(Weapon_1_sprite);
        Shop_item_2_back_sprite.addChild(Weapon_2_sprite);
        Shop_item_3_back_sprite.addChild(Weapon_3_sprite);

        Exit_Sprite.on('click',()=>{
            this.Exit_shop(Block, _pixiApp);
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

    Exit_shop(Container: PIXI.Container, _pixiApp: PIXI.Application){
        console.warn("Exit_button work");
        _pixiApp.ticker.start();
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
        rotation?: number,
        width?: number,
        height?: number       
    ): PIXI.Sprite{
        const Button:PIXI.Sprite = new PIXI.Sprite(image);

        Button.anchor.x = anchor_x;
		Button.anchor.y = anchor_y;

        Button.scale.x = scale_x;
		Button.scale.y = scale_y;

        if (rotation != undefined ){
            Button.rotation = rotation
        }; 

        if (width != undefined && height != undefined){
            Button.width = width;
            Button.height = height;
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