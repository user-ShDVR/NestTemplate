import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DbModule } from 'src/db/db.module';
import { AccountModule } from 'src/account/account.module';
import { PasswordService } from 'src/auth/password.service';

@Module({
  imports: [DbModule, AccountModule],
  controllers: [UsersController],
  providers: [UsersService, PasswordService],
  exports: [UsersService],
})
export class UsersModule {}
