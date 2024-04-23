import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: false })
  image: string;

  @Prop({ required: true, tye: mongoose.Schema.Types.ObjectId, type: Object })
  user: ObjectId;

  @Prop({ default: true })
  active: boolean;

  @Prop({ required: false, type: Object })
  metadata: any;

  @Prop({ required: false, type: [Object] })
  comments: any[];
}
export const PostSchema = SchemaFactory.createForClass(Post);
