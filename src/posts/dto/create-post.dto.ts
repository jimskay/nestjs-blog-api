import { IsArray, IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CreatePostDto {

    @MaxLength(255, {message: 'O campo name deve possuir até 255 caracteres!'})
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @Min(1)
    @IsInt()
    @IsNotEmpty()
    categoryId: number;    

    @Min(1)
    @IsInt()
    @IsNotEmpty()
    userId: number;    

}
