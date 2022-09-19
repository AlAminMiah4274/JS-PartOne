var numbers = [45, 70, 85, 90, 65, 95, 25, 50, 73];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 75) {
        continue;
    }
    console.log(number);
}

var tableItems = ['mouse', 'phone', 'airpod', 'bottle', 'brush'];

for (var i = 0; i < tableItems.length; i++) {
    var item = tableItems[i];
    if (item == 'phone') {
        continue;
    }
    console.log(item);
}