import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { MessagesModule } from './modules/messages/messages.module';

@Module({
  imports: [HealthModule, MessagesModule],
})
export class AppModule {}
