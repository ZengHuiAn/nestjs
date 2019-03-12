
export interface RegisterSchedule { callFunc:Function,timer:number }

export default class Schedule {
    callback:RegisterSchedule; 
    constructor(callback:RegisterSchedule){
        this.callback = callback;
        this.start()
    }

    private start(){
        setInterval(this.callback.callFunc,this.callback.timer)
        setTimeout(this.start,this.callback.timer)
    }
}