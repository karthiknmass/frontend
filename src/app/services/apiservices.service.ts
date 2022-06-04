import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

   host="http://127.0.0.1:8000";


  constructor(private http: HttpClient) {
   }
 users(){
   return this.http.get(this.host+"/api/contacts")
 }
 create(data:any){
   return this.http.post(this.host+"/api/contacts/add",data)
 }
 delete1(id:any){
  return this.http.delete(this.host+"/api/contacts/delete/"+id)
}
getcrud (id:any){
  return this.http.get(this.host+"/api/contacts/edit/"+id)
}
update(id:any,data:any){
  return this.http.put(this.host+"/api/contacts/update/"+id,data)
}

}
