import * as PIXI from 'pixi.js';
import * as Game from '../Game.ts';
import AssetManager from '../AssetsManager.ts';

export default class Game_Scene{

    constructor(_pixiApp:PIXI.Application, Assetsload:AssetManager){
        let Terrain_tile_1_image = Assetsload.getTexture("Terrain_1");
        let Terrain_tile_2_image = Assetsload.getTexture("Terrain_2");
        let Terrain_tile_3_image  = Assetsload.getTexture("Terrain_3");

        //let Terrain_tile_1_sprite = new PIXI.Sprite(Terrain_tile_1_image );
        //let Terrain_tile_2_sprite = new PIXI.Sprite(Terrain_tile_2_image );
        //let Terrain_tile_3_sprite = new PIXI.Sprite(Terrain_tile_3_image );

       /* Terrain_tile_2_sprite.width = Terrain_tile_1_sprite.width;
        Terrain_tile_3_sprite.width = Terrain_tile_1_sprite.width;

        console.log(Terrain_tile_1_sprite.height + " " + Terrain_tile_1_sprite.width);
        console.log(Terrain_tile_2_sprite.height + " " + Terrain_tile_2_sprite.width);
        console.log(Terrain_tile_3_sprite.height + " " + Terrain_tile_3_sprite.width);*/

        const Terrain_array = [Terrain_tile_1_image , Terrain_tile_2_image, Terrain_tile_3_image];

        let count:number = 0;
        let height: number = 0;
        let width: number = 0;
        let width_step: number = 30;

        while (width <= window.innerWidth) {
            while (height <= window.innerHeight) {
                let index:number = Math.floor(Math.random() * 3)
                let Terrain_sprite = new PIXI.Sprite(Terrain_array[index]);
                Terrain_sprite.anchor.set(0);
                Terrain_sprite.width = 30;
                Terrain_sprite.x = width;
                Terrain_sprite.y = Terrain_sprite.height*count;
                _pixiApp.stage.addChild(Terrain_sprite);
                count += 1;
                height += Terrain_sprite.height;
            };
            width += width_step;
        };

        

        
        
        

    };

    



};