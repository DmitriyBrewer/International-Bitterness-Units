var volume = 1000;
var but = document.querySelector('#buttonIBU')
var ibu = document.querySelector('#RESULT')
var plato = 12;
var mass = 200;
var alpha = 14;
var boiltime = 60;


const og = [1.030, 1.040, 1.050, 1.060, 1.070];

const boil = [5, 10, 15, 20, 30, 40, 60, 80, 90, 120];

const numstring =[00, 10, 20, 30, 40, 01, 11, 21, 31, 41, 02, 12, 22, 32, 42, 03, 13, 23, 33, 34, 04, 14, 24, 34, 44, 05, 15, 25, 35, 45, 06, 16, 26, 36, 46, 07, 17, 27, 37, 47, 08, 18, 28, 38, 48, 09, 19, 29, 39, 49];

var string1 = [0.055, 0.050, 0.045, 0.042, 0.038,0.1, 0.091, 0.084, 0.076, 0.070, 0.137, 0.125, 0.114, 0.105, 0.096, 0.167, 0.153, 0.14, 0.128, 0.117, 0.212, 0.194, 0.177, 0.162, 0.148, 0.242, 0.221, 0.202, 0.185, 0.169, 0.276, 0.252, 0.231, 0.211, 0.193, 0.291, 0.266, 0.243, 0.222, 0.203, 0.295, 0.27, 0.247, 0.226, 0.206, 0.301, 0.275, 0.252, 0.23, 0.21]



but.onclick = function() {
    if (volume.value !== "") {
        var sg = (1 + (plato.value / (258.6 - (((plato.value) / 258.2) * 227.1))));
        console.log(sg);
        var parsSG = parseFloat(sg.toFixed(2));
        var parsBOIL = parseInt(boiltime.value);
        console.log(parsBOIL);


        function descriptionOG() {
            if (sg < 1.030){
                return parsSG = 1.030
            } else if (sg > 1.070) {
                return parsSG = 1.070
            } else {
                return parsSG
            }
        }
        console.log(descriptionOG(sg));
        var finishOG = descriptionOG(sg) 
        
        
        function descriptionBOIL() {
            if (boiltime.value < 5){
                return parsBOIL = 5
            } else if (boiltime.value > 120) {
                return parsBOIL = 120
            } else {
                return parsBOIL
            }
        }
        console.log(descriptionBOIL(boiltime.value));
        var finishBOIL = descriptionBOIL(boiltime.value)
        console.log(finishBOIL);
    
     var x = og.indexOf(finishOG);//var x = og.indexOf(og[0+2]);
    var y = boil.indexOf(finishBOIL);//var y = boil.indexOf(boil[0+7]);

    function newArray(t,d) {
        if (t || d){
            return x.toString()+y.toString()
        } else if (og.indexOf(og[0]) == boil.indexOf(boil[0]) ) {
            return '00'
        }
    }
    console.log(newArray(x,y));

    
    var n = newArray(x,y)
    console.log(n);
    var num = numstring.indexOf(parseFloat(n))//+ сообщает что число положительное и num это index числа n в  массиве numstring
    function KOEF() {
        if (num <= 49){
        return string1[num]
        } 
    }
    console.log(numstring.indexOf(parseFloat(n)));
    console.log(KOEF());
    var koef = KOEF()

    ibu.value = ((mass.value * alpha.value) / (volume.value * 0.1)) * koef
 
}
}