import * as PIXI from "pixi.js";
import Menu from "../scene/Menu_scene";

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
    Pause_flag:boolean = false;


    constructor(
        _pixiApp: PIXI.Application,
        _Hero_Heath_bar_image:PIXI.Texture<PIXI.Resource>,
        _Hero_Health_bar_foreground_image:PIXI.Texture<PIXI.Resource>,
        _Hero_attack_onehand_animations: PIXI.Texture<PIXI.Resource>[],
        _Hero_attack_twohand_animations: PIXI.Texture<PIXI.Resource>[],
        _Hero_attack_spire_animations: PIXI.Texture<PIXI.Resource>[],
        _Hero_walck_animations: PIXI.Texture<PIXI.Resource>[],
        _Hero_iddle_animations: PIXI.Texture<PIXI.Resource>[],
    ) {
        super();
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

    Hero_event(
        _pixiApp:PIXI.Application
        
    ) {
        document.addEventListener('keydown', (event)=>{
            if ((event.keyCode == 27)&&(this.Pause_flag  == false)){
                _pixiApp.ticker.stop();
                console.warn("Paused")
                Menu.Game_over_sprite.interactive, Menu.Game_over_sprite.buttonMode,Menu.Game_over_sprite.visible = true;
                Menu.Pause_sprite.interactive, Menu.Pause_sprite.buttonMode, Menu.Pause_sprite.visible = true;
                Menu.Start_sprite.interactive, Menu.Start_sprite.buttonMode, Menu.Start_sprite.visible = true;
                Menu.Stop_sprite.interactive, Menu.Stop_sprite.buttonMode, Menu.Stop_sprite.visible = true;
                this.Pause_flag = true;
            }
            else{
                _pixiApp.ticker.start();
                console.warn("Started")
                Menu.Game_over_sprite.interactive, Menu.Game_over_sprite.buttonMode,Menu.Game_over_sprite.visible = false;
                Menu.Pause_sprite.interactive, Menu.Pause_sprite.buttonMode, Menu.Pause_sprite.visible = false;
                Menu.Start_sprite.interactive, Menu.Start_sprite.buttonMode, Menu.Start_sprite.visible = false;
                Menu.Stop_sprite.interactive, Menu.Stop_sprite.buttonMode, Menu.Stop_sprite.visible = false;
                this.Pause_flag = false;
            };
        });
    };

    Hero_movement(Hero_speed:number){
        document.addEventListener('keydown', (event)=>{
            //console.log(event.keyCode)// энтер 13 ескейп 27

            if ((event.keyCode == 37) || (event.keyCode == 65)){
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
            };
        })
    };
};