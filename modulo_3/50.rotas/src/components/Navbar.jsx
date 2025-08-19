import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
    marginRight: 8,
    textDecoration: "none",
    padding: "6px 10px",
    borderRadius: 6,
    border: "1px solid #eee",
    background: isActive ? "#77bbf3ff" : "#496cb9ff",
    color: "#ffffff"
}) 

export default function Navbar(){
    return(
        <nav style={{
            display:'flex',
            alignItems: 'center',
            gap: 8,
            padding: 12,
            borderBottom: '1px solid #cd8ee6ff'
        }}>

            <NavLink to="/" style={linkStyle}>Home</NavLink>
            <NavLink to="/sobre" style={linkStyle}>Sobre</NavLink>
            <NavLink to="/post/10" style={linkStyle}>Post 10</NavLink>
            
        </nav>
    )
}