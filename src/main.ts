import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {} from '@deegda/protocol/type/user';

@Module({
    imports: []
})
class AppModule {}

async function bootstrap() {
    const expressApp = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

    const options = new DocumentBuilder().setTitle('API Docs').setDescription('Davoda API Docs').setVersion('1.0').build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/v1', app, document);

    await app.listen(3000);
}
bootstrap();
