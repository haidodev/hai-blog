import { useState } from "react"

const Home = () => {
    //let name = "mario";
    const [name, setName] = useState('mario');
    const handleClick = () => {
        setName("luigi");
        alert("Hello, " + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;