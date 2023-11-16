import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        example: 'test@gmail.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        example: '123456',
    })
    @IsNotEmpty()
    password: string;
}
