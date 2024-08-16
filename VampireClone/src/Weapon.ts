import * as PIXI from 'pixi.js';

export default class Weapon extends PIXI.Container{
    Damage:number = 0;
    Speed:number = 0;
    Cost:number = 0;
    //Sprite!: PIXI.Texture<PIXI.Resource>;
    Animations!: PIXI.Texture[];
    constructor(){
        super();
    };

    spawn_effect(){
        let effect: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(this.Animations);
        effect.play();
        this.addChild(effect);
    }
};