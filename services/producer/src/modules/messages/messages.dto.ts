import { ApiProperty } from '@nestjs/swagger';

export class MessagesResponseDto {
  @ApiProperty()
  status: string;
}
