import * as PIXI from 'pixi.js';
import AssetManager from '../AssetsManager.ts';
import Game_Scene from './Game_Scene.ts';

export default class Menu{
    static New_Game_sprite:PIXI.Sprite;
    static Pause_sprite:PIXI.Sprite;
    static Start_sprite:PIXI.Sprite;
    static Stop_sprite:PIXI.Sprite;
    static Game_over_sprite:PIXI.Sprite;
    

    constructor(_pixiApp:PIXI.Application, Assetsload:AssetManager){

        let Start_new_Game_buttn_image = Assetsload.getTexture("Start_new_game_buttn");
        let Game_over_buttn_image = Assetsload.getTexture("Game_over_buttn");
        let Pause_buttn_image = Assetsload.getTexture("Pause_buttn");
        let Start_buttn_image = Assetsload.getTexture("Start_buttn");
        let Stop_buttn_image = Assetsload.getTexture("Stop_buttn");

        Menu.New_Game_sprite = this.Create_Menu_button(
            _pixiApp,
            "Start_new_game_buttn",
            Start_new_Game_buttn_image,
            window.innerWidth/2,
            window.innerHeight/2,
            true,
            true,
            true
        );

        Menu.Game_over_sprite = this.Create_Menu_button(
            _pixiApp,
            "Game_over_buttn",
            Game_over_buttn_image,
            window.innerWidth/2,
            window.innerHeight/3 + 200,
            false,
            false,
            false
        );

        Menu.Pause_sprite = this.Create_Menu_button(
            _pixiApp,
            "Pause_buttn",
            Pause_buttn_image,
            window.innerWidth/2,
            window.innerHeight/3 + 50,
            false,
            false,
            false
        );

        Menu.Start_sprite = this.Create_Menu_button(
            _pixiApp,
            "Start_buttn",
            Start_buttn_image,
            window.innerWidth/2,
            window.innerHeight/3 + 50,
            false,
            false,
            false
        );

        Menu.Stop_sprite = this.Create_Menu_button(
            _pixiApp,
            "Stop_button",
            Stop_buttn_image,
            window.innerWidth/2,
            window.innerHeight/3 + 100,
            false,
            false,
            false
        );

        Menu.New_Game_sprite.on('click',(_event)=>{

            Menu.New_Game_sprite.interactive, Menu.New_Game_sprite.buttonMode, Menu.New_Game_sprite.visible = false;
            Menu.Game_over_sprite.interactive, Menu.Game_over_sprite.buttonMode,Menu.Game_over_sprite.visible = false;
            Menu.Pause_sprite.interactive, Menu.Pause_sprite.buttonMode, Menu.Pause_sprite.visible = true;
            Menu.Start_sprite.interactive, Menu.Start_sprite.buttonMode, Menu.Start_sprite.visible = false;
            Menu.Stop_sprite.interactive, Menu.Stop_sprite.buttonMode, Menu.Stop_sprite.visible = false;

            _pixiApp.stage.addChild(new Game_Scene(_pixiApp, Assetsload));

            console.log("New_Game_sprite work");
        });

        Menu.Game_over_sprite.on('click',(_event)=>{
            console.warn("Game_over_sprite work");
        });     

        Menu.Pause_sprite .on('click',(_event)=>{
            console.warn("Pause_sprite  work");
            _pixiApp.ticker.stop();
            console.warn("Paused")
            Menu.New_Game_sprite.interactive, Menu.New_Game_sprite.buttonMode, Menu.New_Game_sprite.visible = true;
            Menu.Game_over_sprite.interactive, Menu.Game_over_sprite.buttonMode,Menu.Game_over_sprite.visible = true;
            Menu.Pause_sprite.interactive, Menu.Pause_sprite.buttonMode, Menu.Pause_sprite.visible = false;
            Menu.Start_sprite.interactive, Menu.Start_sprite.buttonMode, Menu.Start_sprite.visible = true;
            Menu.Stop_sprite.interactive, Menu.Stop_sprite.buttonMode, Menu.Stop_sprite.visible = true;
        });

        Menu.Start_sprite.on('click',(_event)=>{
            console.warn("Start_sprite work");
            _pixiApp.ticker.start();
            console.warn("Started")
            Menu.New_Game_sprite.interactive, Menu.New_Game_sprite.buttonMode, Menu.New_Game_sprite.visible = false;
            Menu.Game_over_sprite.interactive, Menu.Game_over_sprite.buttonMode,Menu.Game_over_sprite.visible = false;
            Menu.Pause_sprite.interactive, Menu.Pause_sprite.buttonMode, Menu.Pause_sprite.visible = true;
            Menu.Start_sprite.interactive, Menu.Start_sprite.buttonMode, Menu.Start_sprite.visible = false;
            Menu.Stop_sprite.interactive, Menu.Stop_sprite.buttonMode, Menu.Stop_sprite.visible = false;
        });

        Menu.Stop_sprite.on('click',(_event)=>{
            console.warn("Stop_sprite  work");
        });
    };

