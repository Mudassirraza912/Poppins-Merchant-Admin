import React from 'react'

const RenderError = ({
    errorText = ""
}) => {
    if (errorText) {
        return (
            <p className="float-right text-danger size-5">{errorText}</p>
        )
    } else {
        return null
    }
}

export default RenderError
