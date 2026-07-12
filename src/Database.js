export default class Database{
    name = "mahjong"
    obj = {score:0,level:1,music:0.5,effect:0.8}
    score = 0
    level = 1
    music = 0.5
    effect = 0.8

    create(){
        if(!window.localStorage.getItem(this.name)){
            window.localStorage.setItem(this.name, JSON.stringify(this.obj));
        }
    }

    getAll(){
        return JSON.parse(window.localStorage.getItem(this.name));
    }
    setAll(o = {}){
        if(window.localStorage.getItem(this.name)){
            window.localStorage.setItem(this.name, JSON.stringify(o));
        }
    }
    setLevel(level = 1){
        if(window.localStorage.getItem(this.name)){
            this.obj = this.getAll()
            this.obj.level = level
            window.localStorage.setItem(this.name, JSON.stringify(this.obj));
        }
    }

    setScore(score = 0){
        if(window.localStorage.getItem(this.name)){
            this.obj = this.getAll()
            this.obj.score = score
            window.localStorage.setItem(this.name, JSON.stringify(this.obj));
        }
    }

    setMusic(music = 0.5){
        if(window.localStorage.getItem(this.name)){
            this.obj = this.getAll()
            this.obj.music = music
            window.localStorage.setItem(this.name, JSON.stringify(this.obj));
        }
    }

    setEffect(effect = 0.5){
        if(window.localStorage.getItem(this.name)){
            this.obj = this.getAll()
            this.obj.effect = effect
            window.localStorage.setItem(this.name, JSON.stringify(this.obj));
        }
    }

    remove(){
        window.localStorage.removeItem(this.name);
    }

}