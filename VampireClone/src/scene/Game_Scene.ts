import * as PIXI from 'pixi.js';
import AssetManager from '../AssetsManager.ts';
import Enemy from '../Entity/Enemy.ts';
import Game from '../Game.ts';
import Hero from '../Entity/Hero.ts';

export default class Game_Scene extends PIXI.Container{
    Enemy_array:Enemy[][] = [[],[],[]];
    enemy1_Max_count:number = 3;
    enemy2_Max_count: number = 3;
    enemy3_Max_count: number = 3;
    t1:number = 0;
    t2:number = 0;
    t3:number = 0;

    constructor(_pixiApp:PIXI.Application, Assetsload:AssetManager){

        super();
        this.Map_Create(_pixiApp, Assetsload);

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

        let Health_bar_image = Game.GameLoading.getTexture("Health_bar");
        let Hero_Health_bar_foreground_image = Game.GameLoading.getTexture("Health_bar_foreground_1");

        let Hero_1 =new Hero(   
            _pixiApp,
            Health_bar_image,
            Hero_Health_bar_foreground_image,
            Hero_attack_onehand_animations,
            Hero_attack_twohand_animations,
            Hero_attack_speare_animations,
            Hero_walck_animations,
            Hero_iddle_animations
        );

        Hero_1.Hero_summon(_pixiApp);
        _pixiApp.stage.addChild(Hero_1);

        for(let i = 0; i <= this.enemy1_Max_count; i++){
            this.Enemy_array[0].push(new Enemy(_pixiApp, Enemy1_walck_animations, Enemy1_attack_animations, Enemy1_hit_animations, Health_bar_image))
            this.Enemy_array[0][i].Entity_summon();
            _pixiApp.stage.addChild(this.Enemy_array[0][i]);
        };

        for(let i = 0; i <= this.enemy2_Max_count; i++){
            this.Enemy_array[1].push(new Enemy(_pixiApp, Enemy2_walck_animations, Enemy2_attack_animations, Enemy2_hit_animations, Health_bar_image))
            _pixiApp.stage.addChild(this.Enemy_array[1][i]);
            this.Enemy_array[1][i].Entity_summon();
        };
        
        for(let i = 0; i <= this.enemy3_Max_count; i++){
            this.Enemy_array[2].push(new Enemy(_pixiApp, Enemy3_walck_animations, Enemy3_attack_animations, Enemy3_hit_animations, Health_bar_image))
            _pixiApp.stage.addChild(this.Enemy_array[2][i]);
            this.Enemy_array[2][i].Entity_summon();
        };

        _pixiApp.ticker.add(() => {//Придумать как пополнять противников после их смерти
            Hero_1.Hero_movement(0.01);

            for(let i = 0; i <= this.enemy3_Max_count; i++){
                this.Enemy_array[0][i].Entity_walck(_pixiApp, this.t1);
                this.Enemy_array[1][i].Entity_walck(_pixiApp, this.t2);
                this.Enemy_array[2][i].Entity_walck(_pixiApp, this.t3);
            };

            if (this.t1 >= 1){this.t1 = 0}
			else{this.t1 += 0.001};

            if (this.t2 >= 1){this.t2 = 0}
			else{this.t2 += 0.0015};

            if (this.t3 >= 1){this.t3 = 0}
			else{this.t3 += 0.0017};
        });
    };

    Map_Create(_pixiApp:PIXI.Application, Assetsload:AssetManager)
        {
            let Terrain_tile_1_image = Assetsload.getTexture("Terrain_1");
            let Terrain_tile_2_image = Assetsload.getTexture("Terrain_2");
            let Terrain_tile_3_image  = Assetsload.getTexture("Terrain_3");

            const Terrain_array = [Terrain_tile_1_image , Terrain_tile_2_image, Terrain_tile_3_image];

            let count:number = 0;
            let height: number = 0;
            let width: number = 0;
            let width_step: number = 0;

            while (width <= window.innerWidth) {
                while (height <= window.innerHeight) {
                    let index:number = Math.floor(Math.random() * 3)
                    let Terrain_sprite = new PIXI.Sprite(Terrain_array[index]);
                    Terrain_sprite.anchor.set(0);
                    Terrain_sprite.width = 30;
                    Terrain_sprite.zIndex = 1;
                    Terrain_sprite.x = width;
                    Terrain_sprite.y = Terrain_sprite.height*count;
                    _pixiApp.stage.addChild(Terrain_sprite);
                    count += 1;
                    height += Terrain_sprite.height;
                    width_step = Terrain_sprite.width;
                };
                width += width_step;
                height = 0;
                count = 0;
            };
        };

    
};