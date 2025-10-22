import { CreatePostDto } from './../dtos/create-post.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/providers/users.service';
import { Post } from '../post.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(
    /*
     * Injecting Users Service
     */
    private readonly usersService: UsersService,

    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,

  ) {}

  public async createPost(CreatePostDto: CreatePostDto) {
    const post = new this.postModel(CreatePostDto);
    return await post.save();
  }

  public async findAll() {
    return await this.postModel.find().populate('author').populate('tags').exec();
  }

}
