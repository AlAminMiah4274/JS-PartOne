for (var i = 1; i < 20; i++) {
    // console.log(i);
    if (i > 10) {
        break
    }
}


var items = ['keyboard', 'mouse', 'books', 'bottle', 'mug'];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'bottle') {
        break
    }
    // console.log(item);
}

var numbers = [15, 61, 54, 21, 44, 20, 32, 75];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 70) {
        break
    }
    console.log(number)
}