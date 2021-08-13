import React from 'react'

function SelectNombrePool({Nombrepool,setNombrepool,classname}) {
    return (
        
        <select name="nombrePool" className={`form-select mb-3  ${classname}`}  placeholder="Select Pool" onChange={setNombrepool} ><option value="" label=" "></option>
        <option value=" pool.space">(OP)  pool.space</option>
        <option value=" huobipool.com">  huobipool.com</option>
        <option value=" copool.com">  copool.com</option>
        <option value=" ihpool.com">(OP)  ihpool.com</option>
        <option value="teepool.com">(OP) teepool.com</option>
        <option value="core-pool.com"> core-pool.com</option>
        <option value=" foxypool.io"> foxypool.io</option>
        <option value="xchpool.org">(OP) xchpool.org</option>
        <option value="hookpool.net"> hookpool.net</option>
        <option value="awpool.com">(PRINCIPAL) awpool.com</option>
        <option value="ecochia.io">(OP) ecochia.io</option>
        <option value=" keepool.org">  keepool.org</option>
        <option value="flexpool.io">(OP) flexpool.io</option>
        <option value=" cloverpool.com">  cloverpool.com</option>
        <option value="poolchia.com">(OP) poolchia.com</option>
        <option value="migpool.com">(OP) migpool.com</option>
        <option value=" poolsar.io">(OP)  poolsar.io</option>
        <option value="ihpool" selected={true}>(OG) ihpool</option>

        </select>
    )
}

export default SelectNombrePool