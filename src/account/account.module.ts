import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [DbModule],
  exports: [AccountService]
})
export class AccountModule {}
