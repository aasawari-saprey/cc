import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http : HttpClient) { }

  getUser(enroll: any) :  Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/user/"+enroll);

   }
   


   createUser(data: any) :  Observable<any>{
    return this.http.post("http://localhost:3000/user",data);

   }

  
}
