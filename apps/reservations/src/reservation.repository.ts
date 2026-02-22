import { AbstractRepository } from "@app/common/database";
import { Injectable, Logger } from "@nestjs/common";
import { Reservation } from "./models/reservation.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ReservationRepository extends AbstractRepository<Reservation> {
    protected readonly logger = new Logger(ReservationRepository.name);

    constructor(@InjectModel(Reservation.name) reservationModel: Model<Reservation>) {
        super(reservationModel)
    }
}