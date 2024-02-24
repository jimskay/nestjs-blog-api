import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService){}

  async create(CreateUserDto: CreateUserDto) {

    const saltOrRounds = 10;

    const passwordHashed = await hash(CreateUserDto.password, saltOrRounds);

    return this.prisma.user.create({
      data: {
        email: CreateUserDto.email,
        password: passwordHashed
      }
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: updateUserDto,      
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      }
    });
  }
}
