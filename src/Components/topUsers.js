import React from 'react'
import axios from 'axios';
import { useEffect, useState} from 'react'

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const response = await axios.get("http://20.244.56.144/test/users", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzMTQxNDkwLCJpYXQiOjE3NDMxNDExOTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUxNzNlODcxLWRjNDItNGNkZi1iODY5LWQ4NDA0NmRhOWNkZiIsInN1YiI6InByYXR5dXNoamFnZGlzaGJpcm9sZTIwMjJAdml0YmhvcGFsLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJlMTczZTg3MS1kYzQyLTRjZGYtYjg2OS1kODQwNDZkYTljZGYiLCJjbGllbnRTZWNyZXQiOiJCYk1TU1JvUmRQYkNBQ0xpIiwib3duZXJOYW1lIjoiUHJhdHl1c2ggSmFnZGlzaCBCaXJvbGUiLCJvd25lckVtYWlsIjoicHJhdHl1c2hqYWdkaXNoYmlyb2xlMjAyMkB2aXRiaG9wYWwuYWMuaW4iLCJyb2xsTm8iOiIyMkJISTEwMTk0In0.bXrsFYQDFhEuX60alls47Tm-z2_M39v2TX3InNVbUDM",
          },
  
 
        });
        const usersData = response.data.users;
                  const usersArray = Object.entries(usersData).map(([id, name]) => ({
          id: parseInt(id), name: name,
        }));
        
                   console.log(usersArray);
        setTopUsers(usersArray);
      } catch (error) {
               console.error("Error fetching top users:", error);
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <div>
      <img src='./images/bn.gif'/>
                  <h1>Top Users</h1>
 
      <table className="table">
        <thead>
          <tr>
                   <th scope="col">#</th>
            <th scope="col">User ID</th>
            <th scope="col">Name</th>
             </tr>
        </thead> <tbody>
                     {topUsers.slice(0, 5).map((user, index) => (
            <tr key={user.id}>
                         <th scope="row">{index + 1}</th>
              <td>{user.id}</td>
                   <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
          </table>
    </div>
  );
};

export default TopUsers;
