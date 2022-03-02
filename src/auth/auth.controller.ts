import { Body, Controller, Inject, Injectable, Post, OnModuleInit } from '@nestjs/common';
import { IAuthProtocol, AuthToken } from '@deegda/protocol-buffer/type/auth';
import { ClientGrpc } from '@nestjs/microservices';
import { LocalLoginBody } from '@auth/dto/local_login.dto';
import { firstValueFrom } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('Auth')
@Controller('auth')
export class AuthController implements OnModuleInit {
    #authService: IAuthProtocol;

    constructor(@Inject('AUTH_PACKAGE') private readonly client: ClientGrpc) {}

    onModuleInit() {
        this.#authService = this.client.getService<IAuthProtocol>('AuthService');
    }

    @Post()
    async localLogin(@Body() body: LocalLoginBody): Promise<AuthToken> {
        return firstValueFrom(await this.#authService.localLogin(body));
    }
}
