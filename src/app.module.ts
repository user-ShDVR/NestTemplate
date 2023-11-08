import { Module } from "@nestjs/common";
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';

@Module({
    controllers: [],
    providers: [],
    imports: [UsersModule, FilesModule, DbModule, AuthModule, AccountModule]
})
export class AppModule {

}