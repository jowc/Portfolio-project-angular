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

  submitted = false;
  submitError = false;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Contact Joseph Chikeme');
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const body = new URLSearchParams();
    body.append('form-name', 'contact');
    body.append('name', this.contactForm.value.fullname ?? '');
    body.append('email', this.contactForm.value.email ?? '');
    body.append('message', this.contactForm.value.senderMessage ?? '');

    fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
        this.submitted = true;
        this.submitError = false;
        this.contactForm.reset();
      })
      .catch(() => {
        this.submitError = true;
      });
  }
}
