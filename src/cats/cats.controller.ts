import { Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { PositiveIntPipe } from "../pipes/positivie.int.pipe";

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get()
  getAllCat() {
    return 'all cat';
  }

  // cats/:id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number)  {
    return 'get one cat';
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
