import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule as AuthModule } from '@auth/app.module';
import { version } from '../package.json';

@Module({
    imports: [AuthModule]
})
class AppModule {}

async function bootstrap() {
    const expressApp = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));

    const options = new DocumentBuilder().setTitle('API Docs').setDescription('Davoda API Docs').setVersion(version).build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/v1', app, document);

    await app.listen(3000);
}
bootstrap();
