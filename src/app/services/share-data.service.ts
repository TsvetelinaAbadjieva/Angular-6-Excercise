import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable()
export class ShareDataService {

private sharedDataSource : BehaviorSubject<any> = new BehaviorSubject(null);
public  customData = this.sharedDataSource.asObservable();

 constructor() {}

 setCurrentData(data: any){
      this.sharedDataSource.next(data);
 }

}
