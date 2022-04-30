import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //must be public because it's going to be binded to the template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
