import * as PIXI from 'pixi.js';
import AssetManager from '../AssetsManager.ts';
import Enemy from '../Entity/Enemy.ts';
import Game from '../Game.ts';

export default class Game_Scene extends PIXI.Container{
    Enemy_array:Enemy[][] = [[],[],[]];
    enemy1_count:number = 10;
    enemy2_count: number = 10;
    enemy3_count: number = 10;

    constructor(_pixiApp:PIXI.Application, Assetsload:AssetManager){

        super();
        this.Map_Create(_pixiApp, Assetsload);

        let Enemy1_animations = Game.createanimations(Game.enemy1_walk);
        let Enemy2_animations = Game.createanimations(Game.enemy2_walk);
        let Enemy3_animations = Game.createanimations(Game.enemy3_walk);

        for(let i = 0; i <= this.enemy1_count; i++){
            this.Enemy_array[0].push(new Enemy(_pixiApp))
            this.Enemy_array[0][i].Entity_summon(Enemy1_animations, _pixiApp);
            this.Enemy_array[0][i].Entity_walck(_pixiApp);

        };

        for(let i = 0; i <= this.enemy2_count; i++){
            this.Enemy_array[1].push(new Enemy(_pixiApp))
            this.Enemy_array[1][i].Entity_summon(Enemy2_animations, _pixiApp);
            this.Enemy_array[1][i].Entity_walck(_pixiApp);
        };
        
        for(let i = 0; i <= this.enemy3_count; i++){
            this.Enemy_array[2].push(new Enemy(_pixiApp))
            this.Enemy_array[2][i].Entity_summon(Enemy3_animations, _pixiApp);
            this.Enemy_array[2][i].Entity_walck(_pixiApp);
        };
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