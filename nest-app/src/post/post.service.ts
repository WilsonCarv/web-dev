import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './post.model';
import { Model } from 'mongoose';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  createPost(post: Post): Promise<Post> {
    return this.postModel.create(post);
  }
  getPostByUser(userId: string): Promise<Post[]> {
    return this.postModel.find({ 'user.id': userId });
  }
}
