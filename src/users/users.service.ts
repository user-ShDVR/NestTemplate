import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class UsersService {
  constructor(
    private db: DbService, 
    private accountService: AccountService
  ) {}

  async create(email: string, hash: string, salt: string) {
    const user = await this.db.user.create({data: {email, hash, salt}});
    await this.accountService.createAccount(user.id);
    return user;
  }

  findAll() {
    return this.db.user.findMany();
  }

  findOneById(id: number) {
    return this.db.user.findFirst({where: {id}});
  }

  findOneByEmail(email: string) {
    return this.db.user.findFirst({where: {email}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.db.user.delete({where: {id}});
  }
}
