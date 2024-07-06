import * as PIXI from 'pixi.js';
import * as Game from '../Game.ts';
import AssetManager from '../AssetsManager.ts';

export default class Game_Scene{

    constructor(_pixiApp:PIXI.Application, Assetsload:AssetManager,animations:PIXI.Texture<PIXI.Resource>[][]){
        this.Map_Create(_pixiApp, Assetsload);
        this.Entity_summon(0, 5, animations[3], _pixiApp);
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

    Entity_summon(Entity_count:number, Entity_min_count:number, Entity_walck_animation:PIXI.Texture<PIXI.Resource>[],_pixiApp:PIXI.Application,)
    {
        while (Entity_count <= Entity_min_count) {
            let x_cor:number = Math.floor(Math.random() * window.innerWidth);
            let y_cor:number = Math.floor(Math.random() * window.innerHeight);
            let Entity_sprite = new PIXI.AnimatedSprite(Entity_walck_animation);
            Entity_sprite.anchor.set(0.5);
            Entity_sprite.zIndex = 5
            Entity_sprite.x = x_cor;
            Entity_sprite.y = y_cor;
            Entity_sprite.visible = true;
            Entity_sprite.play;
            _pixiApp.stage.addChild(Entity_sprite); 
            Entity_count += 1; 
            console.log("Entity added");          
        };
    };
};