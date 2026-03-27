import * as bcrypt from 'bcryptjs';
import { HashingService } from "./hashing.service";

export class BcryptHashingService implements HashingService {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async compare(password: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(password, hash);
    return isValid;
  }
}