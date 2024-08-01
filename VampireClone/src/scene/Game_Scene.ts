import * as PIXI from 'pixi.js';
import AssetManager from '../AssetsManager.ts';
import Enemy from '../Entity/Enemy.ts';
import Game from '../Game.ts';
import Hero from '../Entity/Hero.ts';
import Shopman from '../Entity/Shopman.ts';
import Pause from './Pause_Scene.ts';

export default class Game_Scene extends PIXI.Container{
    static Enemy_array:Enemy[][] = [[],[],[]];
    enemy1_Max_count:number = 3;
    enemy2_Max_count: number = 3;
    enemy3_Max_count: number = 3;
    static Enemy1_speed: number = 0.001; 
    static Enemy2_speed: number = 0.0015; 
    static Enemy3_speed: number = 0.0017; 
    t1:number = 0;
    t2:number = 0;
    t3:number = 0;
    Game_over_buttn_image!:PIXI.Texture<PIXI.Resource>;
    Pause_buttn_image!:PIXI.Texture<PIXI.Resource>;
    Start_buttn_image!:PIXI.Texture<PIXI.Resource>;
    Stop_buttn_image!:PIXI.Texture<PIXI.Resource>;
    Pause_flag:boolean = false;
    

    constructor(_pixiApp:PIXI.Application, Assetsload:AssetManager){

        super();
        this.Map_Create(Assetsload);

        this.Game_over_buttn_image = Assetsload.getTexture("Game_over_buttn");
        this.Pause_buttn_image = Assetsload.getTexture("Pause_buttn");
        this.Start_buttn_image = Assetsload.getTexture("Start_buttn");
        this.Stop_buttn_image = Assetsload.getTexture("Stop_buttn");

        let Enemy1_walck_animations = Game.createanimations(Game.enemy1_walk);
        let Enemy2_walck_animations = Game.createanimations(Game.enemy2_walk);
        let Enemy3_walck_animations = Game.createanimations(Game.enemy3_walk);

        let Enemy1_attack_animations = Game.createanimations(Game.enemy1_walk);
        let Enemy2_attack_animations = Game.createanimations(Game.enemy2_walk);
        let Enemy3_attack_animations = Game.createanimations(Game.enemy3_walk);

        let Enemy1_hit_animations = Game.createanimations(Game.enemy1_walk);
        let Enemy2_hit_animations = Game.createanimations(Game.enemy2_walk);
        let Enemy3_hit_animations = Game.createanimations(Game.enemy3_walk);

        let Hero_attack_onehand_animations = Game.createanimations(Game.gg_onehand);
        let Hero_attack_twohand_animations = Game.createanimations(Game.gg_twohand);
        let Hero_attack_speare_animations = Game.createanimations(Game.gg_spear);
        let Hero_iddle_animations = Game.createanimations(Game.gg_idle);
        let Hero_walck_animations = Game.createanimations(Game.gg_walk);

        let Shopman_iddle_animation = Game.createanimations(Game.salesman_iddle);
        let Shopman_Open_shop_animation = Game.createanimations(Game.salesman_shop);

        let Health_bar_image = Game.GameLoading.getTexture("Health_bar");
        let Hero_Health_bar_foreground_image = Game.GameLoading.getTexture("Health_bar_foreground_1");

        let Hero_1 =new Hero(   
            _pixiApp,
            Assetsload,
            Health_bar_image,
            Hero_Health_bar_foreground_image,
            Hero_attack_onehand_animations,
            Hero_attack_twohand_animations,
            Hero_attack_speare_animations,
            Hero_walck_animations,
            Hero_iddle_animations
        );

        let Shopmen_1 = new Shopman(_pixiApp, Shopman_iddle_animation, Shopman_Open_shop_animation);

        Hero_1.Hero_summon();
        Shopmen_1.Shopman_spawn();

        this.addChild(Hero_1);
        this.addChild(Shopmen_1);



        for(let i = 0; i <= this.enemy1_Max_count - 1; i++){
            Game_Scene.Enemy_array[0].push(new Enemy(_pixiApp, Enemy1_walck_animations, Enemy1_attack_animations, Enemy1_hit_animations, Health_bar_image))
            Game_Scene.Enemy_array[0][i].Entity_summon();
            this.addChild(Game_Scene.Enemy_array[0][i]);
        };

        for(let i = 0; i <= this.enemy2_Max_count - 1; i++){
            Game_Scene.Enemy_array[1].push(new Enemy(_pixiApp, Enemy2_walck_animations, Enemy2_attack_animations, Enemy2_hit_animations, Health_bar_image))
            this.addChild(Game_Scene.Enemy_array[1][i]);
            Game_Scene.Enemy_array[1][i].Entity_summon();
        };
        
        for(let i = 0; i <= this.enemy3_Max_count - 1; i++){
            Game_Scene.Enemy_array[2].push(new Enemy(_pixiApp, Enemy3_walck_animations, Enemy3_attack_animations, Enemy3_hit_animations, Health_bar_image))
            this.addChild(Game_Scene.Enemy_array[2][i]);
            Game_Scene.Enemy_array[2][i].Entity_summon();
        };
        Hero_1.Hero_movement();

        //this.Pause_event(_pixiApp);        

        _pixiApp.ticker.add(() => {//Придумать как пополнять противников после их смерти
            
            
            
            for(let i = 0; i <= this.enemy3_Max_count - 1; i++){
                Game_Scene.Enemy_array[0][i].Entity_walck(_pixiApp, this.t1);
                Game_Scene.Enemy_array[1][i].Entity_walck(_pixiApp, this.t2);
                Game_Scene.Enemy_array[2][i].Entity_walck(_pixiApp, this.t3);
            };

            if (this.t1 >= 1){this.t1 = 0}
			else{this.t1 += Game_Scene.Enemy1_speed};

            if (this.t2 >= 1){this.t2 = 0}
			else{this.t2 += Game_Scene.Enemy1_speed};

            if (this.t3 >= 1){this.t3 = 0}
			else{this.t3 += Game_Scene.Enemy1_speed};
        });
    };

