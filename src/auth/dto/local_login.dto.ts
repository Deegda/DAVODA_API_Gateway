import { ApiProperty } from '@nestjs/swagger';

export class LocalLoginBody {
    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}
