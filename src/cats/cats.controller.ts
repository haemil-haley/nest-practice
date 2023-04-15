import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseInterceptors } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { PositiveIntPipe } from "../pipes/positivie.int.pipe";
import { SuccessInterceptor } from "../success.interceptor";

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get()
  getAllCat() {
    return { cate: 'get all cats api'};
  }

  // cats/:id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number)  {
    return 'get one cat api';
  }

  @Post()
  createCate() {
    return 'createCats';
  }

  @Put()
  updateCat() {
    return 'update cat';
  }

  @Patch()
  updatePartialCat() {
    return 'update partial cat';
  }

  @Delete()
  deleteCat() {
    return 'delete cat';
  }
}
