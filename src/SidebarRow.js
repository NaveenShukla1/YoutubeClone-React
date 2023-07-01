import React from 'react'
import './SidebarRow.css'

function SidebarRow(props) {
  return (
    <div className={`sidebarRow ${props.selected && "selected"}`}>
        {/* means if selected &&-> then append 'selected after class name' */}
        <props.icon className="sidebarRow__icon "/>

        <h2 className="sidebarRow__title">{props.title}</h2>
    </div>
  )
}

export default SidebarRow
 