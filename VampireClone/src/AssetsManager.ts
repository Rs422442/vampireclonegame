import * as UTILS from '@pixi/utils';
import * as PIXI from 'pixi.js';

type atlassheet = [name: string, path: string]; 

export default class AssetManager{
    static resources: any;
    static assetsloader= new PIXI.Loader;
    promises: Promise<void>[] = [];

    constructor(){   

    }

    async preload(atlas: atlassheet[]): Promise<void> {            
        this.promises.push(
          new Promise<void>((resolve, _reject) =>
            {
              atlas.forEach(function(value)
              {              
                AssetManager.assetsloader.add(value[0], value[1])                
                console.warn('sprites loaded '+ value[0] + ' ' + value[1]);
              }); 

              AssetManager.assetsloader.load((_assetsloader, _resources) =>          
              {
                AssetManager.resources = _resources;
                console.warn('all sprites loaded');
                console.warn(AssetManager.resources)
                resolve();
              })

            })
        );

        const Element = document.getElementById('preloader')
        
        await Promise.all(this.promises)
          .then((_result) => {Element?.classList.add('preloader--hide'); console.warn('preloader hide')})
          .catch((_err) => console.warn('error loading resources'))
      }

    private static getTextureFromResources(resources: UTILS.Dict<PIXI.ImageResource>, key: string, frame?: string): PIXI.Texture
      {
        if (frame) 
          {
            if (!(resources[key] as any).data.frames[frame].frame)
              {
                console.error(`[getTexture]: В ${key} нет ${frame}`);
              }
            return (resources[key] as any).data.frames[frame].frame.texture;
          }
  
        if (!key)
          {
            console.error("Не указано имя атласа для текстуры");
            return PIXI.Texture.EMPTY;
          }
  
        if (!(resources[key] as any))
          {
            console.error(`[getTexture]: Нет ${key}`);
          }
  
        return (resources[key] as any).texture;
      }
  
    static getTexture(key: string, frame?: string): PIXI.Texture
      {
        return this.getTextureFromResources(AssetManager.resources, key, frame);
      }
};