import lion from './images/lion.png';
import cat from './images/cat.png';
import zebra from './images/zebra.png';
import girrafe from './images/girrafe.png';
import car from './images/car.png';
import cycle from './images/cycle.png';
import truck from './images/truck.png';
import bike from './images/bike.png';

const objects = [
    {
        Lion : [{name : 'lion',img : lion},{name : 'lion',img : lion},{name : 'lion',img : lion}],
        Cat : [{name : 'cat',img : cat},{name : 'cat',img : cat},{name : 'cat',img : cat},{name : 'cat',img : cat}],
        Zebra : [{series : 1,img : zebra},{series : 2,img : zebra},{series : 3,img : zebra},{series : 3,img : zebra},{series : 3,img : zebra},{series : 3,img : zebra}],
        Girrafe : [{series : 1,img : girrafe},{series : 2,img : girrafe}]
    },
    {
        Car : [{name : 'car',img : car},{name : 'car',img : car},{name : 'car',img : car}],
        Cycle : [{name : 'cycle',img : cycle},{name : 'cycle',img : cycle},{name : 'cycle',img : cycle},{name : 'cycle',img : cycle}],
        Truck : [{series : 1,img : truck},{series : 2,img : truck},{series : 3,img : truck},{series : 3,img : truck},{series : 3,img : truck},{series : 3,img : truck}],
        Bike : [{series : 1,img : bike},{series : 2,img : bike}]
    }
]


export default objects;