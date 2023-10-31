import { Injectable } from '@angular/core';
import{ Subject} from "rxjs"
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendmsg(product:any){
    this.subject.next(product) //triggering an event
  }
  getmsg(){
    return this.subject.asObservable()
  }
}
