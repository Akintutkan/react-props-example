import "./App.css";
import User from "./components/User";

const friends=[{id:1,name:"akın"},{id:2,name:"ahmet"},{id:3,name:"Solomon"}]
//friends'i  burada tanımladık sonrasında içeriye props olarak gönderdik
function App() {
  return (
    <>
    <User 
    name = "Akın" 
    surname= "Tutkan" 
    isLoggedIn = {true}
    age={29} 
    friends={friends}
    address= {{
      title: "Fatih/istanbul",
      zip: 34104
    }} /> 
    {/* props olarak gönderdiğimiz değerleri burada kullandık */}
    </>
    
  );
}

export default App;


