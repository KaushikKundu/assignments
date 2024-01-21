function clock(){
    let sec = 0;
    let min = 0;
    let hr = 0;
    setInterval(()=>{
        if(sec == 60){
            sec = 0;
            min++;
        }
        if(min == 60){
            min = 0;
            hr++;
        }
        if(hr == 24){
            hr = 0;
        }
        sec++;
        console.log(`Current time: ${hr} : ${min} : ${sec}`);
    },1000)
}
clock();
