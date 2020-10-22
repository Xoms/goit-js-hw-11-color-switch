const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

class ColorsSwitcher {

    output = document.querySelector('.output');
    controls = document.querySelector('.controls');
    timerId = null;

    constructor(){
        this.clickHandle = this.clickHandle.bind(this);
        this.controls.addEventListener('click', this.clickHandle);
    }

    clickHandle(e){
        if (e.target.nodeName !== 'BUTTON'){
            return;
        }

        const btn = e.target;
        if (btn.dataset.action === 'start') {
            this.start();
        } else this.stop();
    }

    start(){
        if (this.timerId) {
            return
        }

        this.timerId = setInterval(()=>{
            let idx = this.randomIntegerFromInterval(0, colors.length-1);
            this.output.style.backgroundColor = colors[idx];
            console.log("color = ", colors[idx], "; idx = ", idx);
        }, 1000)
    }

    stop(){
        if (!this.timerId){
            return
        }

        clearInterval(this.timerId);
        this.timerId = null;

    }

    randomIntegerFromInterval (min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
      };   
}

const colorsSwitcher = new ColorsSwitcher;