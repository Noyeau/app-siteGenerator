import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'counTo'
})
export class CounToPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(args)
    let count =0
    let time = 5000


    let speed=10
    
while((time/speed) > value){
  console.log(speed)
  speed=speed+10
}
    console.log((time/speed));
    
let nbrSeq=Math.ceil(value/(time/speed))

console.log(nbrSeq)
    return new Observable(observer=>{


      let interval = setInterval(()=>{
        count= count + nbrSeq
        if(count >=value){
          count=value
          clearInterval(interval)
        }
        count=Math.round(count)
        observer.next(count)
      },speed)
    
    })
   
  }

}
