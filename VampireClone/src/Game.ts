import * as PIXI from "pixi.js";
import AssetManager from "./AssetsManager.ts";
import Menu from "./scene/Menu_scene.ts";

export default class Game {
	resources: any;
	// сделал статиком, просто чтобы было удобнее обращаться в примере.
	// но это грязь и лучше будет переделать
	static GameLoading = new AssetManager();
	Scene: any;
	renderer = PIXI.autoDetectRenderer();
	static coin1_array: string[] = [];
	static coin2_array: string[] = [];
	static coin3_array: string[] = [];
	static enemy1_walk: string[] = [];
	static enemy1_attack: string[] = [];
	static enemy2_walk: string[] = [];
	static enemy2_attack: string[] = [];
	static enemy3_walk: string[] = [];
	static enemy3_attack: string[] = [];
	static salesman_iddle: string[] = [];
	static salesman_shop: string[] = [];
	static gg_idle: string[] = [];
	static gg_walk: string[] = [];
	static gg_onehand: string[] = [];
	static gg_twohand: string[] = [];
	static gg_spear: string[] = [];
	static button_image_map: Map<string, PIXI.Texture<PIXI.Resource>> = new Map<string, PIXI.Texture<PIXI.Resource>>()
	static onehand: string[] = [];
	static twohand: string[] = [];
	static spear: string[] = [];

	constructor(_pixiApp: PIXI.Application) {}

	/* 
    Ну и главный прикол, почему у тебя пикчи не грузились.
    Потому что ты... неправильно указал названия загружаемых файлов))000
    И пикси не найдя их, просто создавал пустышку.
    ["Enemy_1_walk_1", "./assets/entity/enemy1/enemy1walck1.png"],
    ["Enemy_1_walk_2", "./assets/entity/enemy1/enemy1walck2.png"],
    ["Enemy_1_walk_3", "./assets/entity/enemy1/enemy1walck3.png"],
    ["Enemy_1_walk_4", "./assets/entity/enemy1/enemy1walck4.png"], 
    */

