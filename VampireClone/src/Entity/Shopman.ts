import * as PIXI from "pixi.js";

export default class Shopman extends PIXI.Container{
    Shopman_sprite!:PIXI.AnimatedSprite;
    Shopman_iddle_animation: PIXI.Texture<PIXI.Resource>[] = [];
    Shopman_Open_shop_animation: PIXI.Texture<PIXI.Resource>[] = [];
    static x_cor:number = Math.floor(Math.random() * window.innerWidth);
    static y_cor:number = Math.floor(Math.random() * window.innerHeight);

    constructor(
        _pixiApp: PIXI.Application,
        _Shopman_iddle_animation: PIXI.Texture<PIXI.Resource>[],
        _Shopman_Open_shop_animation: PIXI.Texture<PIXI.Resource>[]
    ) {
        super();
        this.Shopman_iddle_animation = _Shopman_iddle_animation;
        this.Shopman_Open_shop_animation = _Shopman_Open_shop_animation;
    };

    Shopman_spawn() {
        this.Shopman_sprite = new PIXI.AnimatedSprite(this.Shopman_iddle_animation);
		this.Shopman_sprite.anchor.x = 0.5;
		this.Shopman_sprite.anchor.y = 1;
		this.Shopman_sprite.scale.x = 0.5;
		this.Shopman_sprite.scale.y = 0.5;
		this.Shopman_sprite.visible = true;
		this.Shopman_sprite.play(); // Это функция, так что её нужно вызвать
		this.Shopman_sprite.animationSpeed = 0.15; // возможно пригодится этот параметр

        this.width = this.Shopman_sprite.width;
		this.height = this.Shopman_sprite.height;

		this.x = Shopman.x_cor;
		this.y = Shopman.y_cor;

		this.addChild(this.Shopman_sprite);

        console.log("Shopman added");
    };

    Shopman_open_shop(){
        console.log("Shop opened");
    };

};