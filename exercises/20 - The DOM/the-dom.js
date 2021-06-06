let x = '4567';
function divisibleByThree(str){
    return [...str].reduce((s,d)=>{
        console.log(typeof +d);
        return +d+s;

    },0)%3===0;
  }
divisibleByThree(x); //?