// 15 ////////// Loose Change //////////

function looseChange(cents){
    let hash = {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0};
    let change = parseInt(cents);

    while (change > 0) {
        if (parseInt(change / 25)) {
            hash['Quarters'] += parseInt(change / 25);
            change = change % 25;
        } else if (parseInt(change / 10)) {
            hash['Dimes'] += parseInt(change / 10);
            change = change % 10;
        } else if (parseInt(change / 5)) {
            hash['Nickels'] += parseInt(change / 5);
            change = change % 5;
        } else {
            hash['Pennies'] += change % 5;
            change = change % 1;
        }
    } 
    return hash;   
}

console.log(looseChange(56));























