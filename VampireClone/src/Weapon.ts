import * as PIXI from 'pixi.js';

export default class Weapon{
    Damage:number = 0;
    Speed:number = 0;
    Cost:number = 0;
    Sprite!: PIXI.Texture<PIXI.Resource>;
    Animations!: PIXI.Texture<PIXI.Resource>[];
    constructor(){
    };
};