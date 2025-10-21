import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { postStatus } from './enums/post-status.enum';
import { PostType } from './enums/post-type.enum';

@Schema()
export class Post extends Document {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({
    type: String,
    required: true,
    enum: PostType,
    default: PostType.POST
  })
  postType: PostType;

  @Prop({ type: String, required: true })
  slug: string;

  @Prop({
    type: String,
    enum: postStatus,
    required: true,
    default: postStatus.DRAFT
  })
  status: postStatus;

  @Prop({ type: String, isRequired: false })
  content?: string;

  @Prop({ type: String, isRequired: false })
  featuredImageUrl?: string;

  @Prop({ type: Date, isRequired: false })
  publishOn?: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
