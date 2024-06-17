import React from 'react'
import './SidebarItem.css'

export default function SidebarItem({ icon, iconName }) {
    return (
        <div className="sidebar-item">
            {icon}
            <p>{iconName}</p>
        </div>
    )
}

