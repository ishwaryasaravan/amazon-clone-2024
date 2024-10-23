import Login from "./Auth/login"
import Signup from "./Auth/signup"

function HomeScreen (){
    return(
        <div>
           <h1>HomeScreen</h1>
           <Signup/>
           <Login/>
        </div>
    )
}

export default HomeScreen