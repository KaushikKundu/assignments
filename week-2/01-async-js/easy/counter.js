function counter(){
    let count = 0;
    setInterval(()=>{
        console.log(count++);
    },100)
}
counter();