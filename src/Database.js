export default class Database{
    name = "mahjong"
    score = 0
    level = 1
    music = 0.5
    effect = 0.8

    create(){
        if(!window.localStorage.getItem(name)){
            window.localStorage.setItem(name, JSON.stringify({
                score:this.score,
                level:this.level,
                music:this.music,
                effect:this.effect,
            }));
        }
    }

    getAll(){
        return JSON.parse(window.localStorage.getItem(name));
    }

    setLevel(level = 1){
        if(window.localStorage.getItem(name)){
            window.localStorage.setItem(name, JSON.stringify({
                score:this.getAll().score,
                level:level,
                music:this.getAll().music,
                effect:this.getAll().effect,
            }));
        }
    }

    setScore(score = 0){
        if(window.localStorage.getItem(name)){
            window.localStorage.setItem(name, JSON.stringify({
                score:this.getAll().score + score,
                level:this.getAll().level,
                music:this.getAll().music,
                effect:this.getAll().effect,
            }));
        }
    }

    setMusic(music = 0.5){
        if(window.localStorage.getItem(name)){
            window.localStorage.setItem(name, JSON.stringify({
                score:this.getAll().score,
                level:this.getAll().level,
                music:music,
                effect:this.getAll().effect,
            }));
        }
    }

    setEffect(effect = 0.5){
        if(window.localStorage.getItem(name)){
            window.localStorage.setItem(name, JSON.stringify({
                score:this.getAll().score,
                level:this.getAll().level,
                music:this.getAll().music,
                effect:effect,
            }));
        }
    }

    remove(){
        window.localStorage.removeItem(name);
    }

}