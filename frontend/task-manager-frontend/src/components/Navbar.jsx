import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav style = {{padding:"1rem", background:"#282c34", color:"white", justifyContent:"center", display:"flex"}}>
            <Link to = "/" style={{color:"white", textDecoration:"none", marginRight:"1rem", alignContent:"left"}}>Home</Link>
            <Link to = "/add" style={{color:"white", alignContent:"right"}}>Add Task</Link>
        </nav>
    )
};

export default Navbar;