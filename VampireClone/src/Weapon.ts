import * as PIXI from 'pixi.js';

export default class Weapon{
    Damage:number = 0;
    Speed:number = 0;
    Cost:number = 0;
    //Sprite!: PIXI.Texture<PIXI.Resource>;
    Animations!: PIXI.Texture[];
    constructor(){
    };

    spawn_effect(Animations: PIXI.Texture[]): PIXI.AnimatedSprite{
        let effect: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(Animations);
        effect.anchor.x = 0.5;
		effect.anchor.y = 0.5;
        effect.scale.x = 1;
		effect.scale.y = 1;
        effect.visible = true;
		effect.animationSpeed = 0.15;
        return effect;
    }
};