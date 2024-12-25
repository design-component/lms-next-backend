// src/env.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentConfig {
  constructor(private configService: ConfigService) {}

  readonly port = this.configService.get<number>('PORT') || 9099;
  readonly host = this.configService.get<string>('HOST') || 'localhost';
  readonly databaseUrl = this.configService.get<string>('DATABASE_URL');
  readonly hashSalt = this.configService.get<number>('HASH_SALT') || 9;

  // node mailer config
  readonly emailUser =
    this.configService.get<string>('EMAIL_USER') || 'shovonprodhan32@gmail.com';
  readonly emailPassword =
    this.configService.get<string>('EMAIL_PASSWORD') || 'kczlytsnafzxfdvg';
}

// Instantiate and export an instance of EnvironmentConfig for use across the app
export const env = new EnvironmentConfig(new ConfigService());
