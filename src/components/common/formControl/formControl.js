import React from 'react';
import style from './formControl.module.css'




export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;

    return (
        <div>
            <div className = {style.textarea+' '+(hasError ? style.error : "") }>
                <textarea {...input} {...props} />
            </div>
    {hasError && <div className= {style.alertError}>
                    <img src="https://loading.io/icon/4grrdv" />
                    <p>{meta.error}</p>
                </div>
    }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;

    return (
        <div>
            <div className = {style.textarea+' '+(hasError ? style.error : "") }>
                <input {...input} {...props} />
            </div>
    {hasError && <div className= {style.alertError}>
                    <img src="https://lh3.googleusercontent.com/proxy/_OGkjW0OlLFK4OsnJ8KX4qn3u8f49h1GoAe4VaoLcQWn37SHpaxa8L3CjKiH2sVeTYdrKN54T8xOvKDe34aCzQr4SrIyQSbu2rPQ4VDc3vJbI6s" />
                    <p>{meta.error}</p>
                </div>
    }
        </div>
    )
}