    Create_Menu_button(
        _pixiApp:PIXI.Application,
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
        _pixiApp.stage.addChild(Menu_button_sprite);
        console.log(Name + " create");
        return Menu_button_sprite;
    };
};

/*let New_Game_sprite = new PIXI.Sprite(Start_new_Game_buttn_image);
        New_Game_sprite.anchor.set(0.5);
        New_Game_sprite.scale.set(1);
        New_Game_sprite.interactive = true;
        New_Game_sprite.buttonMode = true;
        New_Game_sprite.x = window.innerWidth/2;
        New_Game_sprite.y = window.innerHeight/3;
        New_Game_sprite.on('click',(_event)=>{

            New_Game_sprite.interactive, New_Game_sprite.buttonMode, New_Game_sprite.visible = false;
            Game_over_sprite.interactive, Game_over_sprite.buttonMode,Game_over_sprite.visible = false;
            Pause_sprite.interactive, Pause_sprite.buttonMode, Pause_sprite.visible = false;
            Start_sprite.interactive, Start_sprite.buttonMode, Start_sprite.visible = false;
            Stop_sprite.interactive, Stop_sprite.buttonMode, Stop_sprite.visible = false;

            new Game_Scene(_pixiApp, Assetsload);

            console.warn("New_Game_sprite work");
        });
        _pixiApp.stage.addChild(New_Game_sprite);
        console.warn("New_Game_sprite create");*/

        /*let Stop_sprite = new PIXI.Sprite(Stop_buttn_image);
        Stop_sprite.anchor.set(0.5);
        Stop_sprite.scale.set(1);
        Stop_sprite.interactive = true;
        Stop_sprite.buttonMode = true;
        Stop_sprite.x = window.innerWidth/2;
        Stop_sprite.y = window.innerHeight/3 + 200;
        Stop_sprite.on('click',(_event)=>{
            console.warn("Stop_sprite  work");
        });
        _pixiApp.stage.addChild(Stop_sprite);
        console.warn("Stop_sprite create");*/

        /* let Start_sprite = new PIXI.Sprite(Start_buttn_image);
        Start_sprite.anchor.set(0.5);
        Start_sprite.scale.set(1);
        Start_sprite.interactive = true;
        Start_sprite.buttonMode = true;
        Start_sprite.x = window.innerWidth/2;
        Start_sprite.y = window.innerHeight/3 + 150;
        Start_sprite.on('click',(_event)=>{
            console.warn("Start_sprite work");
        });
        _pixiApp.stage.addChild(Start_sprite);
        console.warn("Start_sprite create");*/

        /*let Pause_sprite = new PIXI.Sprite(Pause_buttn_image);
        Pause_sprite .anchor.set(0.5);
        Pause_sprite .scale.set(1);
        Pause_sprite .interactive = true;
        Pause_sprite .buttonMode = true;
        Pause_sprite .x = window.innerWidth/2;
        Pause_sprite .y = window.innerHeight/3 + 100;
        Pause_sprite .on('click',(_event)=>{
            console.warn("Pause_sprite  work");
        });
        _pixiApp.stage.addChild(Pause_sprite );
        console.warn("Pause_sprite  create");*/

        /* let Game_over_sprite = new PIXI.Sprite(Game_over_buttn_image);
        Game_over_sprite.anchor.set(0.5);
        Game_over_sprite.scale.set(1);
        Game_over_sprite.interactive = true;
        Game_over_sprite.buttonMode = true;
        Game_over_sprite.x = window.innerWidth/2;
        Game_over_sprite.y = window.innerHeight/3 + 50;
        Game_over_sprite.on('click',(_event)=>{
            console.warn("Game_over_sprite work");
        });
        _pixiApp.stage.addChild(Game_over_sprite);
        console.warn("Game_over_sprite create");*/