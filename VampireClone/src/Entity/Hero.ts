import * as PIXI from "pixi.js";
import AssetManager from "../AssetsManager";
import Pause from "../scene/Pause_Scene";
import Game_Scene from "../scene/Game_Scene";
import Entity from "./Entity";


export default class Hero extends Entity {
    Hero_sprite!: PIXI.AnimatedSprite;
    Hero_Heath_bar_sprite!: PIXI.Sprite;
    Hero_Health_bar_foreground_sprite!: PIXI.Sprite;
    Hero_Heath_bar_image!:PIXI.Texture<PIXI.Resource>;
    Hero_Health_bar_foreground_image!:PIXI.Texture<PIXI.Resource>;
    Assetsloader!:AssetManager;
    walck_flag:boolean = false;
    idle_flag:boolean = true;
    static keys: Map<string, boolean> = new Map<string, boolean>();
    static animations_map: Map<string, PIXI.Texture<PIXI.Resource>[]>;

    constructor(
        _pixiApp: PIXI.Application,
        Assetsload:AssetManager,
        _Hero_Heath_bar_image:PIXI.Texture<PIXI.Resource>,
        _Hero_Health_bar_foreground_image:PIXI.Texture<PIXI.Resource>,
    ) {
        super();
        
        console.log(Hero.keys)
        this.Assetsloader = Assetsload;
        this.Hero_Heath_bar_image = _Hero_Heath_bar_image;
        this.Hero_Health_bar_foreground_image = _Hero_Health_bar_foreground_image; 
        
        this.Hero_summon()
    };

    //Escape Enter

    Hero_summon(){
        let idle: PIXI.Texture<PIXI.Resource>[] | undefined = Game_Scene.Hero_animations_map.get("idle")
        this.Hero_sprite = new PIXI.AnimatedSprite(idle);
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
        let change_flag:boolean = this.walck_flag;
        document.addEventListener('keydown',this.keysdown);
        document.addEventListener('keyup',this.keysup);
        if (Hero.keys.get("w") || Hero.keys.get("ArrowUp") || Hero.keys.get("ц")){
            this.y -= 5;
        };

        if (Hero.keys.get("s") || Hero.keys.get("ArrowDown") || Hero.keys.get("ы")){
            this.y += 5;
        };

        if (Hero.keys.get("a") || Hero.keys.get("ArrowLeft") || Hero.keys.get("ф")){
            this.x -= 5;
            this.Hero_sprite.scale.x = -1.5;
        };

        if (Hero.keys.get("d") || Hero.keys.get("ArrowRight") || Hero.keys.get("в")){
            this.x += 5;
            this.Hero_sprite.scale.x = 1.5;
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


        if (this.walck_flag) {
            let walck_textures:PIXI.Texture<PIXI.Resource>[]  = Game_Scene.Hero_animations_map.get("walk");
            this.Hero_sprite.textures = walck_textures;
            this.Hero_sprite.play();
            this.Hero_sprite.animationSpeed = 0.15;
        }else{
            let idle_textures:PIXI.Texture<PIXI.Resource>[] = Game_Scene.Hero_animations_map.get("idle");
            this.Hero_sprite.textures = idle_textures;
            this.Hero_sprite.play();
            this.Hero_sprite.animationSpeed = 0.15;
        };
    };

    Hero_attack(){

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
            this.idle_flag = false;
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
            this.idle_flag = true;
            console.log(this.walck_flag);
        };
    };
};