import React from 'react';
import MyInput from './UI/Input/MyInput';
import MaySelect from './UI/select/MaySelect';

const Postfilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Пошук'
            />
            <MaySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defoltValue="Сортировка"
                oprions={[
                    { value: "title", name: "по названию" },
                    { value: "body", name: "по описанию" }
                ]}
            />
        </div>
    );
}

export default Postfilter;
