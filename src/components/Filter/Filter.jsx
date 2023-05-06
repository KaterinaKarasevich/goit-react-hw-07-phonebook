
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/filterSlice';

import { FilterInput, TitleFilter } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();
    
  const onChangeInputFilter =(evt) => { 
    return dispatch(setFilter(evt.currentTarget.value))
  };

    return (  
        <div>
            <TitleFilter> Find contacts by name</TitleFilter>
                <FilterInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    onChange={onChangeInputFilter}
                    // value ={filterData}
                    />        
        </div>
        )
     }

