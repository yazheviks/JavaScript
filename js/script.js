"use strict";

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце');
    let b = prompt('Во сколько обойдется?');
    
    if ( (typeof(a)) === 'string'  && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('Все получилось!!!');
        appData.expenses[a] = b;
    } else { 
         console.log('Не получилось(9');
         i--;        
    }
}

// let i = 0;

// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце');
//     let b = prompt('Во сколько обойдется?');
//     if ( (typeof(a)) === 'string'  && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Все получилось!!!');
//         appData.expenses[a] = b;
//         i++;
//     } else { 
//          console.log('Не получилось(9');      
//     }
    
// }

// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце');
//     let b = prompt('Во сколько обойдется?');
//     if ( (typeof(a)) === 'string'  && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('Все получилось!!!');
//         appData.expenses[a] = b;
//         i++;
//     } else { 
//          console.log('Не получилось(9');      
//     }
// } while (i < 2 );

appData.budgetPerDay = appData.budget / 30;

alert('Ваш бюджет на день:' + appData.budgetPerDay);

if (appData.budgetPerDay < 100) {
    console.log('Мало :(');
} else if (appData.budgetPerDay < 1000) {
    console.log('Нормально...');
} else if (appData.budgetPerDay >= 1000) {
    console.log('Мне бы так!');
} else {
    console.log('Щас не понял');
}
