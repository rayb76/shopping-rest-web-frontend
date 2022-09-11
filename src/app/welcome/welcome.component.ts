

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {


  message = 'Some Welcome Message'
  welcomeMessageFromService!: string
  name = ''

    constructor(private route: ActivatedRoute,
    private service:WelcomeDataService) { }


    ngOnInit() {
      //COMPILATION ERROR this.message = 5
    //console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
  }





    getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
    (response: any) => this.handleSuccessfulResponse(response));
    (    error: any) => this.handleErrorResponse(error);
    //console.log('get welcome message');

      console.log('last line of getWelcomeMessage')
  }

  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response));
    (      error: { error: { message: string | undefined; }; }) => this.handleErrorResponse(error);
}







handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message
    console.log('response')
    console.log(response.message)
  }

  handleErrorResponse(error: any){
    //console.log(error);
    //console.log(error.error);
    //console.log(error.error.message);
    this.welcomeMessageFromService = error
    }




}
