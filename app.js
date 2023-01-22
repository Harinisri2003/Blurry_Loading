const sri=document.querySelector('.sri');
const harini=document.querySelector('.harini')

let load=0
let int = setInterval(blurr,30)
function blurr()
{
    load++
    if(load>99)
    {
        clearInterval(int);
    }
   sri.innerText =`${load}%`
   sri.style.opacity=scale(load,0,100,1,0)
   harini.style.filter = `blur(${scale(load,0,100,30,0)}px)`

}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }