import * as PIXI from "pixi.js";
import Entity from "./Entity";
//import Hero from "./Hero";
import Shop from "../scene/Shop_Scene";
//import Weapon from "../Weapon";

export default class Shopman extends Entity{
    Sprite!:PIXI.AnimatedSprite;
    Shopman_iddle_animation: PIXI.Texture<PIXI.Resource>[] = [];
    Shopman_Open_shop_animation: PIXI.Texture<PIXI.Resource>[] = [];
    static x_cor:number = window.innerWidth/2 //Math.floor(Math.random() * window.innerWidth);
    static y_cor:number = window.innerHeight/2 // Math.floor(Math.random() * window.innerHeight);

    constructor(
        _pixiApp: PIXI.Application,
        _Shopman_iddle_animation: PIXI.Texture<PIXI.Resource>[],
        _Shopman_Open_shop_animation: PIXI.Texture<PIXI.Resource>[]
    ) {
        super();
        this.Shopman_iddle_animation = _Shopman_iddle_animation;
        this.Shopman_Open_shop_animation = _Shopman_Open_shop_animation;
        //let onehand = new Weapon(); 
    };

    Shopman_spawn() {
        this.Sprite = this.Entity_summon(this.Shopman_iddle_animation, 0.5, 1, 0.5, 0.5, 0.15);

		this.x = Shopman.x_cor;
		this.y = Shopman.y_cor;

		this.addChild(this.Sprite);

        console.log("Shopman added");
    };

    Shopman_open_shop(_pixiApp: PIXI.Application): PIXI.Container{
        console.log("Shop opened");
        let Shop_: Shop = new Shop()
        return Shop_.Shop_create(_pixiApp);
    };

};