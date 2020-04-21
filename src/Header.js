import React from 'react';
import {Link} from 'react-router-dom';
export const Header = () => {
  const ul = {
     
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "#333",
        marginBottom:"20px",
        padding: "14px 16px"
      }
      
      const li = {
        marginRight:"25px",
        color:"white",
        cursor:"pointer",
        float: "left"
      }
      
     
        return (
            <ul style={ul}>
                <Link to="/">
                <li style={li}>Files</li>
                </Link>
                <Link to="/addFile">
                <li style={li}>create File</li>
                </Link>
            </ul>
        )
}