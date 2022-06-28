import { ToWords } from 'to-words';

const data = [];

const toWords = new ToWords();
const ordinal = require('ordinal');

const convert = (i) => {
    return Array.from(String(i), Number);
}


    for (var i = 1000; i <= 9999; i++) {
        var getValue = (i).toString();
        var tensValue = "";
        var hundredValue = "";
        var thousandValue = "";


        if (getValue > 999 && getValue <= 9999) {
            tensValue = getValue.slice(2, -1);
            hundredValue = getValue.slice(1, -2);
            thousandValue = getValue.slice(0, -3);
        }

        data.push(
            {
                name: getValue,
                word: toWords.convert(i),
                numberCardinalityNumber: ordinal(i),
                onesCount: getValue.slice(-1),
                tenthCount: tensValue,
                hundredCount: hundredValue,
                thousandCount: thousandValue,
                subarray: convert(i)
            }
        );
    }


export default data;