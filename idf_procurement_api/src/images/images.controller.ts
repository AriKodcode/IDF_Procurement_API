import { Controller, Post, Body } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/image.dto';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  checkPhoto(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.checkPhoto(createImageDto);
  }
}
