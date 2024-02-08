function calculateMoney(ticketSale) {
    if(ticketSale < 0){
        return 'Invalid Number';
    }
    const cost = 500 + (50 *8);
    const earn = 120 * ticketSale;
    const totalEarn = earn - cost;
    return totalEarn;
}

function checkName(name) {
    if(typeof name !== 'string'){
        return 'invalid'
    }
    const keyName = ['a', 'y;','i;', 'e;', 'o;', 'u', 'w'];
    const lastLetter = name[name.length -1].toLowerCase();
    if(keyName.includes(lastLetter)){
        return 'Good Name'
    }else{
        return 'Bad Name'
    }
}

function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return 'Invalid Array'
    }
    const num = [];
    for(const item of array){
        if(typeof item === 'number' && !isNaN(item)){
            num.push(item);
        }
    }
    return num;
}

function password(obj) {
    let count = 0;
    let year = obj.birthYear.toString();
    for(let i in obj){
        count ++;
    }
    if(count < 3 || year.length < 4){
        return 'invalid'
    }
    const newSiteName =obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    const pas = newSiteName + '#' + obj.name + '@' + obj.birthYear;
    return pas;
}

function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) || typeof livingCost !== 'number'){
        return 'invalid input';
    }
    let vat = 0;
    for(let item of arr){
        if(item >= 3000){
            vat = item*20/100;
        }
    }
    let earn = 0;
    for(let i =0; i < arr.length; i++) {
        earn = earn+arr[i];
    }
    const savings = earn - vat - livingCost;
    if(savings < 0){
        return 'earn more'
    }
    return savings;
}

