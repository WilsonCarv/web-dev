import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostInput } from './post.model';
import { Model } from 'mongoose';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  createPost(post: PostInput): Promise<Post> {
    return this.postModel.create(post);
  }
  getPostByUser(userId: string): Promise<Post[]> {
    return this.postModel.find({ 'user.id': userId });
  }
}
