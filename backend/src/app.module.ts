import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { DbModule } from './db/db.module';
import { ProjetoModule } from './projeto/projeto.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { AppService } from './app.service';

@Module({
	imports: [DbModule, ProjetoModule, TecnologiaModule],
	controllers: [AppController],
	providers: [AppService], // Certifique-se de que AppService está listado aqui
})
export class AppModule {}
