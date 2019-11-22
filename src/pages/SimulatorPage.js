import React from 'react';

import Navbar from '../components/Navbar';
import Simulator from '../components/Simulator';

class SimulatorPage extends React.Component {
  render() {
    return (
      <div className="bg-gray-100 h-screen">
        <Navbar />
        <Simulator />
      </div>
    );
  }
}

export default SimulatorPage;
