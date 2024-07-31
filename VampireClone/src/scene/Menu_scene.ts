import * as PIXI from 'pixi.js';
import AssetManager from '../AssetsManager.ts';
import Game_Scene from './Game_Scene.ts';

export default class Menu extends PIXI.Container{
    static New_Game_sprite:PIXI.Sprite;    

    constructor(_pixiApp:PIXI.Application, Assetsload:AssetManager){

        super();

        let Start_new_Game_buttn_image = Assetsload.getTexture("Start_new_game_buttn");

        Menu.New_Game_sprite = Menu.Create_Menu_button(
            this,
            "Start_new_game_buttn",
            Start_new_Game_buttn_image,
            window.innerWidth/2,
            window.innerHeight/2,
            true,
            true,
            true
        );

        _pixiApp.stage.addChild(this)

        Menu.New_Game_sprite.on('click',(_event)=>{

            //Menu.New_Game_sprite.interactive, Menu.New_Game_sprite.buttonMode, Menu.New_Game_sprite.visible = false;

            _pixiApp.stage.addChild(new Game_Scene(_pixiApp, Assetsload));
            this.removeChildren();

            console.log("New_Game_sprite work");
        });
    };

    static Create_Menu_button(
        Container:PIXI.Container,
        Name:string,
        image: PIXI.Texture<PIXI.Resource>,
        x_cor:number,
        y_cor:number,
        interactive:boolean,
        buttonMode:boolean,
        visible:boolean
    ):PIXI.Sprite {
        let Menu_button_sprite = new PIXI.Sprite(image);

        Menu_button_sprite.anchor.set(0.5);
        Menu_button_sprite.scale.set(1);
        Menu_button_sprite.interactive = interactive;
        Menu_button_sprite.buttonMode = buttonMode;
        Menu_button_sprite.visible = visible;
        Menu_button_sprite.x = x_cor;
        Menu_button_sprite.y = y_cor;

        Container.addChild(Menu_button_sprite);

        console.log(Name + " create");

        return Menu_button_sprite;
    };
};