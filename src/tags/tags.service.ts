import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dtos/creat-tag.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from './tag.schema';

@Injectable()
export class TagsService {
    constructor(
        
        @InjectModel(Tag.name) 
        private readonly tagModel: Model<Tag>,

    ) {}
    public async createTag(createTagDto: CreateTagDto): Promise<Tag> {
        console.log('createTagDto:', createTagDto);
      const newTag = new this.tagModel(createTagDto)
        return await newTag.save(); 
    }
}
