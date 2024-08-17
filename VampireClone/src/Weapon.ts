import * as PIXI from 'pixi.js';

export default class Weapon{
    Damage:number = 0;
    Speed:number = 0;
    Cost:number = 0;
    //Sprite!: PIXI.Texture<PIXI.Resource>;
    Animations!: PIXI.Texture[];
    constructor(){
    };

    spawn_effect(): PIXI.AnimatedSprite{
        let effect: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(this.Animations);
        return effect;
    }
};