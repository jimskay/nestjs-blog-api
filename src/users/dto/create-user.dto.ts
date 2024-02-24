import { IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CreateUserDto {
    @MaxLength(255, {message: 'O campo name deve possuir até 255 caracteres!'})
    @IsString()
    @IsNotEmpty()
    email: string;

    @MaxLength(255, {message: 'O campo name deve possuir até 255 caracteres!'})
    @IsString()
    @IsNotEmpty()
    password: string;
}
