import * as PIXI from 'pixi.js';
import Menu_scene from './Menu_scene.ts';
import Game from '../Game.ts';

export default class Pause extends PIXI.Container{
    static Pause_sprite:PIXI.Sprite;
    static Start_sprite:PIXI.Sprite;
    static Stop_sprite:PIXI.Sprite;
    static Game_over_sprite:PIXI.Sprite;
    

    constructor(
        _pixiApp: PIXI.Application
    ) {

        super();

        console.warn("Paused")

        Pause.Game_over_sprite = Menu_scene.Create_Menu_button(
            this,
            "Game_over_buttn",
            Game.button_image_map.get("Game_over_buttn"),
            window.innerWidth/2,
            window.innerHeight/3 + 150,
            true,
            true,
            true
        );

        /*Pause.Pause_sprite = Menu_scene.Create_Menu_button(
            this,
            "Pause_buttn",
            Game.button_image_map.get("Pause_buttn"),
            window.innerWidth/2,
            window.innerHeight/3 + 50,
            true,
            true,
            true
        );*/

        Pause.Start_sprite = Menu_scene.Create_Menu_button(
            this,
            "Start_buttn",
            Game.button_image_map.get("Start_buttn"),
            window.innerWidth/2,
            window.innerHeight/3 + 50,
            true,
            true,
            true
        );

        Pause.Stop_sprite = Menu_scene.Create_Menu_button(
            this,
            "Stop_button",
            Game.button_image_map.get("Stop_buttn"),
            window.innerWidth/2,
            window.innerHeight/3 + 100,
            true,
            true,
            true
        );

       Pause.Game_over_sprite.on('click',(_event)=>{
            console.warn("Game_over_sprite work");
        });  

        /*Pause.Pause_sprite.on('click',(_event)=>{
            console.warn("Pause_sprite  work");
            _pixiApp.ticker.stop();
            console.warn("Paused")
        });*/

        Pause.Start_sprite.on('click',(_event)=>{
            console.warn("Start_sprite work");
            _pixiApp.ticker.start();
            console.warn("Started")
            this.removeChildren();
        });

        Pause.Stop_sprite.on('click',(_event)=>{
            console.warn("Stop_sprite  work");
        });
    };
};