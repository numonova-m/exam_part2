import { Module } from '@nestjs/common';
import { HeroModule } from './modules/hero/hero.module';
import { PricingModule } from './modules/pricing/pricing.module';
import { AboutUsModule } from './modules/about_us/about_us.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HeroModule,
    PricingModule,
    AboutUsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
        entities: [__dirname + '/**/*.entity.{ts,js}'],
        username: configService.get<string>('DB_USERNAME'),
        database: configService.get<string>('DB_NAME'),
        password: configService.get<string>('DB_PASSWORD'),
        port: parseInt(configService.get<string>('DB_PORT') ?? '5432'),
        host: configService.get<string>('DB_HOST'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
