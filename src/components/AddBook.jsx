import React, { useState } from 'react'



function AddBook() {
    const [title,setTitle] = useState("");
    const [author,setAuthor] = useState("");
    const [description,setDescription] = useState("");
    const [imgurl,setImgurl] = useState("");
    const handleTitle = (event) => {
        setTitle(event.target.value);
      };
      const handleAuthor = (event) => {
        setAuthor(event.target.value);
      };
      const handleDescription = (event) => {
        setDescription(event.target.value);
      };
      const handleImg = (event) => {
        setImgurl(event.target.value);
      };
      const handleSubmit = (e)=>{
        e.preventDefault()
          console.log({title:title,author:author,description:description,imgurl:imgurl})
      }
    return (


    <div>
        <form action="/" onSubmit={handleSubmit}>
        
            <input type="text" onChange={handleTitle} placeholder='Title'  required/><br />
            <input type="text" onChange={handleAuthor} placeholder='Author' required/><br />
            <textarea name="" onChange={handleDescription} placeholder='Description' required></textarea><br />
            <input type="text" onChange={handleImg} placeholder='Image URL' required/><br />
            <button type='submit' > Submit</button>
        </form>
        
      
    </div>
  )
}

export default AddBook
