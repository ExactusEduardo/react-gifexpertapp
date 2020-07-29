import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {
    console.log({ id, title, url });
    return (
        // <div class="animate__animated animate__bounce animate__delay-2s">Example</div>
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={title} />
            <p>{ title }</p>
        </div>
    )
}
