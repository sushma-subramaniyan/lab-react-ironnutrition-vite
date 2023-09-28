// Your code here
import {useState} from 'react';


const AddFoodForm = (props) => {
    const [name, setName] = useState('name=${uuidv4}')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
   

    const handleSubmit = event => {
        event.preventDefault()
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input value={name}
                onChange={event => {setName(event.target.value)}}
                />
            </label><br/>
            <label>
                Image
                <input value={image}
                onChange={event => {setImage(event.target.value)}}
                />
            </label><br/>
            <label>
                Calories
                <input value={calories}
                onChange={event => {setCalories(event.target.value)}}
                />
            </label><br/>
            <label>
                Servings
                <input value={servings}
                onChange={event => {setServings(event.target.value)}}
                />
            </label> <br/>
            <button type='submit' onClick={()=> props.newFood}>Create</button>
        </form>
     );
}
 
export default AddFoodForm;