import { Injectable } from '@nestjs/common';
import type { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  login(loginDto: LoginDto) {
    console.log(loginDto);
    return loginDto;
  }
}
