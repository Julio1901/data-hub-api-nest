import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';


@Module({
  imports:[LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
