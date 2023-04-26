import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MessagesController {
  @EventPattern('book-created')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log(data);
  }
}
