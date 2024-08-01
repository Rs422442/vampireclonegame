import * as PIXI from "pixi.js";
import AssetManager from "../AssetsManager";
import Pause from "../scene/Pause_Scene";


export default class Hero extends PIXI.Container {
    Hero_sprite!: PIXI.AnimatedSprite;
    Hero_Heath_bar_sprite!: PIXI.Sprite;
    Hero_Health_bar_foreground_sprite!: PIXI.Sprite;
    Hero_Heath_bar_image!:PIXI.Texture<PIXI.Resource>;
    Hero_Health_bar_foreground_image!:PIXI.Texture<PIXI.Resource>;
    Hero_attack_onehand_animations!: PIXI.Texture<PIXI.Resource>[];
    Hero_attack_twohand_animations!: PIXI.Texture<PIXI.Resource>[];
    Hero_attack_speare_animations!: PIXI.Texture<PIXI.Resource>[];
    Hero_walck_animations!: PIXI.Texture<PIXI.Resource>[];
    Hero_iddle_animations!: PIXI.Texture<PIXI.Resource>[];
    Assetsloader!:AssetManager;
    keys = new Map<string, boolean>();
    

    constructor(
        _pixiApp: PIXI.Application,
        Assetsload:AssetManager,
        _Hero_Heath_bar_image:PIXI.Texture<PIXI.Resource>,
        _Hero_Health_bar_foreground_image:PIXI.Texture<PIXI.Resource>,
        _Hero_attack_onehand_animations: PIXI.Texture<PIXI.Resource>[],
        _Hero_attack_twohand_animations: PIXI.Texture<PIXI.Resource>[],
        _Hero_attack_spire_animations: PIXI.Texture<PIXI.Resource>[],
        _Hero_walck_animations: PIXI.Texture<PIXI.Resource>[],
        _Hero_iddle_animations: PIXI.Texture<PIXI.Resource>[],
    ) {
        super();
        this.Assetsloader = Assetsload;
        this.Hero_Heath_bar_image = _Hero_Heath_bar_image;
        this.Hero_Health_bar_foreground_image = _Hero_Health_bar_foreground_image;
        this.Hero_attack_onehand_animations = _Hero_attack_onehand_animations;
        this.Hero_attack_twohand_animations = _Hero_attack_twohand_animations;
        this.Hero_attack_speare_animations = _Hero_attack_spire_animations;
        this.Hero_walck_animations = _Hero_walck_animations;
        this.Hero_iddle_animations = _Hero_iddle_animations;
        
    };

    Hero_summon(){
        this.Hero_sprite = new PIXI.AnimatedSprite(this.Hero_iddle_animations);
		this.Hero_sprite.anchor.x = 0.5;
		this.Hero_sprite.anchor.y = 1;
		this.Hero_sprite.scale.x = 1.5;
		this.Hero_sprite.scale.y = 1.5;
		this.Hero_sprite.visible = true;
		this.Hero_sprite.play(); // Это функция, так что её нужно вызвать
		this.Hero_sprite.animationSpeed = 0.15; // возможно пригодится этот параметр

        this.Hero_Heath_bar_sprite = new PIXI.Sprite(this.Hero_Heath_bar_image);
		this.Hero_Heath_bar_sprite.anchor.x = 0.5;
		this.Hero_Heath_bar_sprite.anchor.y = 1;
		this.Hero_Heath_bar_sprite.scale.x = 0.5;
        this.Hero_Heath_bar_sprite.scale.y = 0.5;
		this.Hero_Heath_bar_sprite.y = - this.Hero_sprite.height;

        this.Hero_Health_bar_foreground_sprite = new PIXI.Sprite(this.Hero_Health_bar_foreground_image);
		this.Hero_Health_bar_foreground_sprite.anchor.x = 0.5;
		this.Hero_Health_bar_foreground_sprite.anchor.y = 1;
		this.Hero_Health_bar_foreground_sprite.scale.x = 0.5;
        this.Hero_Health_bar_foreground_sprite.scale.y = 0.5;
		this.Hero_Health_bar_foreground_sprite.y = - this.Hero_sprite.height;

        this.addChild(this.Hero_Heath_bar_sprite);
        this.addChild(this.Hero_Health_bar_foreground_sprite);

        this.x = window.innerWidth/2;
        this.y = window.innerHeight/2;

		this.addChild(this.Hero_sprite);
		
		console.log("Hero added");
	}

    Hero_movement(){
        document.addEventListener('keydown',this.keysdown)
        document.addEventListener('keyup',this.keysup)
    };

    keysdown(e: { key: string; }){
        console.log(e.key);
        let key:string = e.key;
        this.keys.set(key, true);
        console.log(this.keys);
    };

    keysup(e: { key: string; }){
        console.log(e.key);
        let key:string = e.key;
        this.keys.set(key, false);
        console.log(this.keys);
    };
};

//console.log(event.keyCode)// энтер 13 ескейп 27

/* if ((event.keyCode == 37) || (event.keyCode == 65)){
                //console.log("left");
                this.x -= Hero_speed;
                this.Hero_sprite.textures = this.Hero_walck_animations;
                this.Hero_sprite.scale.x = -1.5;
                this.Hero_sprite.play();
                this.Hero_sprite.animationSpeed = 0.15;
            };

            if ((event.keyCode == 38) || (event.keyCode == 87)){
                //console.log("up");
                this.y -= Hero_speed;
                this.Hero_sprite.textures = this.Hero_walck_animations;
                this.Hero_sprite.play();
                this.Hero_sprite.animationSpeed = 0.15;
            };

            if ((event.keyCode == 39) || (event.keyCode == 68)){
                //console.log("right");
                this.x += Hero_speed;
                this.Hero_sprite.textures = this.Hero_walck_animations;
                this.Hero_sprite.scale.x = 1.5;
                this.Hero_sprite.play();
                this.Hero_sprite.animationSpeed = 0.15;
            };

            if ((event.keyCode == 40) || (event.keyCode == 83)){
                //console.log("down");
                this.y += Hero_speed;
                this.Hero_sprite.textures = this.Hero_walck_animations;
                this.Hero_sprite.play();
                this.Hero_sprite.animationSpeed = 0.15;
            };

            if (this.x < 0){
                this.x = window.innerWidth + this.x;
            };
            if (this.x > window.innerWidth){
                this.x = this.x - window.innerWidth;
            };
            if (this.y < 0){
                this.y = window.innerHeight + this.y;
            };
            if (this.y > window.innerHeight){
                this.y = this.y - window.innerHeight;
            }; */