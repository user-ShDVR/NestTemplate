import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { DbService } from 'src/db/db.service';
import { AccountService } from 'src/account/account.service';
import { PasswordService } from 'src/auth/password.service';

@Injectable()
export class UsersService {
  constructor(
    private db: DbService,
    private passwordService: PasswordService,
    private accountService: AccountService,

  ) { }

  async create(email: string, hash: string, salt: string) {
    const user = await this.db.user.create({ data: { email, hash, salt } });
    await this.accountService.createAccount(user.id);
    return user;
  }

  async createUser(email: string, password: string) {
    const user = await this.db.user.findFirst({ where: { email } });

    if (user) {
      throw new BadRequestException({ type: 'email-exists' });
    }

    const salt = this.passwordService.getSalt();
    const hash = this.passwordService.getHash(password, salt);


    const newUser = await this.db.user.create({ data: { email, hash, salt } });
    await this.accountService.createAccount(newUser.id);
    return 'Success';
  }

  findAll() {
    return this.db.user.findMany();
  }

  findOneById(id: number) {
    return this.db.user.findFirst({ where: { id } });
  }

  findOneByEmail(email: string) {
    return this.db.user.findFirst({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.db.user.delete({ where: { id } });
  }
}
