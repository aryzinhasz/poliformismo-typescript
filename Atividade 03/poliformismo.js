var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe base Message
var Message = /** @class */ (function () {
    function Message(content) {
        this.content = content;
    }
    return Message;
}());
// Subclasse para mensagens de texto
var TextMessage = /** @class */ (function (_super) {
    __extends(TextMessage, _super);
    function TextMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextMessage.prototype.send = function () {
        console.log("\uD83D\uDCE9 Enviando mensagem de texto: ".concat(this.content));
    };
    return TextMessage;
}(Message));
// Subclasse para mensagens de notificação
var NotificationMessage = /** @class */ (function (_super) {
    __extends(NotificationMessage, _super);
    function NotificationMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationMessage.prototype.send = function () {
        console.log("\uD83D\uDD14 Enviando notifica\u00E7\u00E3o: ".concat(this.content));
    };
    return NotificationMessage;
}(Message));
// Teste do sistema
var msg1 = new TextMessage("Olá! Tudo bem?");
var msg2 = new NotificationMessage("Você tem uma nova atualização!");
msg1.send();
msg2.send();

// Teste
var msg1 = new TextMessage("Bom dia!");
var msg2 = new NotificationMessage("Sua encomenda chegou.");
msg1.send();
msg2.send();
