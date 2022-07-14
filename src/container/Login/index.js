import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {

    useEffect(() => {
        localStorage.setItem('login',false);
    },[]);
    
    const navigate = useNavigate();

    const formValid = () => {
        var vaildpass = document.getElementById("pass").value;
      
        if (vaildpass.length < 8 || vaildpass.length >= 20) {
          document.getElementById("vaild-pass").innerHTML = "Minimum 8 characters";
          return false;
        } else {
          document.getElementById("vaild-pass").innerHTML = "";
        }
      }
      
    const showPassword = () => {
        var x = document.getElementById("pass");
        if (x.type === "password") {
          x.type = "text";
          document.getElementById("showimg").src =
            "https://static.thenounproject.com/png/777494-200.png";
        } else {
          x.type = "password";
          document.getElementById("showimg").src =
            "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var vaildpass = document.getElementById("pass").value;
        var username = document.getElementById("user").value;
      
        if (vaildpass.length >= 8) {
            if(username == "admin" && vaildpass == "12345678"){
                localStorage.setItem('login',true);
                toast.success("Successfully Logged In", {
                    position: toast.POSITION.TOP_CENTER
                });
                navigate("/dashboard");
            }
            else{
                toast.error("username or password is incorrect", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        }
    }
    
  return (
    <div className="login-page">
        <div className="form">
            <form className="login-form" onSubmit={(e)=>handleSubmit(e)} target="_blank">
                <h2 className="text-center">SIGN IN</h2>
                <input type="text" required placeholder="Username" id="user" autoComplete="off" />
                <input onInput={()=> formValid()} type="password" required placeholder="Password" id="pass" autoComplete="off" />
                <img src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
                    onClick={()=> showPassword()} id="showimg"/>
                <span id="vaild-pass"></span>
                <button type="submit">SIGN IN</button>
                <p className="message"><a href="#">Forgot your password?</a></p>
            </form>
        </div>
    </div>
  );
}

export default Login;