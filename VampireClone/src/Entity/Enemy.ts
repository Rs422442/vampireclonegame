import * as PIXI from "pixi.js";
import Entity from "./Entity";

export default class Enemy extends Entity {
	Sprite!: PIXI.AnimatedSprite;
	x_cor: number = Math.floor(Math.random() * window.innerWidth);
	y_cor: number = Math.floor(Math.random() * window.innerHeight);
	Enemy_direction:number = 0.5;
	Enemy_animations_map: Map<string, PIXI.Texture<PIXI.Resource>[]>
	Health_bar_image: PIXI.Texture<PIXI.Resource>;
	points:number[][] = [[],[],[],[]];
	last_x_cor:number = super.x;

	constructor(
		_pixiApp: PIXI.Application,
		_Enemy_animations_map: Map<string, PIXI.Texture<PIXI.Resource>[]>,
		_Health_bar_image: PIXI.Texture<PIXI.Resource>,
	) {
		super();
		this.Enemy_animations_map = _Enemy_animations_map;
		this.Health_bar_image = _Health_bar_image;

		this.Enemy_summon();
	};

	Enemy_summon(
	): PIXI.Container {
		let walk_textures: PIXI.Texture<PIXI.Resource>[];
		
		if (this.Enemy_animations_map.get("walk") != undefined)
            {walk_textures = this.Enemy_animations_map.get("walk")}
        else{walk_textures = [PIXI.Texture.EMPTY]};

		this.Sprite = this.Entity_summon(walk_textures, 0.5, 1, this.Enemy_direction, 0.5, 0.15);

		let Health_bar: PIXI.Sprite =this.Entity_health_bar_summon(this.Health_bar_image, 0.5, 1, 100, 15);
        Health_bar.y = this.Sprite.y - this.Sprite.height;

		this.x = this.x_cor;
		this.y = this.y_cor;

		this.addChild(this.Sprite); //_pixiApp.stage.addChild(this.Entity_sprite);
		this.addChild(Health_bar);
		
		console.log("Entity added");

		return this;
	};

	Enemy_walck(
		t:number
	) {
			if ((t == 0)){
				this.points[0][0] = super.x;
				this.points[0][1] = super.y;
				for(let i = 1; i <= 3; i++){
					this.points[i][0] = Math.floor(Math.random() * window.innerWidth);
					this.points[i][1] = Math.floor(Math.random() * window.innerHeight);
				};
			};

			if (this.last_x_cor > super.x){
				this.Enemy_direction = -0.5;
			}
			else{
				this.Enemy_direction = 0.5;
			};
			
			this.Sprite.scale.x = this.Enemy_direction;
			this.last_x_cor = super.x;

			let New_xy_cor = this.besie(this.points[0], this.points[1], this.points[2], this.points[3], t)
			super.x = New_xy_cor[0];
			super.y = New_xy_cor[1];
	};

	private besie(
		p0:number[],
		p1:number[],
		p2:number[],
		p3:number[],
		t:number
	) {
		let Point:number[] = [];
		Point[0] = Math.pow((1 - t), 3)*p0[0] + 3*t*Math.pow((1 - t), 2)*p1[0] + 3*Math.pow(t, 2)*(1-t)*p2[0] + Math.pow(t, 3)*p3[0];
		Point[1] = Math.pow((1 - t), 3)*p0[1] + 3*t*Math.pow((1 - t), 2)*p1[1] + 3*Math.pow(t, 2)*(1-t)*p2[1] + Math.pow(t, 3)*p3[1]; 
		if (Point[0] < 0){
			Point[0] = (-1) * Point[0];
		};
		if (Point[0] > window.innerWidth){
			Point[0] = window.innerWidth - (Point[0] - window.innerWidth) ;
		};
		if (Point[1] < 0){
			Point[1] = (-1) * Point[1];
		};
		if (Point[1] > window.innerHeight){
			Point[1] = window.innerHeight - (Point[1] - window.innerHeight) ;
		};
		return Point;
	};
};
