import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKeyYourSecretKey',
      signOptions: { expiresIn: '30d' },
    }),
  ],
  exports: [JwtModule],
})
export class JwtGlobalModule {}
