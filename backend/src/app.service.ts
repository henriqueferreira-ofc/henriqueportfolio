import { Injectable } from '@nestjs/common';
import { x } from '@core'; // Ajuste o caminho para importar corretamente

@Injectable()
export class AppService {
  getHello(): string {
    return 'Legal...  ' + x;
  }
}

