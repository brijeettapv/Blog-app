import React, { useState } from 'react';

const Userform=()=>{
    const [title, setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [image,setImage]=useState('')

    const handleSubmit = async (event)=>{
        alert('done')
        event.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/createblog',{
                method:'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({title,description,image})
            })
            const data = await response.json()
            alert("Blog Posted successfully")
            console.log(data)
        } catch(error) {
            console.error(error)
            alert(error)
        }
    };

    return(
        <div className="container mt-5">
        <div className="row-justify-content-center">
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Create Blog</h3>
                    </div>
                    <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Title:</label>
                            <input type='text' className='form-control' value={title} onChange={(event)=> setTitle(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Description:</label>
                            <input type='textarea' className='form-control' value={description} onChange={(event)=>setDescription(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Images:</label>
                            <input type='text' className='form-control' value={image} onChange={(event)=>setImage(event.target.value)}/>
                        </div>
                        <button type='submit' className='btn btn-primary'>Create Blog</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Userform