	async loading(_pixiApp: PIXI.Application) {
		await Game.GameLoading.preload([
			["Game_over_buttn", "./assets/buttons/button_Game_over.jpg"],// поменять на пнг
			["Pause_buttn", "./assets/buttons/button_pause.png"],
			["Start_new_game_buttn", "./assets/buttons/button_start_game.jpg"], // поменять на пнг
			["Start_buttn", "./assets/buttons/button_start.png"],
			["Stop_buttn", "./assets/buttons/button_stop.png"],
			["Salesman_iddle_1", "./assets/salesman/salesman_idle1.png"],
			["Salesman_iddle_2", "./assets/salesman/salesman_idle2.png"],
			["Salesman_iddle_3", "./assets/salesman/salesman_idle3.png"],
			["Salesman_iddle_4", "./assets/salesman/salesman_idle4.png"],
			["Salesman_shop_1", "./assets/salesman/salesman_shop1.png"],
			["Salesman_shop_2", "./assets/salesman/salesman_shop2.png"],
			["Terrain_1", "./assets/terrain/terrain1.png"],
			["Terrain_2", "./assets/terrain/terrain2.png"],
			["Terrain_3", "./assets/terrain/terrain3.png"],
			["Health_bar", "./assets/Helthbar/enemy_health_bar_001.png"],
			[
				"Health_bar_foreground_1",
				"./assets/Helthbar/enemy_health_bar_foreground_004.png",
			],
			[
				"Health_bar_foreground_2",
				"./assets/Helthbar/enemy_health_bar_foreground_005.png",
			],
			["GG_idle_1", "./assets/gg/idle/gg_idle_1.png"],
			["GG_idle_2", "./assets/gg/idle/gg_idle_2.png"],
			["GG_idle_3", "./assets/gg/idle/gg_idle_3.png"],
			["GG_idle_4", "./assets/gg/idle/gg_idle_4.png"],
			["GG_idle_5", "./assets/gg/idle/gg_idle_5.png"],
			["GG_idle_6", "./assets/gg/idle/gg_idle_6.png"],
			["GG_idle_7", "./assets/gg/idle/gg_idle_7.png"],
			["GG_idle_8", "./assets/gg/idle/gg_idle_8.png"],
			["GG_onehand_1", "./assets/gg/onehand/gg_onehand_1.png"],
			["GG_onehand_2", "./assets/gg/onehand/gg_onehand_2.png"],
			["GG_onehand_3", "./assets/gg/onehand/gg_onehand_3.png"],
			["GG_onehand_4", "./assets/gg/onehand/gg_onehand_4.png"],
			["GG_onehand_5", "./assets/gg/onehand/gg_onehand_5.png"],
			["GG_onehand_6", "./assets/gg/onehand/gg_onehand_6.png"],
			["GG_onehand_7", "./assets/gg/onehand/gg_onehand_7.png"],
			["GG_twohand_1", "./assets/gg/twohand/gg_twohand_1.png"],
			["GG_twohand_2", "./assets/gg/twohand/gg_twohand_2.png"],
			["GG_twohand_3", "./assets/gg/twohand/gg_twohand_3.png"],
			["GG_twohand_4", "./assets/gg/twohand/gg_twohand_4.png"],
			["GG_twohand_5", "./assets/gg/twohand/gg_twohand_5.png"],
			["GG_twohand_6", "./assets/gg/twohand/gg_twohand_6.png"],
			["GG_twohand_7", "./assets/gg/twohand/gg_twohand_7.png"],
			["GG_spear_1", "./assets/gg/spear/gg_spear_1.png"],
			["GG_spear_2", "./assets/gg/spear/gg_spear_2.png"],
			["GG_spear_3", "./assets/gg/spear/gg_spear_3.png"],
			["GG_spear_4", "./assets/gg/spear/gg_spear_4.png"],
			["GG_spear_5", "./assets/gg/spear/gg_spear_5.png"],
			["GG_spear_6", "./assets/gg/spear/gg_spear_6.png"],
			["GG_spear_7", "./assets/gg/spear/gg_spear_7.png"],
			["GG_walk_1", "./assets/gg/walk/gg_walk_1.png"],
			["GG_walk_2", "./assets/gg/walk/gg_walk_2.png"],
			["GG_walk_3", "./assets/gg/walk/gg_walk_3.png"],
			["GG_walk_4", "./assets/gg/walk/gg_walk_4.png"],
			["Enemy_1_hit", "./assets/entity/enemy1/enemy1_hit.png"],
			["Enemy_1_attack_1", "./assets/entity/enemy1/enemy1attack1.png"],
			["Enemy_1_attack_2", "./assets/entity/enemy1/enemy1attack2.png"],
			["Enemy_1_attack_3", "./assets/entity/enemy1/enemy1attack3.png"],
			["Enemy_1_walk_1", "./assets/entity/enemy1/enemy1walck1.png"],
			["Enemy_1_walk_2", "./assets/entity/enemy1/enemy1walck2.png"],
			["Enemy_1_walk_3", "./assets/entity/enemy1/enemy1walck3.png"],
			["Enemy_1_walk_4", "./assets/entity/enemy1/enemy1walck4.png"],
			["Enemy_2_hit", "./assets/entity/enemy2/enemy2_hit.png"],
			["Enemy_2_attack_1", "./assets/entity/enemy2/enemy2_attack1.png"],
			["Enemy_2_attack_2", "./assets/entity/enemy2/enemy2_attack2.png"],
			["Enemy_2_attack_3", "./assets/entity/enemy2/enemy2_attack3.png"],
			["Enemy_2_walk_1", "./assets/entity/enemy2/enemy2_walck1.png"],
			["Enemy_2_walk_2", "./assets/entity/enemy2/enemy2_walck2.png"],
			["Enemy_2_walk_3", "./assets/entity/enemy2/enemy2_walck3.png"],
			["Enemy_2_walk_4", "./assets/entity/enemy2/enemy2_walck4.png"],
			["Enemy_3_hit", "./assets/entity/enemy3/enemy3_hit.png"],
			["Enemy_3_attack_1", "./assets/entity/enemy3/enemy3_attack1.png"],
			["Enemy_3_attack_2", "./assets/entity/enemy3/enemy3_attack2.png"],
			["Enemy_3_attack_3", "./assets/entity/enemy3/enemy3_attack3.png"],
			["Enemy_3_walk_1", "./assets/entity/enemy3/enemy3_walck1.png"],
			["Enemy_3_walk_2", "./assets/entity/enemy3/enemy3_walck2.png"],
			["Enemy_3_walk_3", "./assets/entity/enemy3/enemy3_walck3.png"],
			["Enemy_3_walk_4", "./assets/entity/enemy3/enemy3_walck4.png"],
			["Coin1_1", "./assets/coins/Coin1/coins_1_animation_1.png"],
			["Coin1_2", "./assets/coins/Coin1/coins_1_animation_2.png"],
			["Coin1_3", "./assets/coins/Coin1/coins_1_animation_3.png"],
			["Coin1_4", "./assets/coins/Coin1/coins_1_animation_4.png"],
			["Coin1_5", "./assets/coins/Coin1/coins_1_animation_5.png"],
			["Coin1_6", "./assets/coins/Coin1/coins_1_animation_6.png"],
			["Coin1_7", "./assets/coins/Coin1/coins_1_animation_7.png"],
			["Coin1_8", "./assets/coins/Coin1/coins_1_animation_8.png"],
			["Coin2_1", "./assets/coins/coin2/coins_2_animation_1.png"],
			["Coin2_2", "./assets/coins/coin2/coins_2_animation_2.png"],
			["Coin2_3", "./assets/coins/coin2/coins_2_animation_3.png"],
			["Coin2_4", "./assets/coins/coin2/coins_2_animation_4.png"],
			["Coin2_5", "./assets/coins/coin2/coins_2_animation_5.png"],
			["Coin2_6", "./assets/coins/coin2/coins_2_animation_6.png"],
			["Coin2_7", "./assets/coins/coin2/coins_2_animation_7.png"],
			["Coin2_8", "./assets/coins/coin2/coins_2_animation_8.png"],
			["Coin3_1", "./assets/coins/coin3/coins_3_animation_1.png"],
			["Coin3_2", "./assets/coins/coin3/coins_3_animation_2.png"],
			["Coin3_3", "./assets/coins/coin3/coins_3_animation_3.png"],
			["Coin3_4", "./assets/coins/coin3/coins_3_animation_4.png"],
			["Coin3_5", "./assets/coins/coin3/coins_3_animation_5.png"],
			["Coin3_6", "./assets/coins/coin3/coins_3_animation_6.png"],
			["Coin3_7", "./assets/coins/coin3/coins_3_animation_7.png"],
			["Coin3_8", "./assets/coins/coin3/coins_3_animation_8.png"],
			["Onehand_sword","./assets/weapon/onehand_sword.png"],
			["Onehand-1","./assets/weapon/onehand-1.png"],
			["Onehand-2","./assets/weapon/onehand-2.png"],
			["Onehand-3","./assets/weapon/onehand-3.png"],
			["Onehand-4","./assets/weapon/onehand-4.png"],
			["Onehand-5","./assets/weapon/onehand-5.png"],
			["Onehand-6","./assets/weapon/onehand-6.png"],
			["Twohand_sword","./assets/weapon/twohand_sword.png"],
			["Twohand-1","./assets/weapon/twohand-1.png"],
			["Twohand-2","./assets/weapon/twohand-2.png"],
			["Twohand-3","./assets/weapon/twohand-3.png"],
			["Twohand-4","./assets/weapon/twohand-4.png"],
			["Twohand-5","./assets/weapon/twohand-5.png"],
			["Twohand-6","./assets/weapon/twohand-6.png"],
			["Spear","./assets/weapon/spear.png"],
			["Spear-1","./assets/weapon/spear-1.png"],
			["Spear-2","./assets/weapon/spear-2.png"],
			["Spear-3","./assets/weapon/spear-3.png"],
			["Spear-4","./assets/weapon/spear-4.png"],
			["Spear-5","./assets/weapon/spear-5.png"],
			["Spear-6","./assets/weapon/spear-6.png"],
			
		]);

		Game.button_image_map.set("Start_new_game_buttn",Game.GameLoading.getTexture("Start_new_game_buttn"));
		Game.button_image_map.set("Game_over_buttn",Game.GameLoading.getTexture("Game_over_buttn"));
		Game.button_image_map.set("Pause_buttn",Game.GameLoading.getTexture("Pause_buttn"));
		Game.button_image_map.set("Start_buttn",Game.GameLoading.getTexture("Start_buttn"));
		Game.button_image_map.set("Stop_buttn",Game.GameLoading.getTexture("Stop_buttn"));
		
		Game.coin1_array = [
			"Coin1_1",
			"Coin1_2",
			"Coin1_3",
			"Coin1_4",
			"Coin1_5",
			"Coin1_6",
			"Coin1_7",
			"Coin1_8",
		];
		Game.coin2_array = [
			"Coin2_1",
			"Coin2_2",
			"Coin2_3",
			"Coin2_4",
			"Coin2_5",
			"Coin2_6",
			"Coin2_7",
			"Coin2_8",
		];
		Game.coin3_array = [
			"Coin3_1",
			"Coin3_2",
			"Coin3_3",
			"Coin3_4",
			"Coin3_5",
			"Coin3_6",
			"Coin3_7",
			"Coin3_8",
		];
		Game.enemy1_walk = [
			"Enemy_1_walk_1",
			"Enemy_1_walk_2",
			"Enemy_1_walk_3",
			"Enemy_1_walk_4",
		];
		Game.enemy1_attack = [
			"Enemy_1_attack_1",
			"Enemy_1_attack_2",
			"Enemy_1_attack_3",
		];
		Game.enemy2_walk = [
			"Enemy_2_walk_1",
			"Enemy_2_walk_2",
			"Enemy_2_walk_3",
			"Enemy_2_walk_4",
		];
		Game.enemy2_attack = [
			"Enemy_2_attack_1",
			"Enemy_2_attack_2",
			"Enemy_2_attack_3",
		];
		Game.enemy3_walk = [
			"Enemy_3_walk_1",
			"Enemy_3_walk_2",
			"Enemy_3_walk_3",
			"Enemy_3_walk_4",
		];
		Game.enemy3_attack = [
			"Enemy_3_attack_1",
			"Enemy_3_attack_2",
			"Enemy_3_attack_3",
		];
		Game.salesman_iddle = [
			"Salesman_iddle_1",
			"Salesman_iddle_2",
			"Salesman_iddle_3",
			"Salesman_iddle_4",
		];
		Game.salesman_shop = ["Salesman_shop_1", "Salesman_shop_1"];
		Game.gg_idle = [
			"GG_idle_1",
			"GG_idle_2",
			"GG_idle_3",
			"GG_idle_4",
			"GG_idle_5",
			"GG_idle_6",
			"GG_idle_7",
			"GG_idle_8",
		];
		Game.gg_walk = ["GG_walk_1", "GG_walk_2", "GG_walk_3", "GG_walk_4"];
		Game.gg_onehand = [
			"GG_onehand_1",
			"GG_onehand_2",
			"GG_onehand_3",
			"GG_onehand_4",
			"GG_onehand_5",
			"GG_onehand_6",
			"GG_onehand_7",
		];
		Game.gg_twohand = [
			"GG_twohand_1",
			"GG_twohand_2",
			"GG_twohand_3",
			"GG_twohand_4",
			"GG_twohand_5",
			"GG_twohand_6",
			"GG_twohand_7",
		];
		Game.gg_spear = [
			"GG_spear_1",
			"GG_spear_2",
			"GG_spear_3",
			"GG_spear_4",
			"GG_spear_5",
			"GG_spear_6",
			"GG_spear_7",
		];
		Game.onehand = [
			"Onehand-1",
			"Onehand-2",
			"Onehand-3",
			"Onehand-4",
			"Onehand-5",
			"Onehand-6",			
		];
		Game.twohand = [
			"Twohand-1",
			"Twohand-2",
			"Twohand-3",
			"Twohand-4",
			"Twohand-5",
			"Twohand-6",			
		];
		Game.spear = [
			"Spear-1",
			"Spear-2",
			"Spear-3",
			"Spear-4",
			"Spear-5",
			"Spear-6",			
		];

		new Menu(_pixiApp, Game.GameLoading);
	}

	static createanimations(images_array: string[]): PIXI.Texture[] {
		let texture_array: PIXI.Texture[] = [];
		images_array.forEach((image) => {
			// Если не ошибаюсь, когда ты вызываешь метод PIXI.Texture.from
			// он загружает текстуру. А у тебя все текстуры уже есть в ресурсах
			let texture = Game.GameLoading.getTexture(image);
			texture_array.push(texture);
		});
		return texture_array;
	}
}
