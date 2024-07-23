import * as PIXI from "pixi.js";

export default class Enemy {
	Entity_sprite: PIXI.AnimatedSprite | undefined;

	constructor(_pixiApp: PIXI.Application) {}

	Entity_summon(
		Entity_walck_animation: PIXI.Texture<PIXI.Resource>[],
		_pixiApp: PIXI.Application
	) {
		let x_cor: number = Math.floor(Math.random() * window.innerWidth);
		let y_cor: number = Math.floor(Math.random() * window.innerHeight);
		this.Entity_sprite = new PIXI.AnimatedSprite(Entity_walck_animation);
		this.Entity_sprite.anchor.set(0.5);
		this.Entity_sprite.scale.set(1);
		//this.Entity_sprite.zIndex = 5
		this.Entity_sprite.x = window.innerWidth / 2;
		this.Entity_sprite.y = window.innerHeight / 2;
		this.Entity_sprite.visible = true;
		// Это функция, так что её нужно вызвать
		this.Entity_sprite.play();
		// возможно пригодится этот параметр
		//animatedEnemy.animationSpeed = 0.2;
		_pixiApp.stage.addChild(this.Entity_sprite);
		console.log("Entity added");
	}
}
