import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [userData, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get('/api/users/details');
        setUsername(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div>
      <h1>Welcome, {userData ? userData.username : 'Loading...'}!</h1>
    </div>
  );
}
