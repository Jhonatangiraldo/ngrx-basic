import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BackendService {

  constructor() { }

  getData (): Observable<any> {
    return  new Observable(observer => {
          observer.next(42);
    });
  }

}
