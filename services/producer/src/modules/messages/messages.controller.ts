import { Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MessagesResponseDto } from './messages.dto';
import { MessagesService } from './messages.service';

@ApiTags('Messages')
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('/publish')
  @ApiResponse({ type: MessagesResponseDto })
  async publishEvent(): Promise<MessagesResponseDto> {
    await this.messagesService.publishEvent();
    return { status: 'OK' };
  }
}
