import React from "react";
import {Link} from "react-router-dom"
import logo from "../Assets/Logo.png"

export default function Logo() {
  return (
    
  <div><Link to="/"><img src={logo} className="logo" alt="logo" /></Link></div>
  )}
