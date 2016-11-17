import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { ChatService } from './chat.service';
import { Message } from './chat.message';

@Component({
    moduleId: module.id,
    selector: 'my-chat',
    templateUrl: 'chat.component.html',
    styleUrls: [ 'chat.component.css' ]
})

export class ChatComponent implements OnInit { 

    messages: Message[];

    constructor(
        private chatService: ChatService
    ) { }

    getMessages(): void {
        this.chatService.getMessages().then(messages => this.messages = messages);
    }

    add(name: string, message: string): void {

        name = name.trim();
        message = message.trim();

        if (!name || !message) { return; }

        var newMessage = new Message(name, message);

        this.chatService.create(newMessage)
            .then(message => { console.log(message); this.messages.push(message); });
    }

    ngOnInit(): void { 
        this.getMessages();
    }

}