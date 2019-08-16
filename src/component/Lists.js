import React from "react";


function List({ superheroes }) {
    return (
    <div>
    {superheroes.map(hero => {
        return <h3 key={hero}>{hero}</h3>;
    })} 
    </div>
    );
    }

export default List;