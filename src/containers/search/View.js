import React from 'react';
import {sortByClick} from '../../helpers/Sorting';

const View = ({handleChange, value}) => {
    sortByClick();
    return (
        <>
            <div className='search-panel'>
                <div className='input-group form-search'>
                    <h3 className='lead'>Поиск</h3>
                    {/*<form className='form-search'>*/}
                        <input
                            onChange={ev => handleChange(ev)}
                            type='text'
                            placeholder='Фрагмент для поиска'
                            value={value}
                            id='searchField'
                            className='form-control'
                        />
                    {/*</form>*/}
                </div>
            </div>
        </>
    );
};

export default View;
