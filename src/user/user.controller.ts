import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CustomParseIntPipe from 'src/common/pipe/custom-parse-int-pipe.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(@Param('id', CustomParseIntPipe) id: number) {
    return `User ${id}`;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
