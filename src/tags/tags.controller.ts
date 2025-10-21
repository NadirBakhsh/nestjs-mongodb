import { Body, Controller, Post } from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dtos/creat-tag.dto';

@Controller('tags')
export class TagsController {
  constructor(
    private readonly tagsService: TagsService
  ) {}

  @Post()
  public createTag(@Body() createTagDto: CreateTagDto) {
    return  this.tagsService.createTag(createTagDto);
  }
}
