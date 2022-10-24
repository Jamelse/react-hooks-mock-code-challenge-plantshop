import React, {useState} from "react";

function NewPlantForm({onPlantSubmit}) {
  
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: '',
  })

  function formChangeHandler(e){
    const key = e.target.name
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  function handleFormSubmit(e){
    e.preventDefault();
    const submitData = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(submitData)
    })
    .then(r => r.json())
    .then((data) => {
      onPlantSubmit(data)
    })
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={formChangeHandler}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={formChangeHandler}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={formChangeHandler}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
