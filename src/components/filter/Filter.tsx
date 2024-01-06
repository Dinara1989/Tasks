import React, {useState} from 'react';
import HomeFilter from "./HomeFilter";

type FilterType = 'All' | 'Dollars' | 'Hrivna'
const Filter = () => {
    const [money, setMoney] = useState([
        { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
        { banknotes: 'Dollars', value: 50, number: ' z1234567890' },
        { banknotes: 'Hrivna', value: 100, number: ' w1234567890' },
        { banknotes: 'Dollars', value: 100, number: ' e1234567890' },
        { banknotes: 'Dollars', value: 50, number: ' c1234567890' },
        { banknotes: 'Hrivna', value: 100, number: ' r1234567890' },
        { banknotes: 'Dollars', value: 50, number: ' x1234567890' },
        { banknotes: 'Hrivna', value: 50, number: ' v1234567890' },
    ])
    const[filter, setFilter]=useState<FilterType>('All')

    let currentMoney = money;

    if(filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'Dollars');
    }
    if(filter === 'Hrivna') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknotes === 'Hrivna');
    }
    const onClickFilterHandler=(nameButton: FilterType)=>{
        setFilter(nameButton)
    }

    return (
        <div>
            <HomeFilter />
            <ul>
                {currentMoney.map((objectFromMoneyArray) => {
                    return (
                        <li>{objectFromMoneyArray.banknotes} - {objectFromMoneyArray.value} - {objectFromMoneyArray.number}</li>
                    );
                })}
            </ul>
            <button onClick={()=>onClickFilterHandler( 'All')}>All</button>
            <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>
            <button onClick={()=>onClickFilterHandler('Hrivna')}>Hrivnas</button>
        </div>
    );
};

export default Filter;