import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipePipe implements PipeTransform {

  transform(value: any, order : any): any {
    if(order == undefined || order == ''){
        return value;
    }else{
      value.sort( (a,b)=> {
          if(a[order] < b[order]){
            return -1
          }else if(a[order] > b[order]){
            return 1;
          }else{
            return 0;
          }
      })

      return value;
    }
  }

}
