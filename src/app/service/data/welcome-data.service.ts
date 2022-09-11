import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloBean{
  constructor(public message:string){}
}




@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloBean>('http://localhost:8085/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
	}

  executeHelloWorldServiceWithPathVariable(name: string){
    return this.http.get<HelloBean>(`http://localhost:8085/hello-world/path-variable/${name}`,);
     //console.log("Execute Hello World Bean Service");
    }
}
