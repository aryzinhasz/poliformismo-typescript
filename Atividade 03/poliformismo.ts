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

/* Teste
const msg1: Message = new TextMessage("Olá! Tudo bem?");
const msg2: Message = new NotificationMessage("Você tem uma nova atualização!");

msg1.send();
msg2.send();*/

// Teste do sistema
const msg1: Message = new TextMessage("Bom dia!");
const msg2: Message = new NotificationMessage("Sua encomenda chegou.");

// Chamando o mesmo método (polimorfismo em ação)
msg1.send(); // Enviando mensagem de texto: "Bom dia!"
msg2.send(); // Enviando notificação: "Sua encomenda chegou."
