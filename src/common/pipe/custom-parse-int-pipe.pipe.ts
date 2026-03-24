import { BadRequestException, ParseIntPipe } from "@nestjs/common";

export default class CustomParseIntPipe extends ParseIntPipe {
  constructor() {
    super({
      exceptionFactory: () => new BadRequestException("Invalid params.")
    })
  }
}