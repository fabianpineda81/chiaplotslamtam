import React from 'react'

function Spinner({spinner}) {
    return (
        <div class={`text-center contenedor_spiner ${spinner?"":"display_none"}`}>
        <div class="spinner-border text-success spiner" role="status">
            <span class="sr-only text-success">Loading...</span>
        </div>
    </div>
    )
}

export default Spinner