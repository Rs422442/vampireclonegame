import * as PIXI from "pixi.js";
import AssetManager from "../AssetsManager";
//import Pause from "../scene/Pause_Scene";
import Game_Scene from "../scene/Game_Scene";
import Entity from "./Entity";
import Weapon from "../Weapon";
import Game from "../Game";
import Shop from "../scene/Shop_Scene";
import Pause from "../scene/Pause_Scene";


export default class Hero extends Entity {
    Sprite!: PIXI.AnimatedSprite;
    Hero_Heath_bar_image!:PIXI.Texture<PIXI.Resource>;
    Hero_Health_bar_foreground_image!:PIXI.Texture<PIXI.Resource>;
    Assetsloader!:AssetManager;
    walck_flag:boolean = false;
    static keys: Map<string, boolean> = new Map<string, boolean>();
    //static animations_map: Map<string, PIXI.Texture<PIXI.Resource>[]>;
    Hero_Weapon: Weapon = new Weapon(10, 10, 0, 50, Game_Scene.Weapon_animations_map.get("Onehand"),);
    container: PIXI.Container;

    constructor(
        Container: PIXI.Container,
        Assetsload:AssetManager,
        _Hero_Heath_bar_image:PIXI.Texture<PIXI.Resource>,
        _Hero_Health_bar_foreground_image:PIXI.Texture<PIXI.Resource>,
    ) {
        super();
        this.Speed = 5;
        this.HP = 1000;

        this.container = Container;
                
        console.log(Hero.keys);
        this.Assetsloader = Assetsload;
        this.Hero_Heath_bar_image = _Hero_Heath_bar_image;
        this.Hero_Health_bar_foreground_image = _Hero_Health_bar_foreground_image; 

        console.log(this.Hero_Weapon);
        
        this.Hero_summon();
    };

    //Escape Enter

    Hero_summon(): PIXI.Container{
        
        let idle: PIXI.Texture<PIXI.Resource>[];
        if (Game_Scene.Hero_animations_map.get("idle") != undefined)
            {idle = Game_Scene.Hero_animations_map.get("idle")}
        else{idle = [PIXI.Texture.EMPTY]};

        this.Sprite = this.Entity_summon(idle, 0.5, 1, 1.5, 1.5, 0.15);

        let Health_bar: PIXI.Sprite =this.Entity_health_bar_summon(this.Hero_Heath_bar_image, 0.5, 1, 100, 15);
        Health_bar.y = this.Sprite.y - this.Sprite.height;

		let health_bar_foreground: PIXI.Sprite = this.Entity_health_bar_foreground_summon(this.Hero_Health_bar_foreground_image, 0.5, 1, 100, 15);
        health_bar_foreground.y = Health_bar.y;

        this.x = window.innerWidth/2;
        this.y = window.innerHeight/2;

        this.addChild(this.Sprite);
        this.addChild(Health_bar);
        this.addChild(health_bar_foreground);
		
		console.log("Hero added");

        return this;
	}

