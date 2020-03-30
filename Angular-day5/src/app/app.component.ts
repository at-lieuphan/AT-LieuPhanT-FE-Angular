import { Component } from '@angular/core';
import { LocalerService } from './services/localer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Everything You Should Know About the 2019 Coronavirus and COVID-19';
  resultLocal: object[];
  resultSession: object[];
  inputDecription: string;
  inputTitle: string;
  products = [
    {
      id: 1,
      title: 'What to do if?',
      decription: `If you have COVID-19 or suspect you have the 
      virus that causes COVID-19, you should seek medical care.
      You have several options for obtaining medical care,
       including being seen by your primary healthcare provider. 
      The CDC recommends calling your provider first so that they
       can take the necessary steps to prepare for your visit and 
       protect others from possible exposure to the virus that 
       causes COVID-19.`
    },
    {
      id: 2,
      title: 'What causes coronaviruses?',
      decription: `Coronaviruses are zoonotic. This means they first
       develop in animals before developing in humans.
      For the virus to pass from animal to humans, a person has to
       come into close contact with an animal that carries the infection.      
      Once the virus develops in people, coronaviruses can be spread from
       person to person through respiratory droplets. This is a technical 
       name for the wet stuff that moves through the air when you cough or sneeze.      
      The viral material hangs out in these droplets and can be breathed
       into the respiratory tract (your windpipe and lungs), where the virus can
       then lead to an infection. The 2019 coronavirus hasn’t been 
      definitively linked to a specific animal.`
    },
    {
      id: 3,
      title: 'Who’s at increased risk?',
      decription: `You’re at high risk for contracting SARS-CoV-2 if you come into contact
       with someone who’s carrying it, especially if you’ve been exposed to their saliva or
        been near them when they’ve coughed or sneezed.
      Without taking proper prevention measures, you’re also at high risk if you:      
      live with someone who has contracted the virus
      are providing home care for someone who has contracted the virus
      have an intimate partner who has contracted the virus`
    }
  ]
  constructor(private localerService: LocalerService){}

  setLocal(title : string, decription: string) {
    let newObject = {title:title, decription:decription};
    this.localerService.saveLocalStorage(newObject, 'message');
    this.inputTitle = '';
    this.inputDecription = '';
  }

  getLocal() {
    this.resultLocal = this.localerService.getLocalStorage('message');
  }

  setSession(title: string, decription: string) {
    let newObject = {title:title, decription:decription}
    this.localerService.saveSessionStorage(newObject, 'message');
    this.inputTitle = '';
    this.inputDecription = '';
  }
 
  getSession() {
    this.resultSession = this.localerService.getSessionStorage('message');
  }

}
