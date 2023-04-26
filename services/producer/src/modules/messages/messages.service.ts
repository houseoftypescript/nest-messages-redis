import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MessagesService {
  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy) {}

  async publishEvent() {
    this.client.emit('book-created', {
      bookName: 'The Way Of Kings',
      author: 'Brandon Sanderson',
    });
  }
}
