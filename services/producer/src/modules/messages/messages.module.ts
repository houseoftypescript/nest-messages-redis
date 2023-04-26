import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import environments from 'src/common/environments/environments';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GREETING_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: environments.redis.host,
          port: environments.redis.port,
          retryAttempts: environments.redis.retryAttempts,
          retryDelay: environments.redis.retryDelay,
        },
      },
    ]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
