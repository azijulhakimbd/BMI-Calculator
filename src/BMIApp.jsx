// BMIApp.jsx
import { useState } from 'react';

export default function BMIApp() {
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 p-4">
      <div className="bg-white rounded-2xl p-6 w-80 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <img src="https://i.postimg.cc/sgLdKYQp/MAH-TECH-20220313-004420.png" alt="Profile" className="w-10 h-10 rounded-full" />
          <div className="font-semibold">BMI CALCULATOR V1</div>
          <div className="ml-auto">
            <button className="text-gray-500">
              ⚙️
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="w-40 h-20 bg-gradient-to-r from-yellow-400 via-green-400 to-red-400 rounded-t-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {bmi && <div className="text-lg font-bold">{bmi}</div>}
            </div>
          </div>
        </div>

        <div className="text-center mb-2">
          <div className="text-gray-600">Your BMI is</div>
          <div className="text-2xl font-bold text-purple-600">{bmi || '--'}</div>
          {bmi && (
            <div className="text-sm text-gray-500 mt-1">
              {weight}kg | {height / 30.48 ? (height / 30.48).toFixed(1) : '--'}ft | {gender.charAt(0).toUpperCase() + gender.slice(1)}
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
