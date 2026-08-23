// interview question: create an accordian component 

import {React, useState} from 'react';
import data from './data'
import './styles.css'

//single selection  -> simple variation
//multi selection -> difficult variation
const Accordian = () => {

    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    //single selection function
    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId);    }
        console.log(selected)
    
        //enable multi selection
    function handleMultiSelection(getCurrentId){
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId)

        if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
        else copyMultiple.splice(findIndexOfCurrentId, 1)

        setMultiple(copyMultiple);
    }
    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>enable multi selection</button>
            <div className='accordian'>
                {
                    data && data.length > 0 ?  data.map(dataItem => <div className='item' key={dataItem.id}>
                        <div className='title' 
                            onClick={
                                enableMultiSelection
                                ? () => handleMultiSelection(dataItem.id) 
                                : () => handleSingleSelection(dataItem.id)}>
                            
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        
                        {/* single selection implementation */}
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                            (<div className='content'>
                                {dataItem.answer} 
                            </div>)
                            : null
                        }

                    </div> ) : ( <div> No item Found !</div>
                )}
            </div>
        </div>
    );
}

export default Accordian;
