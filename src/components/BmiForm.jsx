import React, { useState } from 'react';

function BmiForm() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBMI] = useState('');
  const [weightStatus, setWeightStatus] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = () => {
    if (weight <= 0 || height <= 0) {
      setError('Weight and height must be greater than 0 / defined!');
      setBMI('');
      setWeightStatus('');
      return;
    } else {
      setError('');
    }

    const bmiValue = (weight / (height * height)).toFixed(2);
    setBMI(bmiValue);

    let weightStatus = '';

    switch (gender.toLowerCase()) {
      case 'male':
      case 'female':
        if (bmiValue < 18.5) {
          weightStatus = 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
          weightStatus = 'Normal weight';
        } else {
          weightStatus = 'Overweight';
        }
        break;

      default:
        weightStatus = 'Please specify gender to proceed!';
    }

    setWeightStatus(weightStatus);
  };

  const handleInputChange = (setter, value) => {
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
    setWeight('');
    setHeight('');
    setGender('');
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <label>
            Weight (kg):
            <input
              type='number'
              value={weight}
              onChange={(e) => handleInputChange(setWeight, e.target.value)}
              placeholder='Enter weight'
            />
          </label>
          <br />

          <label>
            Height (m):
            <input
              type='number'
              value={height}
              onChange={(e) => handleInputChange(setHeight, e.target.value)}
              placeholder='Enter height'
            />
          </label>
          <br />

          <label>
            Gender:
            <div>
              <input
                type='radio'
                id='male'
                name='gender'
                value='male'
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor='male'>Male</label>
            </div>

            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='female'
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor='female'>Female</label>
            </div>
          </label>
          <br />

          <button type='submit'>Calculate BMI</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {bmi && weightStatus && (
          <div>
            <p className='bmi'>Your BMI is: {bmi}</p>
            <p className='status'>Your weight status is: {weightStatus}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default BmiForm;