    Map_Create(Assetsload:AssetManager):PIXI.Container
        {
            let Terrain_tile_1_image = Assetsload.getTexture("Terrain_1");
            let Terrain_tile_2_image = Assetsload.getTexture("Terrain_2");
            let Terrain_tile_3_image  = Assetsload.getTexture("Terrain_3");

            const Terrain_array = [Terrain_tile_1_image , Terrain_tile_2_image, Terrain_tile_3_image];

            let count:number = 0;
            let height: number = 0;
            let width: number = 0;
            let width_step: number = 0;
            this.width = window.innerWidth;
            this.height = window.innerHeight;

            while (width <= window.innerWidth) {
                while (height <= window.innerHeight) {
                    let index:number = Math.floor(Math.random() * 3)
                    let Terrain_sprite = new PIXI.Sprite(Terrain_array[index]);
                    Terrain_sprite.anchor.set(0);
                    Terrain_sprite.width = 30;
                    Terrain_sprite.x = width;
                    Terrain_sprite.y = Terrain_sprite.height*count;
                    this.addChild(Terrain_sprite);
                    count += 1;
                    height += Terrain_sprite.height;
                    width_step = Terrain_sprite.width;
                };
                width += width_step;
                height = 0;
                count = 0;
            };
            return this;
        };

        /*Pause_event(
            _pixiApp:PIXI.Application 
        ) {
            document.addEventListener('keydown', (event)=>{
                let pause = new Pause(_pixiApp, this.Game_over_buttn_image, this.Pause_buttn_image,this.Start_buttn_image,this.Stop_buttn_image);
                if ((event.keyCode == 27)&&(this.Pause_flag  == false)){
                    this.addChild(pause);
                    _pixiApp.ticker.stop();
                    console.warn("Paused")
                    this.Pause_flag = true;
                }
                else{
                    _pixiApp.ticker.start();
                    console.warn("Started")
                    this.Pause_flag = false;
                    this.removeChild(pause);
                };
            });
        };*/
};