import * as PIXI from "pixi.js";
import Game from "../Game";

export default class Shop extends PIXI.Container{
    constructor(){
        super();
        this.Shop_block();
    };

    Shop_block():PIXI.Container{
        let Exit_Sprite:PIXI.Sprite = new PIXI.Sprite(Game.GameLoading.getTexture("Exit_cross"))
        Exit_Sprite.interactive = true;
        Exit_Sprite.buttonMode = true;
        Exit_Sprite.visible = true;

        this.addChild(Exit_Sprite);

        this.x = window.innerWidth;
        this.y = window.innerHeight;

        return this;
    };
}