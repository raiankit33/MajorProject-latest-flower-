




import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if(value.length === 0 ||  filterString ===""){
      return value
    }
    
    const driversDetails = [];
     for(const driver of value ){
           if(driver['product_name'].toLowerCase() === filterString.toLowerCase()){
             driversDetails.push(driver);
           }
     
          }
          return driversDetails;
    }
  }