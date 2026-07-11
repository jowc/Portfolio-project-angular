import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: false,
})
export class ContactComponent implements OnInit {
  catLottie: AnimationOptions = {
    path: 'https://assets3.lottiefiles.com/packages/lf20_OZnTKS.json',
  };

  contactForm = new FormGroup({
    fullname: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    senderMessage: new FormControl('', {
      validators: [Validators.required, Validators.minLength(10)],
    }),
  });

  get fullname() {
    return this.contactForm.get('fullname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get senderMessage() {
    return this.contactForm.get('senderMessage');
  }

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Contact Joseph Chikeme');
  }
}
