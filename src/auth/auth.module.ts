import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'AUTH_PACKAGE',
                transport: Transport.GRPC,
                options: {
                    package: 'auth',
                    protoPath: 'node_modules/@deegda/protocol-buffer/proto/auth/auth.proto',
                    url: '127.0.0.1:5002'
                }
            }
        ])
    ],
    controllers: [AuthController]
})
export class AuthModule {}
