import * as PIXI from "pixi.js";

export default class Enemy extends PIXI.Container {
	Entity_sprite!: PIXI.AnimatedSprite;
	Health_bar_sprite!: PIXI.Sprite;
	Health_bar_foreground_2_sprite!: PIXI.Sprite;
	x_cor: number = Math.floor(Math.random() * window.innerWidth);
	y_cor: number = Math.floor(Math.random() * window.innerHeight);
	Enemy_direction:number = 0.5;
	Entity_walck_animation: PIXI.Texture<PIXI.Resource>[] = [];
	Entity_attack_animation: PIXI.Texture<PIXI.Resource>[] = [];
	Entity_hit_animation: PIXI.Texture<PIXI.Resource>[] = [];
	Health_bar_image: PIXI.Texture<PIXI.Resource>;
	points:number[][] = [[],[],[],[]];
	last_x_cor:number = super.x;

	constructor(
		_pixiApp: PIXI.Application,
		_Entity_walck_animation: PIXI.Texture<PIXI.Resource>[],
		_Entity_attack_animation: PIXI.Texture<PIXI.Resource>[],
		_Entity_hit_animation: PIXI.Texture<PIXI.Resource>[],
		_Health_bar_image: PIXI.Texture<PIXI.Resource>,
	) {
		super();
		this.Entity_walck_animation = _Entity_walck_animation;
		this.Entity_attack_animation = _Entity_attack_animation;
		this.Entity_hit_animation = _Entity_hit_animation;
		this.Health_bar_image = _Health_bar_image;
	}

	Entity_summon(
	) {
		this.Entity_sprite = new PIXI.AnimatedSprite(this.Entity_walck_animation);
		this.Entity_sprite.anchor.x = 0.5;
		this.Entity_sprite.anchor.y = 1;
		this.Entity_sprite.scale.x = this.Enemy_direction;
		this.Entity_sprite.scale.y = 0.5;
		this.Entity_sprite.visible = true;
		this.Entity_sprite.play(); // Это функция, так что её нужно вызвать
		this.Entity_sprite.animationSpeed = 0.15; // возможно пригодится этот параметр

		this.Health_bar_sprite = new PIXI.Sprite(this.Health_bar_image);
		this.Health_bar_sprite.anchor._x = 0.5;
		this.Health_bar_sprite.anchor._y = 1;
		this.Health_bar_sprite.width = 30;
		this.Health_bar_sprite.height = 10;
		this.Health_bar_sprite.x = this.x;
		this.Health_bar_sprite.y = this.y - this.Entity_sprite.height;

		this.width = this.Health_bar_sprite.width;
		this.height = this.Entity_sprite.height + this.Health_bar_sprite.height;

		this.x = this.x_cor;
		this.y = this.y_cor;

		this.addChild(this.Entity_sprite); //_pixiApp.stage.addChild(this.Entity_sprite);
		this.addChild(this.Health_bar_sprite);
		
		console.log("Entity added");
	}

	Entity_walck(
		t:number
	) {
		//let elapsed:number = 0.0;
		//_pixiApp.ticker.add(() => {
			//elapsed += _pixiApp.ticker.deltaTime;
			if ((t == 0)){
				this.points[0][0] = super.x;
				this.points[0][1] = super.y;
				for(let i = 1; i <= 3; i++){
					this.points[i][0] = Math.floor(Math.random() * window.innerWidth + Math.random() * window.innerWidth);
					this.points[i][1] = Math.floor(Math.random() * window.innerHeight + Math.random() * window.innerHeight);
				};
			};

			if (this.last_x_cor > super.x){
				this.Enemy_direction = -0.5;
			}
			else{
				this.Enemy_direction = 0.5;
			}
			this.Entity_sprite.scale.x = this.Enemy_direction;
			this.last_x_cor = super.x;

			let New_xy_cor = this.besie(this.points[0], this.points[1], this.points[2], this.points[3], t)
			super.x = New_xy_cor[0];
			super.y = New_xy_cor[1];

			/*if (t >= 1){t = 0}
			else{t += this.Entity_speed};*/
		  //});
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
			Point[0] = window.innerWidth + Point[0];
		};
		if (Point[0] > window.innerWidth){
			Point[0] = Point[0] - window.innerWidth;
		};
		if (Point[1] < 0){
			Point[1] = window.innerHeight - Point[1];
		};
		if (Point[1] > window.innerHeight){
			Point[1] = Point[1] - window.innerHeight;
		};
		return Point;
	}
}
