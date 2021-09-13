import React from 'react'
import cityJson from '../../api/city.json';
import ModalAddButton from '../../components/modalAddButton/modalAddButton';
import {List} from 'react-virtualized';
import './addCityModal.css';

function AddCityModal(props) {
    const filteredList = [...cityJson].filter(city => {return city.name.toLowerCase().includes(props.search.toLowerCase())})
    return (
        <div id='addCityModal'>
            <input type='text' onChange={props.func} />
            <List width={400} height={500} rowHeight={50} rowCount={filteredList.length}
                rowRenderer={({key, index, style}) => {
                    const ci = filteredList[index] = props.search ? filteredList[index] : [...cityJson][index]
                    return (
                        <div key={key} style={style} >
                            <ModalAddButton city={ci.name} />
                        </div>
                    )
                }}
             />
        </div>
    )
}

export default AddCityModal