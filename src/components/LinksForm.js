import React, { useState, useEffect } from 'react'


function LinksForm(props) {

    const initialStateValues = {
        url: '',
        name: '',
        description: ''
    }

    const [values, setValues] = useState(initialStateValues)

    const handleInputChange = e =>{
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
        props.addOrEditTask(values)
        setValues({...initialStateValues})

    }
    useEffect(() => {
        console.log("NoOOOOO  editing")
        if (props.currentId === "") {
            setValues({...initialStateValues})
            console.log("No  editing")
        }else{
            console.log("editing")
        }
    }, [props.currentId])

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">insert_link</i>
                </div>
                <input type="text" 
                       className="form-control" 
                       placeholder="https://someurl.com" 
                       name="url"
                       onChange={handleInputChange}
                       value={values.url}/>

            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input type="text" 
                className="form-control" 
                placeholder="website name" 
                name="name"
                onChange={handleInputChange}
                value={values.name}/>

            </div>

            <div className="form-group">
                <textarea name="description" 
                          className="form-control" 
                          rows="3" placeholder="write a description"
                          onChange={handleInputChange}
                          value={values.description}></textarea>
            </div>

            <button className="btn btn-primary btn-block">
                save
            </button>
        </form>
    )
}

export default LinksForm

 