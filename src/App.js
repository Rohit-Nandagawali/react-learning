

import React from 'react'


// this is card component
function Card() {
  return (
    <div style={{ border: "solid black 2px", padding: "10px", margin: "10px", borderRadius: "20px" }}>
      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile"

        style={{ borderRadius: '50%' }}
      />

      {/* bharat-shinde : bharatShinde
          background-image: backgroundImage
          background-size: backgroundSize
       */}
      <h1 style={{ color: '#010101', fontSize: '20px', marginTop: 0, marginBottom: "0px" }}>@rohit</h1>

      <p style={{ marginTop: "0px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, quam!</p>

      <div style={{ backgroundColor: 'blue', color: 'white', padding: "10px", borderRadius: '10px', width: '50px' }}>follow</div>

    </div >
  )
}



function App() {
  return (
    <div className="">
      <Card />
      <Card />
      <Card />


    </div>

  );
}

export default App;
