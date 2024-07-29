import * as PIXI from 'pixi.js';
import AssetManager from '../AssetsManager.ts';
import Game_Scene from './Game_Scene.ts';

export default class Menu{
    

    constructor(_pixiApp:PIXI.Application, Assetsload:AssetManager){

        let Start_new_Game_buttn_image = Assetsload.getTexture("Start_new_game_buttn");
        let Game_over_buttn_image = Assetsload.getTexture("Game_over_buttn");
        let Pause_buttn_image = Assetsload.getTexture("Pause_buttn");
        let Start_buttn_image = Assetsload.getTexture("Start_buttn");
        let Stop_buttn_image = Assetsload.getTexture("Stop_buttn");

        let New_Game_sprite = new PIXI.Sprite(Start_new_Game_buttn_image);
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
        console.warn("New_Game_sprite create");

        let Game_over_sprite = new PIXI.Sprite(Game_over_buttn_image);
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
        console.warn("Game_over_sprite create");

        let Pause_sprite = new PIXI.Sprite(Pause_buttn_image);
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
        console.warn("Pause_sprite  create");

        let Start_sprite = new PIXI.Sprite(Start_buttn_image);
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
        console.warn("Start_sprite create");

        let Stop_sprite = new PIXI.Sprite(Stop_buttn_image);
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
        console.warn("Stop_sprite create");
    };
};