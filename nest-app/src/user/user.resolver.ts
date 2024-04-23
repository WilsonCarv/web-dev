import { Args, Resolver, Query } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  getUser(@Args('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }
}
