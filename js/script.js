"use strict";

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');        
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
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
    },
    etectDayBudget: function() {
        appData.budgetPerDay = (appData.budget / 30).toFixed();
        alert('Ваш бюджет на день:' + appData.budgetPerDay);
    },
    detectLevel: function() {
        if (appData.budgetPerDay < 100) {
            console.log('Мало :(');
        } else if (appData.budgetPerDay < 1000) {
            console.log('Нормально...');
        } else if (appData.budgetPerDay >= 1000) {
            console.log('Мне бы так!');
        } else {
            console.log('Щас не понял');
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt('Каковы ваши сбережения?');
            let percent = +prompt('Под какой процент?');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц со сбережений: ' + appData.monthIncome);
        }
    },
    efineOptExpenses: function() {
        for(let i = 0; i < 3; i++) {
            let c = prompt('Введите необязательную статью расходов в этом месяце');
            let d = prompt('Во сколько обойдется?');
    
            if( (typeof(c)) === 'string' && c != '' && (typeof(c)) != null && d != '' && (typeof(d)) != null ) {
                appData.optionalExpenses[c] = d;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        let items;
        do {
            items = prompt('Что может принести дополнительный доход?', '');
        } while ((typeof(items)) !== 'string' || items == null || items == '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-нибудь еще?', ''));
        appData.income.sort();
    }
};

//2 task

appData.chooseIncome();

appData.income.forEach(function(item, i) {
    alert('Способы доп. заработка: ' + ++i + ' - ' + item);
});

//3 task

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}