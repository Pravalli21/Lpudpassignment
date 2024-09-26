import React ,{ useState } from 'react';
import './App.css';
import Profilebg from './Profilebg.png';
import profile from './Profile img.jpg';



function App() {
  const[logindetails,setlogindetails] = useState({
    email:'',
    password:'',
    active:false
  });
  function handlesubmitdata(e){
    e.preventDefault();
    setlogindetails(prev=>({
      ...prev,
      active:true
    }))
  }
  return (
    <div className="App">
      {
        (logindetails.email!=='' && logindetails.password!=='' && logindetails.active===true)===false?
        <div className='login-con'>
          <form className='login-form'>
            <h1>Login</h1>
            <div>
              <label>email</label>
              <input type='email' value={logindetails.email} onChange={(e)=>setlogindetails(prev=>({
                ...prev,
                email:e.target.value
              }))}/>
            </div>
            <div>
              <label>password</label>
              <input type='password' value={logindetails.password} onChange={(e)=>setlogindetails(prev=>({
                ...prev,
                password:e.target.value
              }))}/>
            </div>
            <button onClick={(e)=>handlesubmitdata(e)} >Sign In</button>
          </form>
          
        </div>
        :
        <div className='profile-con'>
          <section class="profile">
        <div class="profile-image">
            <div class="bannerimg">
                <img src={Profilebg} alt="profilebg"/>
            </div>
            <div class="profileimg">
                <img src={profile} alt=""/>
            </div>
        </div>
        <div class="profile-content">
            <div class="profile-content1">
                <h1>...</h1>
            </div>
            <div class="profileName">
                <h1>{logindetails.email}</h1>
            </div>
            <div class="profileServiceName">
                <h1>Cognizant</h1>
            </div>
            <div class="profileServiceName">
                <p><span>4.5</span>  stars</p>
                <p><span>132</span>  reviews</p>
            </div>
            <div class="profileServiceLocation">
                <div>
                    <p>Location</p>

               </div>
                <div> 
                    <p>Date Joined</p>
                </div>
            </div>
        </div>

        <div class="feedbackHeading">
            <h1>Feedback</h1>
        </div>

        <div class="feedback">
            <div class="feedback-card">
                <div class="feedbackhead">
                    <img src={profile} alt=""/>
                    <h1>Cusomer Name</h1>
                    <div class="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div class="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div class="feedback-card">
                <div class="feedbackhead">
                    <img src={profile} alt=""/>
                    <h1>Cusomer Name</h1>
                    <div class="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div class="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div class="feedback-card">
                <div class="feedbackhead">
                    <img src={profile} alt=""/>
                    <h1>Cusomer Name</h1>
                    <div class="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div class="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div class="feedback-card">
                <div class="feedbackhead">
                    <img src={profile} alt=""/>
                    <h1>Cusomer Name</h1>
                    <div class="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div class="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div class="feedback-card">
                <div class="feedbackhead">
                    <img src={profile} alt=""/>
                    <h1>Cusomer Name</h1>
                    <div class="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div class="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            <div class="feedback-card">
                <div class="feedbackhead">
                    <img src={profile} alt=""/>
                    <h1>Cusomer Name</h1>
                    <div class="feedback-rating">
                        <h1>Rating: </h1><p>3.5/5</p>
                    </div>
                </div>
                <div class="feedbackbody">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero cum fugit, consequatur neque et nisi necessitatibus quas doloremque, corporis tenetur molestias voluptas consequuntur quaerat dolor dolorem harum sit quos ullam ea perspiciatis, non laboriosam.</p>
                </div>
            </div>
            
            
        </div>

        <div class="Blogsheading">
            <h1>Blogs</h1>
        </div>

        <div class="blogsSection">
            <div class="blogcard">
                <div class="bloghead">
                    <img src={profile} alt=""/>
                </div>
                <div class="blog-label">
                    <p>Health</p>
                </div>
                <div class="blog-card-body">
                    <h1>Blog name comes hereBlog name comes here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti!</p>
                    <button>Read More...</button>
                </div>
            </div>
            <div class="blogcard">
                <div class="bloghead">
                    <img src={profile} alt="profile"/>
                </div>
                <div class="blog-label">
                    <p>Health</p>
                </div>
                <div class="blog-card-body">
                    <h1>Blog name comes hereBlog name comes here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti!</p>
                    <button>Read More...</button>
                </div>
            </div>
            <div class="blogcard">
                <div class="bloghead">
                    <img src={profile} alt="profile"/>
                </div>
                <div class="blog-label">
                    <p>Health</p>
                </div>
                <div class="blog-card-body">
                    <h1>Blog name comes hereBlog name comes here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti! Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nihil praesentium incidunt nemo ratione molestiae fugit rem, provident corporis facere qui officia est ipsum quaerat necessitatibus ipsa quibusdam molestias accusantium eligendi perferendis? Commodi, deleniti!</p>
                    <button>Read More...</button>
                </div>
            </div>
            
        </div>
    </section>
        </div>
      }
    </div>
  );
}

export default App;
