import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';
import '../../../assets/smtp.js'

declare var Email: any

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

  formMessage: string = ''
  sendingM: boolean = false
  sentForm: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  submit(cForm: NgForm) {
    console.log(cForm.value)
    this.sendingM = true

    if (cForm.valid) {

      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "joecdev@gmail.com",
        Password: "706C7348F707C8EB74A7BC695BDDC5BFEE69",
        To: 'joecdev@gmail.com',
        From: 'joecdev@gmail.com',
        Subject: `Message from ${this.fullname}`,
        Body: `
              <i>This is sent as a message from my portfolio site.</i> <br/>
              <b>Name: </b>${cForm.value.name} <br /> <b>Email: </b>${cForm.value.email}<br /> <b>Subject: </b> JoecDev Inquiry<br /> <b>Message:</b> <br /> ${cForm.value.senderMessage}`
      }).then(
        (message: any) => {
          console.log(message)
          this.sentForm = true
          this.sendingM = false

        })
        .catch((err: any) => {
          console.log(err)
          this.sendingM = false
          this.formMessage = err
        })


    }

  }

}
