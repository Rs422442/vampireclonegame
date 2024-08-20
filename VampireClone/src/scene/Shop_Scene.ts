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

        let style: PIXI.TextStyle = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 12,
            fill: "blak"
        });

        Block.x = window.innerWidth/2;
        Block.y = window.innerHeight/2;

        let Shop_back_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Block,
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

        const Exit_Sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_back_sprite,
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

        const Shop_item_1_back_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_back_sprite,
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

        const Weapon_1_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_item_1_back_sprite,
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

        const Shop_item_1_parameters_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_back_sprite,
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

        const Shop_item_1_parameters_text: PIXI.Text = this.Text_create
        (
            Shop_item_1_parameters_sprite,
            "Weapon 1",
            style,
            -0,
            -16
        );

        const Shop_item_2_back_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_back_sprite,
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

        const Weapon_2_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_item_2_back_sprite,
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

        const Shop_item_2_parameters_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_back_sprite,
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

        const Shop_item_2_parameters_text: PIXI.Text = this.Text_create
        (
            Shop_item_2_parameters_sprite,
            "Weapon 2",
            style,
            -0,
            -16
        );

        const Shop_item_3_back_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_back_sprite,
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

        const Weapon_3_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_item_3_back_sprite,
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

        const Shop_item_3_parameters_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_back_sprite,
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

        const Shop_item_3_parameters_text: PIXI.Text = this.Text_create
        (
            Shop_item_3_parameters_sprite,
            "Weapon 3",
            style,
            -0,
            -16
        );

        const Shop_description_sprite:PIXI.Sprite = this.Shop_sprite_create
        (
            Shop_back_sprite,
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

        const Shop_description_text: PIXI.Text = this.Text_create
        (
            Shop_description_sprite,
            "Description",
            style,
            0,
            0
        );

        console.log(Shop_item_3_back_sprite.x, "  ", Shop_item_3_back_sprite.y);        

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

    Text_create(
        container:PIXI.Container,
        text: string,
        style: PIXI.TextStyle,
        x_cor: number,
        y_cor: number
    ):PIXI.Text{
        const message:PIXI.Text = new PIXI.Text(text, style);

        message.anchor.x = 0.5;
        message.anchor.y = 0.5;

        message.x = x_cor;
        message.y = y_cor;

        container.addChild(message);

        return message
    }

    Shop_sprite_create(
        container:PIXI.Container,
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
    ):PIXI.Sprite {
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

        container.addChild(Button);

        return Button;
    };
};