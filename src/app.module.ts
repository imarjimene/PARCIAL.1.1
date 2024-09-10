import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { userInfo } from 'os';
import { Client } from './clients/entities/client.entity';

@Module({
  imports: [
    UsersModule,
    ClientsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'postgres',
      entities: [
        User,
        Client  
      ],
      synchronize: true,
    }),

    ],
  controllers: [AppController],    
  providers: [AppService],
})
export class AppModule {}
