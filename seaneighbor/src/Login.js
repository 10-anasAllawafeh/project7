import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
// import {useLocalStorage} from "react-use-storage";



function Login(){
// const [user_id, setUserId, removeUserId] = useLocalStorage("user_id", "");
// const [login, setLogin, removeLogin] = useLocalStorage("login", false);
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost/project7/seaneighbor/php/readuser.php`)
          .then((response) => {
              setAPIData(response.data);
            //   console.log(response.data,"res.data")
          })
  }, [])

  const [pass, setpass] = useState('');
  const [email, setEmail] = useState('');

  const passHandel = (e)=>{setpass(e.target.value)}
  const emailHandel = (e)=>{setEmail(e.target.value)}
   

  const handelLog=(event)=>{
    event.preventDefault();
    // console.log(pass,email);
    // APIData.map(user => console.log(user.email))
    APIData.map((el)=>{
        document.getElementById('e1').style.display="none";
               document.getElementById('e2').style.display="none";
   
  
//    console.log(e, el.email);
//    console.log('"'+p+'"');
        if(pass ==el.pass&& email == el.email){
            // console.log('"'+pass+'"', '"'+el.pass+'"','"'+email+'"', '"'+el.email+'"', 'yas');
            // let id_user= el.id;
          
            // localStorage.setItem('user', JSON.stringify(id_user)) 


            // setUserId(el.id)
            // setLogin(true)
            // console.log(id_user);
            window.location.href = "/";
           
           }else{
               console.log('"'+pass+'"', '"'+el.pass+'"','"'+email+'"', '"'+el.email+'"',  'no');
               document.getElementById('e1').style.display="block";
               document.getElementById('e2').style.display="block";
            }
         })
   
  }


    return(
        <div className="register-photo " style={{marginTop: '110px'}}>
          <div className="form-container " > 
          <div className="image-holder" />
            <form id='regForm' className="d"  noValidate>
              <h2 className="text-center">Login</h2>
               
                

                <div className="form-group">
                    <label>Email</label><br></br>
                    <input
                        type="email"
                       
                        name="email"
                        onChange={ emailHandel}
                        className="form-control"
                    />
                       <p id="e1" style={{color:'red', display:'none'}}> Invalid email</p>
                   
                </div>

                <div className="form-group">
                    <label>Password</label><br></br>
                    <input
                        type="password"
             
                        name="pass"
                        onChange={passHandel}
                        className="form-control"
                    />
                    <p id="e2" style={{color:'red', display:'none'}}> Invalid password</p>
                  
                </div>

                <div>

                <button type="submit" className="btn btn-block " style={{backgroundColor: '#FDBE33'}} onClick={handelLog}>Login</button> 
                <p id='regP' className='mt-4'>Do not have an account? <a href="/Signup">Signup</a></p>
                
                </div>
                

            </form>
            
            </div>
            </div>
            
           
    )
}

export default Login ;