class Stopwatch{
    constructor(displayElement){
        this.display = displayElement;
        this.timer = null;
        this.startTime = 0;
        this.elapseTime = 0;
        this.isRunning = false;
    }
    start = () => {
        if(!this.isRunning){
            this.startTime = Date.now() - this.elapseTime;
            this.timer = setInterval(this.update, 10);
            this.isRunning = true;
        }
    };
    stop = () => {
        if(this.isRunning){
            clearInterval(this.timer);
            this.elapseTime = Date.now() - this.startTime;
            this.isRunning = false;
        }
    };
    reset = () => {
        clearInterval(this.timer);
        this.startTime = 0;
        this.elapseTime = 0;
        this.isRunning = false;
        this.display.textContent = "00:00:00:00";
    };
    update = () =>{
        const currentTime = Date.now();
        this.elapseTime = currentTime - this.startTime;
        const hours = Math.floor(this.elapseTime/(1000*60*60));
        const minutes = Math.floor((this.elapseTime/(1000*60))%60);
        const seconds = Math.floor((this.elapseTime/1000)%60);
        const milliseconds = Math.floor((this.elapseTime%1000)/10);
        const formattedTime = [
            String(hours).padStart(2, "0"),
            String(minutes).padStart(2, "0"),
            String(seconds).padStart(2, "0"),
            String(milliseconds).padStart(2, "0"),
        ].join(":");
        this.display.textContent = formattedTime;
    };
}
const display = document.getElementById("display");
const stopwatch = new Stopwatch(display);
document.getElementById("startBtn").onclick = stopwatch.start;
document.getElementById("stopBtn").onclick = stopwatch.stop;
document.getElementById("resetBtn").onclick = stopwatch.reset;
