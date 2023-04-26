import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import environments from './common/environments/environments';

const bootstrap = async () => {
  const app: INestMicroservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.REDIS,
      options: {
        host: environments.redis.host,
        port: environments.redis.port,
        retryAttempts: environments.redis.retryAttempts,
        retryDelay: environments.redis.retryDelay,
      },
    });
  await app.listen();
};

bootstrap();
