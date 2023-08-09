import './App.css';
import React, { useState } from 'react';
import UserInfoCard from './UserInfoCard';


function App() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        }
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
  
    return (
      <div className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen'>
      <div className="container mx-auto py-8">
        <form onSubmit={handleFormSubmit} className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter GitHub Username"
            className="border p-4 rounded-l focus:outline-none focus:border-blue-500 w-1/2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-4 rounded-r">
            Search
          </button>
        </form>
        {userData && <UserInfoCard userData={userData} />}
      </div>
    </div>
  );
}

export default App;
