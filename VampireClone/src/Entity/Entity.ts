import * as PIXI from "pixi.js";

export default class Entity extends PIXI.Container{
    HP:number = 100;
    Speed: number = 0;
    constructor(){
        super();
    };

    Entity_summon(
        animations: PIXI.Texture<PIXI.Resource>[],
        anchor_x: number,
        anchor_y: number,
        scale_x: number,
        scale_y: number,
        animationSpeed: number
    ):PIXI.AnimatedSprite {
        let Entity_sprite: PIXI.AnimatedSprite = new PIXI.AnimatedSprite(animations);
        Entity_sprite.anchor.x = anchor_x;
		Entity_sprite.anchor.y = anchor_y;
        Entity_sprite.scale.x = scale_x;
		Entity_sprite.scale.y = scale_y;
        Entity_sprite.visible = true;
		Entity_sprite.play();
		Entity_sprite.animationSpeed = animationSpeed;

        return Entity_sprite;
    };

    Entity_health_bar_summon(
        image: PIXI.Texture<PIXI.Resource>,
        anchor_x: number,
        anchor_y: number,
        width: number,
        height: number,
    ): PIXI.Sprite{
        let Entity_health_bar_sprite: PIXI.Sprite = new PIXI.Sprite(image);
        Entity_health_bar_sprite.anchor.x = anchor_x;
		Entity_health_bar_sprite.anchor.y = anchor_y;
		Entity_health_bar_sprite.width = width;
        Entity_health_bar_sprite.height = height;

        return Entity_health_bar_sprite;
    };

    Entity_health_bar_foreground_summon(
        image: PIXI.Texture<PIXI.Resource>,
        anchor_x: number,
        anchor_y: number,
        width: number,
        height: number,
    ): PIXI.Sprite{
        let Entity_health_bar_foreground_sprite: PIXI.Sprite = new PIXI.Sprite(image);
		Entity_health_bar_foreground_sprite.anchor.x = anchor_x;
		Entity_health_bar_foreground_sprite.anchor.y = anchor_y;
		Entity_health_bar_foreground_sprite.width = width;
        Entity_health_bar_foreground_sprite.height = height;

        return Entity_health_bar_foreground_sprite;
    }
};