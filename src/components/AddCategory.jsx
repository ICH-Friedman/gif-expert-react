import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {
  
    const [inputValue, setInputValuet] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValuet( target.value );
    }
  
    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        
        // setCategories( (categories) => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValuet('');
    }
  
    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
  )
}
