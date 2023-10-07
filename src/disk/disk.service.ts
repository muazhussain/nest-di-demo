import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerServie: PowerService) {

    }
    getData() {
        console.log('Drawing 20 watts of power from powerservie.');
        this.powerServie.supplyPower(20);
        return 'data!'; 
    }
}
