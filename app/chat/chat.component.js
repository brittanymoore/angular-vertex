"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var chat_service_1 = require('./chat.service');
var chat_message_1 = require('./chat.message');
var ChatComponent = (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
    }
    ChatComponent.prototype.getMessages = function () {
        var _this = this;
        this.chatService.getMessages().then(function (messages) { return _this.messages = messages; });
    };
    ChatComponent.prototype.add = function (name, message) {
        var _this = this;
        name = name.trim();
        message = message.trim();
        if (!name || !message) {
            return;
        }
        var newMessage = new chat_message_1.Message(name, message);
        this.chatService.create(newMessage)
            .then(function (message) { console.log(message); _this.messages.push(message); });
    };
    ChatComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-chat',
            templateUrl: 'chat.component.html',
            styleUrls: ['chat.component.css']
        }), 
        __metadata('design:paramtypes', [chat_service_1.ChatService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map