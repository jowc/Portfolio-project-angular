import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  catLottie: AnimationOptions = {
    path: 'https://assets3.lottiefiles.com/packages/lf20_OZnTKS.json',
  };

  // contactForm = new FormGroup()
  fullname: string = ''
  email: string = ''
  senderMessage: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log()
  }

}
