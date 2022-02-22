import { Module } from "@nestjs/common";
import { ClientsModule } from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'USER_PACKAGE',
                transport: Transport.GRPC,
                options: {
                    package: 'user',
                    protoPath: join(__dirname, 'user.proto')
                }
            }
        ])
    ],
    
});
