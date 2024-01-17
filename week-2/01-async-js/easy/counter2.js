function counter() {
  let count = 0;
  printCount = () => {
      console.log(count++);
      setTimeout(printCount, 1000);
  }
  setTimeout(printCount,1000);//
}
counter();