import * as PIXI from "pixi.js";

export default class Entity extends PIXI.Container{
    HP:number = 100;
    Speed: number = 0;
    constructor(){
        super();
    };
}