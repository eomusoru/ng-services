export class CounterService {
    counter: number = 0;

    addCount(){
        this.counter++;
        console.log('We have made ' + this.counter + ' changes');
    }
}