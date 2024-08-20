import * as PIXI from 'pixi.js';

export default class Weapon{
    Damage:number = 0;
    Speed:number = 0;
    Cost:number = 0;
    Distance: number = 0;
    Animations: PIXI.Texture<PIXI.Resource>[] = [];
    //Sprite!: PIXI.Texture<PIXI.Resource>;
    
    constructor(
        _damage:number,
        _speed:number,
        _cost:number,
        _distance:number,
        _Animations: PIXI.Texture<PIXI.Resource>[]
    ) {
        this.Damage = _damage;
        this.Speed = _speed;
        this.Cost = _cost;
        this.Distance = _distance;
        this.Animations = _Animations;
    };

    spawn_effect(
        anchor_x: number,
        anchor_y: number,
        scale_x: number,
        scale_y:number,
        x_cor: number,
        y_cor: number,
        animationSpeed: number
    ): PIXI.AnimatedSprite{
        if (this.Animations != undefined)
            {this.Animations = this.Animations}
        else{this.Animations = [PIXI.Texture.EMPTY]};

        let effect: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(this.Animations);

        effect.anchor.x = anchor_x;
		effect.anchor.y = anchor_y;

        effect.scale.x = scale_x;
		effect.scale.y = scale_y;

        effect.x = x_cor;
        effect.y = y_cor;

        effect.play();
        effect.animationSpeed = animationSpeed;

        effect.visible = true;

        return effect;
    };
};