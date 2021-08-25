import { Component, OnInit } from '@angular/core';
import {ServerService} from "../server.service";

export interface messages {
  mail: string;
  subject: string;
  text: string;
  read: boolean;
  userMessageId: number;
  messageId: number;
}

@Component({
  selector: 'mailing-table',
  templateUrl: './mailing-table.component.html',
  styleUrls: ['./mailing-table.component.css']
})
export class MailingTableComponent {
  displayedColumns: string[] = ['mail', 'subject', 'text', 'read', 'actions'];

  dataSource: messages[] = [];


  constructor(private server: ServerService) {
    this.getUserMessages();
  }


  deleteUserMessage(userMessageId: number) {
    this.server.deleteUserMessage(userMessageId).then(() => {
      this.getUserMessages();
    });
  }

  clean(messageId: number) {
    this.server.deleteUserMessage(messageId).then(() => {
      this.getUserMessages();
    });
  }

  private getUserMessages() {
    this.server.getUserMessages().then((response: any) => {
      console.log('Response', response);
      response.forEach((message: any) =>
        message.read = false
      );
      this.dataSource = response
    });
  }
}