    Hero_movement(){
        document.addEventListener('keydown',this.keysdown);
        document.addEventListener('keyup',this.keysup);
        if (Hero.keys.get("w") || Hero.keys.get("ArrowUp") || Hero.keys.get("ц")){
            this.y -= this.Speed;
        };

        if (Hero.keys.get("s") || Hero.keys.get("ArrowDown") || Hero.keys.get("ы")){
            this.y += this.Speed;
        };

        if (Hero.keys.get("a") || Hero.keys.get("ArrowLeft") || Hero.keys.get("ф")){
            this.x -= this.Speed;
            this.Sprite.scale.x = -1.5;
        };

        if (Hero.keys.get("d") || Hero.keys.get("ArrowRight") || Hero.keys.get("в")){
            this.x += this.Speed;
            this.Sprite.scale.x = 1.5;
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
        };

        if ((
            Hero.keys.get("w") ||
            Hero.keys.get("a") ||
            Hero.keys.get("d") ||
            Hero.keys.get("s") ||
            Hero.keys.get("ц") ||
            Hero.keys.get("ф") ||
            Hero.keys.get("в") ||
            Hero.keys.get("а") ||
            Hero.keys.get("ArrowUp") ||
            Hero.keys.get("ArrowDown") ||
            Hero.keys.get("ArrowLeft") ||
            Hero.keys.get("ArrowRight")) &&
            (!this.walck_flag)
        ){
            let walck_textures:PIXI.Texture<PIXI.Resource>[]
            if (Game_Scene.Hero_animations_map.get("walk") != undefined)
                {walck_textures = Game_Scene.Hero_animations_map.get("walk")}
            else{walck_textures = [PIXI.Texture.EMPTY]};
            this.Sprite.textures = walck_textures;
            this.Sprite.play();
            this.Sprite.animationSpeed = 0.15;
            this.walck_flag = true;
        }; if (
            !Hero.keys.get("w") &&
            !Hero.keys.get("a") &&
            !Hero.keys.get("d") &&
            !Hero.keys.get("s") &&
            !Hero.keys.get("ц") &&
            !Hero.keys.get("ф") &&
            !Hero.keys.get("в") &&
            !Hero.keys.get("а") &&
            !Hero.keys.get("ArrowUp") &&
            !Hero.keys.get("ArrowDown") &&
            !Hero.keys.get("ArrowLeft") &&
            !Hero.keys.get("ArrowRight")&&
            this.walck_flag
        ){
            let idle_textures:PIXI.Texture<PIXI.Resource>[];
            if (Game_Scene.Hero_animations_map.get("idle") != undefined)
                {idle_textures = Game_Scene.Hero_animations_map.get("idle")}
            else{idle_textures = [PIXI.Texture.EMPTY]};
            this.Sprite.textures = idle_textures;
            this.Sprite.play();
            this.Sprite.animationSpeed = 0.15;
            this.walck_flag = false;
        };
    };

    Hero_attack(){
        document.addEventListener('click', this.onclick);        
    };

    onclick(){
        if (!Shop.Shop_flag && !Pause.Pause_flag){
            console.log("click");
            let effect_sprite: PIXI.AnimatedSprite = this.Hero_Weapon.spawn_effect
            (
                0.5,
                0.5,
                1,
                1,
                this.x,
                this.y,
                0.15
            );
            
            this.container.addChild(effect_sprite);
            if(this.Sprite.scale.x >= 0){
                effect_sprite.x += this.Hero_Weapon.Speed;
            }
            else{
                effect_sprite.x -= this.Hero_Weapon.Speed;
            };
        };
    };

    keysdown(e: { key: string; }){
        if ((e.key == "w")||
            (e.key == "s")||
            (e.key == "a")||
            (e.key == "d")||
            (e.key == "ArrowUp")||
            (e.key == "ArrowDown")||
            (e.key == "ArrowLeft")||
            (e.key == "ArrowRight")||
            (e.key == "ц")||
            (e.key == "ы")||
            (e.key == "ф")||
            (e.key == "в")||
            (e.key == "Escape")||
            (e.key == "Enter")
        ){
            console.log(e.key);
            Hero.keys.set(e.key, true);
            console.log(Hero.keys);
            this.walck_flag = true;
            console.log(this.walck_flag);
        };
    };

    keysup(e: { key: string; }){
        if ((e.key == "w")||
            (e.key == "s")||
            (e.key == "a")||
            (e.key == "d")||
            (e.key == "ArrowUp")||
            (e.key == "ArrowDown")||
            (e.key == "ArrowLeft")||
            (e.key == "ArrowRight")||
            (e.key == "ц")||
            (e.key == "ы")||
            (e.key == "ф")||
            (e.key == "в")||
            (e.key == "Escape")||
            (e.key == "Enter")
        ){
            console.log(e.key);
            Hero.keys.set(e.key, false);
            console.log(Hero.keys);
            this.walck_flag = false;
            console.log(this.walck_flag);
        };
    };
};