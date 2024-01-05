import React, {useState} from 'react';

const Filter = () => {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'Hrivna', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'Hrivna', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'Hrivna', value: 50, number: ' v1234567890' },
    ])
    const onClickFilterHandler=()=>{
        // setMoney(money.filter((filteredMoney)=>filteredMoney.banknots === 'Hrivna'))
    }
    let currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots === 'Hrivna')
    return (
        <div>
            <ul>
                {currentMoney.map((objectFromMoneyArray) => {
                    return (
                        <li>{objectFromMoneyArray.banknots} - {objectFromMoneyArray.value} - {objectFromMoneyArray.number}</li>
                    );
                })}
            </ul>
            <button onClick={onClickFilterHandler}>All</button>
            <button onClick={onClickFilterHandler}>Dollars</button>
            <button onClick={onClickFilterHandler}>Hrivnas</button>
        </div>
    );
};

export default Filter;