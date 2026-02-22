import {  Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { ConfigModule, DatabaseModule, LoggerModule } from '@app/common';
import { ReservationRepository } from './reservation.repository';
import { Reservation, ReservationSchema } from './models/reservation.model';

@Module({
  imports: [DatabaseModule, ConfigModule,
    DatabaseModule.forFeature([{
      name: Reservation.name,
      schema: ReservationSchema
    }],
    ),
    LoggerModule
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationRepository],
})
export class ReservationsModule { }
