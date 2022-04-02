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

  constructor() { }

  ngOnInit(): void {
  }

  submit(cForm: any) {
    console.log(cForm)
    //       Body : `
    //       <i>This is sent as a feedback from my resume page.</i> <br/>
    //        <b>Name: </b>${this.fullname} <br /> <b>Email: </b>${this.email}<br /> <b>Subject: </b> JoecDev Inquiry<br /> <b>Message:</b> <br /> ${this.senderMessage} <br><br> <b>~End of Message.~</b> `
    //

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "joecdev@gmail.com",
      Password: "706C7348F707C8EB74A7BC695BDDC5BFEE69",
      To: 'joecdev@gmail.com',
      From: this.email,
      Subject: `Message from ${this.fullname}`,
      Body: this.senderMessage
    }).then(
      (message: any) => console.log(message)
    ).catch((err: any) => console.log(err))
  }

}
