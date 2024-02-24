import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService){}

  create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: CreatePostDto
    });
  }

  findAll() {
    return this.prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.post.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, _updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: {
        id,
      },
      data: _updatePostDto,      
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: {
        id,
      }
    });
  }
}
