// BMIAppWithGauge.jsx
import { useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function BMIAppWithGauge() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
    }
  };

  const resetAll = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('male');
    setBmi(null);
  };

  const bmiStatus = () => {
    if (!bmi) return '';
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) return 'Normal';
    else if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    else return 'Obese';
  };

  // For gauge color based on BMI
  const getColor = () => {
    if (!bmi) return '#d1d5db'; // Gray
    if (bmi < 18.5) return '#facc15'; // Yellow
    if (bmi >= 18.5 && bmi < 24.9) return '#22c55e'; // Green
    if (bmi >= 25 && bmi < 29.9) return '#f97316'; // Orange
    return '#ef4444'; // Red
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 p-4">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <img src="https://i.postimg.cc/sgLdKYQp/MAH-TECH-20220313-004420.png" alt="Profile" className="w-10 h-10 rounded-full" />
          <div className="font-semibold"> BMI CALCULATOR V2</div>
          <div className="ml-auto text-gray-500">⚙️</div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="w-40 h-40">
            <CircularProgressbarWithChildren
              value={bmi ? Math.min((bmi / 40) * 100, 100) : 0}
              strokeWidth={10}
              styles={buildStyles({
                pathColor: getColor(),
                trailColor: '#d1d5db',
              })}
            >
              <div className="text-center">
                <div className="text-xs text-gray-600">BMI</div>
                <div className="text-2xl font-bold text-purple-600">{bmi || '--'}</div>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>

        <div className="text-center mb-2">
          {bmi && (
            <div className="text-sm text-gray-500">
              {weight}kg | {(height / 30.48).toFixed(1)}ft | {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </div>
          )}
        </div>

        {bmi && (
          <div className="bg-blue-200 rounded-full px-4 py-1 text-center text-sm text-gray-800 font-medium mb-6">
            {bmiStatus()}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Weight</label>
            <input
              type="number"
              className="w-full border border-green-300 rounded-lg px-2 py-1 outline-none"
              placeholder="Your Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Height</label>
            <input
              type="number"
              className="w-full border border-green-300 rounded-lg px-2 py-1 outline-none"
              placeholder="Your Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Age</label>
            <input
              type="number"
              className="w-full border border-green-300 rounded-lg px-2 py-1 outline-none"
              placeholder="Your Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Gender</label>
            <div className="flex gap-2">
              <button
                className={`flex-1 rounded-lg py-1 text-sm ${gender === 'male' ? 'bg-green-300' : 'bg-gray-200'}`}
                onClick={() => setGender('male')}
              >
                Male
              </button>
              <button
                className={`flex-1 rounded-lg py-1 text-sm ${gender === 'female' ? 'bg-green-300' : 'bg-gray-200'}`}
                onClick={() => setGender('female')}
              >
                Female
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={resetAll}
            className="flex-1 bg-purple-200 text-purple-800 py-2 rounded-lg font-semibold"
          >
            Reset All
          </button>
          <button
            onClick={calculateBMI}
            className="flex-1 bg-purple-500 text-white py-2 rounded-lg font-semibold"
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}
