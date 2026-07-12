import {db} from "./action.js";

export default class Ysdk{

    async initSDK(){
        return  await YaGames?.init();
    }

    ready(){
        this.initSDK().then((ysdk) => {
            ysdk.features.LoadingAPI?.ready()
        })
            .catch(console.error);
    }

    start(){
        this.initSDK().then((ysdk) => {
                ysdk.features.GameplayAPI?.start()
            });
    }

    stop(){
        this.initSDK().then((ysdk) => {
                ysdk.features.GameplayAPI?.stop()
            });
    }

     getData(){
         this.initSDK().then((ysdk)=>{
          ysdk.getPlayer().then((res)=>{
              res.getData().then((d)=>{
                  if(d?.level){
                      db.setAll(d)
                  }

              })
          })
      })
    }

    setData(){
        this.initSDK().then((ysdk)=>{
            ysdk.getPlayer().then((res)=>{
                res.setData(db.getAll(),true)
            })
        })
    }

    lang(){
        this.initSDK().then((ysdk) => {
            ysdk.environment.i18n.lang;
        });

    }
}