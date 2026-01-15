import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/image.dto';

@Injectable()
export class ImagesService {
  checkPhoto(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }
}
