// Build a Car class!
class Car {
    constructor(make,model){
        this.make=make
        this.model=model
        this.odometer=0
    }
    drive(num){
        this.odometer+=num

    }
    async driveAsync(distance){
        this.odometer+=distance
        return this.odometer
    }

}

module.exports = Car