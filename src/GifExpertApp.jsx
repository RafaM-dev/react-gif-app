import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () =>{

    const [ categories, setCategories ] = useState([ '' ]);
    //push muta el objeto y en react evita las mutaciones
    const onAddCategory = ( newCategory ) =>{
        // setCategories ( cat => [...cat, 'Valorant']);
        if (!categories.findIndex(category => category.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories([newCategory,...categories]);
        // setCategories([ 'Valorant', ...categories,]); // se puede poner de las dos maneras y cambia la posición
    };

    
    return (
        <>
            
            <h1>Search the category</h1> 

            <AddCategory 
                // setCategories= { setCategories }
                onNewCategory = { onAddCategory } //esto resume esto  event => onAddCategory(event) 
            />

            {/* <button onClick={onAddCategory}>Agregar</button> */}
                { 
                    categories.map( category => (
                        <GifGrid key={ category } category={ category }/>
                    ))
                }


        </>
    );
};