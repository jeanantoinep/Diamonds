import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    // Fetch diamonds data from the server
    const fetchDiamonds = async () => {
      try {
        const response = await axios.get('/diamonds');
        setDiamonds(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDiamonds();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Info</th>
            <th>Quality</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Supplier</th>
            <th>Status</th>
            <th>Import Date</th>
            <th>Export Date</th>
          </tr>
        </thead>
        <tbody>
          {diamonds.map((diamond) => (
            <tr key={diamond._id}>
              <td>{diamond.info}</td>
              <td>{diamond.quality}</td>
              <td>{diamond.quantity}</td>
              <td>{diamond.price}</td>
              <td>{diamond.supplier}</td>
              <td>{diamond.status}</td>
              <td>{diamond.importdate}</td>
              <td>{diamond.exportdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
