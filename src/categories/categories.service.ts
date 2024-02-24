import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {

  constructor(private prisma: PrismaService){}

  create(_createCategoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: {
        name: CreateCategoryDto.name,
      }
    });
  }

  findAll() {
    return this.prisma.category.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.category.findUniqueOrThrow({
      where: {
        id,
      },
    });
  }

  update(id: number, _updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        id,
      },
      data: _updateCategoryDto,
      
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where: {
        id,
      }
    });
  }
}
