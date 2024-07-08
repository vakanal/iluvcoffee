import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    response.status(200).send('Get all coffees');
  }

  @Get('flavours')
  findAllFlavours() {
    return 'Get all flavours';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Get one coffee #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body('name') body) {
    return body;
  }
}
