"use client"
import { useState } from 'react';
import RegistrationForm from "./first";
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';
import Seventh from './Seventh';
import Eightth from './Eightth';
import Ninth from './Ninth';
import Tenth from './Tenth';
import Eleventh from './Eleventh';
import Twelfth from './Twelfth';
import storeData from '../Firebase/dataBase';
import Last from './Last';

export default function TwoPageForm() {
  const [page, setPage] = useState(1);
  // {
  //  const [name, setName] = useState('');
  //  const year = useState('');
  // }
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    whatsapp:'',
    branch: '',
    rating: [
      { category: "Time Management", value: 5 },
      { category: "Hard Work", value: 5 },
      { category: "Skill", value: 5 },
    ],
    field_of_interest: '',
    answer_first: '',
    answer_second: '',
    answer_third:'',
    answer_fourth:'',
    answer_fifth:'',
    answer_sixth:'',
    answer_seventh:'',
    answer_eighth: ''
  });



  const handleInputChange = (e) => {
    console.log(e)
    const { name, value } = e.target; //same variable should be given
    // const value = e.target.value
    //const name=e.target.name;
    // Check if the input is one of the rating categories
    if (name.startsWith("rating_")) {
      const index = parseInt(name.split("_")[1], 10); 
       console.log(index)
       console.log(typeof(value));
      const newRatingValue = Number(value); // Convert value to a number
 

      setFormData((prevData) => {
        console.log(prevData)
        const updatedRatings = prevData.rating.map((rating, i) =>
          i === index ? { ...rating, value: newRatingValue } : rating
        );
        return { ...prevData, rating: updatedRatings };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const isFormComplete = () => {
    // Check if simple string fields are filled
    const basicFieldsFilled = 
      formData.name !='' && 
      formData.year !='' && 
      formData.whatsapp !='' && 
      formData.branch !='' && 
      formData.field_of_interest !='' && 
      formData.answer_first !='' &&
      formData.answer_second !='' &&
      formData.answer_third !='' &&
      formData.answer_fourth !='' &&
      formData.answer_fifth !='' &&
      formData.answer_sixth !='' &&
      formData.answer_seventh !='' &&
      formData.answer_eighth !='';
  
    // Check if each rating item has a value
    const ratingsFilled = formData.rating.every(rating => rating.value !== null && rating.value !== undefined);
  
    // Return true if both basic fields and ratings are filled
    return basicFieldsFilled && ratingsFilled;
  };
  

  const handleSubmit = async(e) => {
    e.preventDefault()
    if (isFormComplete()) {
      // alert("enter")
      // return console.log('Form Data:', formData);
      await storeData( formData||'' );
      setPage(13)
    }
  };

  return (
    <div className=" w-full h-full" >
        <div>
        {page === 1 && (
          <div className='w-full h-full'>
            <RegistrationForm formData={formData} handleInputChange={handleInputChange} setpage={setPage}/>
          </div>
        )}

        {page === 2 && (
          <Second formData={formData} handleInputChange={handleInputChange} setpage={setPage}/>
        )}
        {page === 3 && (
          <Third rating={formData.rating} handleInputChange={handleInputChange} setpage={setPage}/>
        )}
        {page === 4 && (
          <Fourth formData={formData} handleInputChange={handleInputChange} setpage={setPage}/>
        )}
        {page === 5 && (
          <Fifth formData={formData} handleInputChange={handleInputChange} setpage={setPage}/>
        )}
        {page === 6 && (
          <Sixth formData={formData} handleInputChange={handleInputChange} setpage={setPage}/>
        )}
        {page === 7 && (
          <Seventh formData={formData} handleInputChange={handleInputChange} setpage={setPage}/>
        )}
        {page === 8 && (
          <Eightth formData={formData} handleInputChange={handleInputChange} setpage={setPage}/>
        )}
        {page === 9 && (
          <Ninth formData={formData} handleInputChange={handleInputChange} setpage={setPage}/>
        )}
        {page === 10 && (
          <Tenth formData={formData} handleInputChange={handleInputChange} setpage={setPage}/>
        )}
        {page === 11 && (
          <Eleventh formData={formData} handleInputChange={handleInputChange} setpage={setPage}
          />
          )}
          {page === 12 && (
            <Twelfth formData={formData} handleInputChange={handleInputChange}  handleSubmit={handleSubmit} isFormComplete={isFormComplete} setpage={setPage}/>
          )}
          {page ===13 && (
            <Last />
          )}
      </div>
    </div>
  );
}

