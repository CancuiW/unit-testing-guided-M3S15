const Car=require('./car')
//describe block
describe('our first test',()=>{
    //single test
    test('sanity',()=>{
        //assertions
        //.toBe(5)---matchers: https://jestjs.io/docs/expect--contains a list of matchers
        //'npm i -D @types/jest' library provide a list of matchers when enter "." after expect()
        expect(5).toBe(5)
        
        
    })
})
describe('Car class',()=>{
    //before every test will call this beforeEach function
    let redCar
    beforeEach(()=>{
        redCar = new Car('toyota', 'prius')
    })
    test('it is defined',()=>{
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })
    test('has model and make',()=>{
       
        //.toHaveProperty:if it exist the specific variable,also could add a related value
        expect(redCar).toHaveProperty('make','toyota')
        //.toBeDefined():check that a variable is not undefined
        expect(redCar.model).toBeDefined()
        expect(redCar.make).toBe('toyota')
        //expect(redCar).toEqual({make:'toyota',model:'prius'})
        expect(redCar).toMatchObject({ make: 'toyota', model: 'prius' })
        //.toMatchObject:only contain those items ,no need equal every items in a obj
    })
    test('new cars start with the odometer at zero',()=>{
       
        expect(redCar).toHaveProperty('odometer',0)
    })
    test('cars have a drive method',()=>{
        expect(redCar.drive).toBeDefined()
        expect(redCar.drive).toBe(Car.prototype.drive)

    })
    test('drive method takes distance and increases odometer by that distance',()=>{
        redCar.drive(10)
        expect(redCar.odometer).toBe(10)
        redCar.drive(5)
        expect(redCar.odometer).toBe(15)
    })
   // test.todo('leave it here as a placeholder and does not affect the overall test ')
    // test.only('only executes this test',()=>{})
    // test.skip('only skip this test',()=>{}) 
    test('driveAsync method resolves the updated odometer',async()=>{
        let undatedOdometer=await redCar.driveAsync(7)
        expect(undatedOdometer).toBe(7)
        undatedOdometer=await redCar.driveAsync(5)
        expect(undatedOdometer).toBe(12)
    })
})