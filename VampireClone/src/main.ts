import Game from './Game.ts';
import * as PIXI from 'pixi.js';

document.addEventListener('DOMContentLoaded', () =>
{
  const _pixiapp = new PIXI.Application(
    {
      width: window.innerWidth,
      height: window.innerHeight,
      resizeTo: window,
      backgroundColor: 0xFFFFFF
    }); 

  document.body.appendChild(_pixiapp.view);
  const newgame = new Game(_pixiapp);
  newgame.loading(_pixiapp);
});