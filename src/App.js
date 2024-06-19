
import React from 'react'
import './App.css'
import { Compass, Heart, Home, MessageCircleHeart, Search, SquarePlay, SquarePlus } from 'lucide-react'
import InstagramLogo from './instagram.png'
import profile from './profile.jpg'
import SidebarItem from './components/SidebarItem/SidebarItem'
import StoryCard from './components/StoryCard/StoryCard'
import SuggestionCard from './components/SuggestionCard/SuggestionCard'



function App() {
  return (
    <div className="main-container">
      {/* sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src={InstagramLogo} alt="" width={150} />
        </div>

        <SidebarItem icon={<Home />} iconName={"Home"} />
        <SidebarItem icon={<Search />} iconName={"Search"} />
        <SidebarItem icon={<Compass />} iconName={"Explore"} />
        <SidebarItem icon={<SquarePlay />} iconName={"Reels"} />
        <SidebarItem icon={<MessageCircleHeart />} iconName={"Messages"} />
        <SidebarItem icon={<Heart />} iconName={"Notification"} />
        <SidebarItem icon={<SquarePlus />} iconName={"Create"} />

        <div className="sidebar-item">
          <img src={profile} alt="" width={28} className='profile' />
          <span>Profile</span>
        </div>

      </div>

      {/* post section */}
      <div className="post-section">
        <div className="story-section">

          <StoryCard name={"Bharat Shinde"} src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"} />

          <StoryCard name={"Rohit Nandagawali"} src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12"} />

          <StoryCard name={"Sanket Satpute"} src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"} />

          <StoryCard name={"Bharat Shinde"} src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"} />

          <StoryCard name={"Rohit Nandagawali"} src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12"} />

          <StoryCard name={"Sanket Satpute"} src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"} />

          <StoryCard name={"Sanket Satpute"} src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"} />




        </div>
        <div className="all-post">

        </div>
      </div>

      {/* suggestion */}
      <div className="suggestion">

        <SuggestionCard
          src={profile}
          name={"Rohit Nandagawali"}
          username={"_wh0_am_i"}
          btnText={"Switch"}
        />

        <div className="suggestion-text">
          <p style={{ color: '#a8a8a8', fontWeight: 600 }}>Suggested for you</p>
          <p>See All</p>
        </div>

        <SuggestionCard
          src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12"}
          name={"Rohit Nandagawali"}

        />

        <SuggestionCard
          src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12"}
          name={"Rohit Nandagawali"}
        />

        <SuggestionCard
          src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12"}
          name={"Rohit Nandagawali"}
        />

        <SuggestionCard
          src={"https://images.unsplash.com/photo-1527980965255-d3b416303d12"}
          name={"Rohit Nandagawali"}
        />

      </div>

    </div>

  );
}

export default App;
