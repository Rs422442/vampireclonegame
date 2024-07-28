import * as PIXI from "pixi.js";

export default class Enemy extends PIXI.Container {
	Entity_sprite!: PIXI.AnimatedSprite;
	x_cor: number = Math.floor(Math.random() * window.innerWidth/2);
	y_cor: number = Math.floor(Math.random() * window.innerHeight/2);
	Entity_speed: number = 0.001;

	constructor(_pixiApp: PIXI.Application) {
		super();
	}

	Entity_summon(
		Entity_walck_animation: PIXI.Texture<PIXI.Resource>[],
		_pixiApp: PIXI.Application
	) {
		
		this.Entity_sprite = new PIXI.AnimatedSprite(Entity_walck_animation);
		this.Entity_sprite.anchor._x = 0.5;
		this.Entity_sprite.anchor._y = 1;
		this.Entity_sprite.scale._x = 0.5;
		this.Entity_sprite.scale._y = 0.5;
		this.Entity_sprite.x = this.x_cor;
		this.Entity_sprite.y = this.y_cor;
		this.Entity_sprite.visible = true;
		// Это функция, так что её нужно вызвать
		this.Entity_sprite.play();
		// возможно пригодится этот параметр
		this.Entity_sprite.animationSpeed = 0.15;
		super.addChild(this.Entity_sprite);
		//_pixiApp.stage.addChild(this.Entity_sprite);
		console.log("Entity added");
	}

	Entity_walck(_pixiApp: PIXI.Application){
		let elapsed:number = 0.0;
		let last_x_cor:number = this.Entity_sprite.x;
		let Entity_direction:number = 0;
		let t:number = 0;
		let points:number[][] = [[],[],[],[]];
		_pixiApp.ticker.add(() => {
			elapsed += _pixiApp.ticker.deltaTime;
			console.log(Entity_direction);
			if ((t == 0)){
				points[0][0] = super.x;
				points[0][1] = super.y;
				for(let i = 1; i <= 3; i++){
					points[i][0] = Math.floor(Math.random() * window.innerWidth/2);
					points[i][1] = Math.floor(Math.random() * window.innerHeight/2);
				};
			};

			if (last_x_cor > this.Entity_sprite.x){
				this.Entity_sprite.scale._x = -0.5;
			}
			else{
				this.Entity_sprite.scale._x = 0.5;
			}
			last_x_cor = this.Entity_sprite.x;

			let New_xy_cor = this.besie(points[0], points[1], points[2], points[3], t)
			super.x = New_xy_cor[0];
			super.y = New_xy_cor[1];

			if (t >= 1){t = 0}
			else{t += this.Entity_speed};
		  });
	};

	private besie(p0:number[], p1:number[], p2:number[], p3:number[], t:number) {
		let Point:number[] = [];
		Point[0] = Math.pow((1 - t), 3)*p0[0] + 3*t*Math.pow((1 - t), 2)*p1[0] + 3*Math.pow(t, 2)*(1-t)*p2[0] + Math.pow(t, 3)*p3[0];
		Point[1] = Math.pow((1 - t), 3)*p0[1] + 3*t*Math.pow((1 - t), 2)*p1[1] + 3*Math.pow(t, 2)*(1-t)*p2[1] + Math.pow(t, 3)*p3[1]; 
		if (Point[0] < 0){
			Point[0] = window.innerWidth - Point[0]
		};
		if (Point[0] > window.innerWidth){
			Point[0] = 0 + Point[0]
		};
		if (Point[1] < 0){
			Point[1] = window.innerHeight - Point[1]
		};
		if (Point[1] > window.innerHeight){
			Point[1] = 0 + Point[1]
		};


		return Point;
	}
}
