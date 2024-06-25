import Game from './Game.ts';
import * as PIXI from 'pixi.js';

document.addEventListener('DOMContentLoaded', () =>
{
  const _pixiapp = new PIXI.Application(
    {
      width: window.innerWidth,
      height: window.innerHeight,
      resizeTo: window
    }); 

  document.body.appendChild(_pixiapp.view);
  new Game(_pixiapp);
});

  