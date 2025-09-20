// Classe base Message
abstract class Message {
  content: string;

  constructor(content: string) {
    this.content = content;
  }

  // Método abstrato que deve ser implementado pelas subclasses
  abstract send(): void;
}

// Subclasse para mensagens de texto
class TextMessage extends Message {
  send(): void {
    console.log(`📩 Enviando mensagem de texto: ${this.content}`);
  }
}

// Subclasse para mensagens de notificação
class NotificationMessage extends Message {
  send(): void {
    console.log(`🔔 Enviando notificação: ${this.content}`);
  }
}

// Teste
const msg1: Message = new TextMessage("Olá! Como você está?");
const msg2: Message = new NotificationMessage("Você tem uma nova solicitação!");

msg1.send();
msg2.send();
