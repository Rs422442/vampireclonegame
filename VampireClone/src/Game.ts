import * as PIXI from 'pixi.js';
import AssetManager from './AssetsManager.ts';

export default class Game{

    resources: any;
    GameLoading = new AssetManager(); 
    Scene:any;
    renderer = PIXI.autoDetectRenderer();

    constructor(_pixiApp:PIXI.Application)
    {
              
    };

    async loading(_pixiApp:PIXI.Application){
        await this.GameLoading.preload
            ([
                ["Game_over_buttn","./assets/buttons/button_Game_over.jpg"],
                ["Pause_buttn","./assets/buttons/button_pause.png"],
                ["Start_new_game_buttn","./assets/buttons/button_start_game.jpg"],
                ["Start_buttn","./assets/buttons/button_start.png"],
                ["Stop_buttn","./assets/buttons/button_stop.png"],
                ["Salesman_iddle_1","./assets/salesman/salesman_iddle1.png"],
                ["Salesman_iddle_2","./assets/salesman/salesman_iddle2.png"],
                ["Salesman_iddle_3","./assets/salesman/salesman_iddle3.png"],
                ["Salesman_iddle_4","./assets/salesman/salesman_iddle4.png"],
                ["Salesman_shop_1","./assets/salesman/salesman_shop1.png"],
                ["Salesman_shop_2","./assets/salesman/salesman_shop2.png"],
                ["Terrain_1","./assets/terrain/terrain1.png"],
                ["Terrain_2","./assets/terrain/terrain2.png"],
                ["Terrain_3","./assets/terrain/terrain3.png"],
                ["Helth_bar","./assets/Helthbar/enemy_helth_bar_001.png"],
                ["Helth_bar_foreground_1","./assets/Helthbar/enemy_helth_bar_foreground_004.png"],
                ["Helth_bar_foreground_2","./assets/Helthbar/enemy_helth_bar_foreground_005.png"],
                ["GG_idle_1","./assets/gg/idle/gg_idle_1.png"],
                ["GG_idle_2","./assets/gg/idle/gg_idle_2.png"],
                ["GG_idle_3","./assets/gg/idle/gg_idle_3.png"],
                ["GG_idle_4","./assets/gg/idle/gg_idle_4.png"],
                ["GG_idle_5","./assets/gg/idle/gg_idle_5.png"],
                ["GG_idle_6","./assets/gg/idle/gg_idle_6.png"],
                ["GG_idle_7","./assets/gg/idle/gg_idle_7.png"],
                ["GG_idle_8","./assets/gg/idle/gg_idle_8.png"],
                ["GG_onehand_1","./assets/gg/onehand/gg_onehand_1.png"],
                ["GG_onehand_2","./assets/gg/onehand/gg_onehand_2.png"],
                ["GG_onehand_3","./assets/gg/onehand/gg_onehand_3.png"],
                ["GG_onehand_4","./assets/gg/onehand/gg_onehand_4.png"],
                ["GG_onehand_5","./assets/gg/onehand/gg_onehand_5.png"],
                ["GG_onehand_6","./assets/gg/onehand/gg_onehand_6.png"],
                ["GG_onehand_7","./assets/gg/onehand/gg_onehand_7.png"],
                ["GG_twohand_1","./assets/gg/twohand/gg_twohand_1.png"],
                ["GG_twohand_2","./assets/gg/twohand/gg_twohand_2.png"],
                ["GG_twohand_3","./assets/gg/twohand/gg_twohand_3.png"],
                ["GG_twohand_4","./assets/gg/twohand/gg_twohand_4.png"],
                ["GG_twohand_5","./assets/gg/twohand/gg_twohand_5.png"],
                ["GG_twohand_6","./assets/gg/twohand/gg_twohand_6.png"],
                ["GG_twohand_7","./assets/gg/twohand/gg_twohand_7.png"],
                ["GG_spear_1","./assets/gg/spear/gg_spear_1.png"],
                ["GG_spear_2","./assets/gg/spear/gg_spear_2.png"],
                ["GG_spear_3","./assets/gg/spear/gg_spear_3.png"],
                ["GG_spear_4","./assets/gg/spear/gg_spear_4.png"],
                ["GG_spear_5","./assets/gg/spear/gg_spear_5.png"],
                ["GG_spear_6","./assets/gg/spear/gg_spear_6.png"],
                ["GG_spear_7","./assets/gg/spear/gg_spear_7.png"],
                ["GG_walk_1","./assets/gg/walk/gg_walk_1.png"],
                ["GG_walk_2","./assets/gg/walk/gg_walk_2.png"],
                ["GG_walk_3","./assets/gg/walk/gg_walk_3.png"],
                ["GG_walk_4","./assets/gg/walk/gg_walk_4.png"],
                ["Enemy_1_hit","./assets/entity/enemy1/enemy1_hit.png"],
                ["Enemy_1_attack_1","./assets/entity/enemy1/enemy1attack1.png"],
                ["Enemy_1_attack_2","./assets/entity/enemy1/enemy1attack2.png"],
                ["Enemy_1_attack_3","./assets/entity/enemy1/enemy1attack3.png"],
                ["Enemy_1_walk_1","./assets/entity/enemy1/enemy1walk1.png"],
                ["Enemy_1_walk_2","./assets/entity/enemy1/enemy1walk2.png"],
                ["Enemy_1_walk_3","./assets/entity/enemy1/enemy1walk3.png"],
                ["Enemy_1_walk_4","./assets/entity/enemy1/enemy1walk4.png"],
                ["Enemy_2_hit","./assets/entity/enemy2/enemy2_hit.png"],
                ["Enemy_2_attack_1","./assets/entity/enemy2/enemy2attack1.png"],
                ["Enemy_2_attack_2","./assets/entity/enemy2/enemy2attack2.png"],
                ["Enemy_2_attack_3","./assets/entity/enemy2/enemy2attack3.png"],
                ["Enemy_2_walk_1","./assets/entity/enemy2/enemy2walk1.png"],
                ["Enemy_2_walk_2","./assets/entity/enemy2/enemy2walk2.png"],
                ["Enemy_2_walk_3","./assets/entity/enemy2/enemy2walk3.png"],
                ["Enemy_2_walk_4","./assets/entity/enemy2/enemy2walk4.png"],
                ["Enemy_3_hit","./assets/entity/enemy3/enemy3_hit.png"],
                ["Enemy_3_attack_1","./assets/entity/enemy3/enemy3attack1.png"],
                ["Enemy_3_attack_2","./assets/entity/enemy3/enemy3attack2.png"],
                ["Enemy_3_attack_3","./assets/entity/enemy3/enemy3attack3.png"],
                ["Enemy_3_walk_1","./assets/entity/enemy3/enemy3walk1.png"],
                ["Enemy_3_walk_2","./assets/entity/enemy3/enemy3walk2.png"],
                ["Enemy_3_walk_3","./assets/entity/enemy3/enemy3walk3.png"],
                ["Enemy_3_walk_4","./assets/entity/enemy3/enemy3walk4.png"],
                ["Coin1_1","./assets/coins/Coin1/coins_1_animation_1.png"],
                ["Coin1_2","./assets/coins/Coin1/coins_1_animation_2.png"],
                ["Coin1_3","./assets/coins/Coin1/coins_1_animation_3.png"],
                ["Coin1_4","./assets/coins/Coin1/coins_1_animation_4.png"],
                ["Coin1_5","./assets/coins/Coin1/coins_1_animation_5.png"],
                ["Coin1_6","./assets/coins/Coin1/coins_1_animation_6.png"],
                ["Coin1_7","./assets/coins/Coin1/coins_1_animation_7.png"],
                ["Coin1_8","./assets/coins/Coin1/coins_1_animation_8.png"],
                ["Coin2_1","./assets/coins/coin2/coins_2_animation_1.png"],
                ["Coin2_2","./assets/coins/coin2/coins_2_animation_2.png"],
                ["Coin2_3","./assets/coins/coin2/coins_2_animation_3.png"],
                ["Coin2_4","./assets/coins/coin2/coins_2_animation_4.png"],
                ["Coin2_5","./assets/coins/coin2/coins_2_animation_5.png"],
                ["Coin2_6","./assets/coins/coin2/coins_2_animation_6.png"],
                ["Coin2_7","./assets/coins/coin2/coins_2_animation_7.png"],
                ["Coin2_8","./assets/coins/coin2/coins_2_animation_8.png"],
                ["Coin3_1","./assets/coins/coin3/coins_3_animation_1.png"],
                ["Coin3_2","./assets/coins/coin3/coins_3_animation_2.png"],
                ["Coin3_3","./assets/coins/coin3/coins_3_animation_3.png"],
                ["Coin3_4","./assets/coins/coin3/coins_3_animation_4.png"],
                ["Coin3_5","./assets/coins/coin3/coins_3_animation_5.png"],
                ["Coin3_6","./assets/coins/coin3/coins_3_animation_6.png"],
                ["Coin3_7","./assets/coins/coin3/coins_3_animation_7.png"],
                ["Coin3_8","./assets/coins/coin3/coins_3_animation_8.png"]
            ]);
        
        this.buttoncreate(_pixiApp,"Start_new_game_buttn", 1,window.innerWidth/2, window.innerWidth/5 , true, true, true);
    };

    buttoncreate(_pixiApp:PIXI.Application, key:string, scale:number,setx:number, sety:number, buttonmode: boolean,interactive:boolean,visible:boolean)
    {
        let image = this.GameLoading.getTexture(key);
        let buttonsprite = new PIXI.Sprite(image);
        buttonsprite.anchor.set(0.5);
        buttonsprite.scale.set(scale);
        buttonsprite.interactive = interactive;
        buttonsprite.buttonMode = buttonmode;
        buttonsprite.visible = visible;
        buttonsprite.x = setx;
        buttonsprite.y = sety;
        buttonsprite.on('click',(event)=>{
            console.warn("buttonsprite work");
        });
        _pixiApp.stage.addChild(buttonsprite);
        console.warn("buttonsprite create");

        
    };
};