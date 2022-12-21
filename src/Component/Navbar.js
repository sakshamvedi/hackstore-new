import { AiOutlineAppstore ,AiOutlineHeart  , AiOutlineShoppingCart , AiFillAndroid, AiFillApple, AiFillWindows, AiFillAmazonCircle, AiFillCloud, AiFillApi, AiFillRedditSquare, AiFillCode, AiFillDingtalkCircle, AiFillThunderbolt, AiFillAppstore, AiFillStar, AiFillInteraction, AiOutlineArrowsAlt, AiOutlineThunderbolt, AiFillProfile, AiFillCustomerService, AiOutlineUser, AiFillMoneyCollect, AiOutlineSwitcher, AiOutlineAccountBook} from "react-icons/ai";
import { TfiArrowCircleLeft, TfiBag, TfiBolt } from "react-icons/tfi";
import { BsArrowRightCircleFill, BsFillHddNetworkFill, BsReverseLayoutSidebarInsetReverse, BsSearch } from "react-icons/bs";
import { CgHeart, CgLogOff, CgProfile } from "react-icons/cg";
import { GiHamburgerMenu, GiRibcage } from "react-icons/gi";
import {SiFirefox, SiFreelancer, SiHackster, SiInstapaper } from "react-icons/si";
import {VscChromeClose} from "react-icons/vsc";
import {FaAppStore} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"
import {TbLayoutDashboard, TbStar, TbView360Off, TbViewfinder} from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {googlein} from './firebase'

import axios from 'axios';
function Navbar() {
  const [profile, setprofile] = useState(false)

  const [webdata,setWebdata] = useState([{
    "Rank": 1,
    "Domain": "",
    "Linking Domains": "14,448,292",
    "Domain Authority": 100
  }]);

const [databox, setDatabox]  = useState(false);

  const [value,setValue] = useState([{
    "Rank": 1,
    "Domain": "",
    "Linking Domains": "14,448,292",
    "Domain Authority": 100
  }]);
  async function calldata()
  {
    const data = await axios.get("https://raw.githubusercontent.com/sakshamvedi/stunning-robot/main/webdataapi.json");
    console.table(data.data)
      setWebdata(data.data);
  }


function findvalue(info)
{
  console.log(info);
  const arr = webdata.filter(sites =>{
    const regex = new RegExp(info, 'gi');
     return sites.Domain.match(regex);
})
setValue(arr);
console.table(value)
}




useEffect(()=>{
calldata()
},[])




  const [menu, setMenu] = React.useState(false);
 const [developer , setDeveloper] = useState(false);
  return (
    <>
    <div  className='uppercontainer'>
         <navbar>
          <div className="menuicon">
            <GiHamburgerMenu color="white" size={20}/>
          </div>
          <h1>HackStore</h1>
          <img src='Cube-1s-200px.gif' id="logo"></img>
          <p1>
            {
              menu ?  <AiFillAppstore size={30} color = {"white"} stroke={"fill"}/>: <AiOutlineAppstore size={30} color = {"white"} stroke={"fill"}/>
            }
          <p onClick={()=>{setMenu(!menu)
          setDeveloper(false)}}>Stores</p>
          </p1>
          {
menu &&  <div className="storelist">
<p1>
<AiFillAndroid size={20} color = {"black"} stroke={"fill"}/>
<p>Android</p>
</p1>
<p1>
<AiFillWindows size={20} color = {"black"} stroke={"fill"}/>
<p>Windows</p>
</p1>
<p1>
<AiFillApple size={20} color = {"black"} stroke={"fill"}/>
<p>iOS</p>
</p1>
<Link to ="/webdevelopment">
<p1>
<SiJavascript size={20} color = {"black"} stroke={"fill"}/>
<p>Web-Development</p>
</p1>
</Link>
<p1>
<AiFillCloud size={20} color = {"black"} stroke={"fill"}/>
<p>Cloud</p>
</p1>
<p1>
<AiFillApi size={20} color = {"black"} stroke={"fill"}/>
<p>Dev-OPS</p>
</p1>
</div>

          }
         
          <p1>
         { developer ?   <AiFillThunderbolt size={30} color = {"white"} /> :<AiOutlineThunderbolt size={30} color = {"white"}/>}
          <p onClick={()=>{setDeveloper(!developer)
              setMenu(false)
          } }>Developers</p>
          {
            developer &&  <div className="developerlist">
            <p1>
            <SiFreelancer size={20} color = {"black"} stroke={"fill"}/>
            <p>FreeLancer</p>
            </p1>
            <p1>
            <BsFillHddNetworkFill size={20} color = {"black"} stroke={"fill"}/>
            <p>Job-Seekers</p>
            </p1>
            <p1>
            <SiFirefox size={20} color = {"black"} stroke={"fill"}/>
            <p>Interns</p>
            </p1>
            <p1>
            <AiFillStar size={20} color = {"black"} stroke={"fill"}/>
            <p>Perfect One</p>
            </p1>
            <p1>
            <AiFillInteraction size={20} color = {"black"} stroke={"fill"}/>
            <p>Trainee</p>
            </p1>
            <p1>
            <AiOutlineArrowsAlt size={20} color = {"black"} stroke={"fill"}/>
            <p>Noobs</p>
            </p1>
            </div>
          }
          </p1>

          <div className='searchbox'>
            <input placeholder='Search in Millions of Developers and their Useful Applications' onChange={(e)=>{findvalue(e.target.value) }}    onClick = {()=>setDatabox(!databox)}  ></input>  
          {
            databox ? <button onClick={()=>setDatabox(false)}><VscChromeClose/></button> :  <button><BsSearch/></button>
          } 
    {   databox  && <div className="databox">
      

         {
          
             value.map((webdata)=>{
            return(
              <>
              
              <p1>
                <p>{webdata.Domain}</p>
              </p1>
              </>
            )
             })
          }
         </div>}
          </div>

          <div className="sideoption">
          <p1><AiOutlineHeart  size = {30} color = {"white"}/>
          <p>Favourites </p></p1>
{
  localStorage.getItem("auth")?  <p1 onClick = {()=>{setprofile(!profile)}}  ><img src  = {localStorage.getItem("userpic")} className = "avatar" />
  {
  profile &&  <div className="profilemenu">
      <p1 id = "profile">
  <SiHackster size={20} color = {"black"} stroke={"fill"}/>
  <p>{localStorage.getItem("username")}<br></br>
  <small>{localStorage.getItem("useremail")}</small>
  </p>
  </p1>
  <p1>
  <AiOutlineUser size={20} color = {"black"} stroke={"fill"}/>
  <p>Your Profile</p>
  </p1>
  <p1>
  <FaAppStore size={20} color = {"black"} stroke={"fill"}/>
  <p>Publish App</p>
  </p1>
  <p1>
  <CgHeart size={20} color = {"black"} stroke={"fill"}/>
  <p>Fav. Projects</p>
  </p1>
  <p1 onClick ={()=>{
    localStorage.clear();
window.location.reload()

  }}> 
  <CgLogOff size={20} color = {"red"} stroke={"fill"}/>
  <p>Logout</p>
  </p1>
  </div>

}
  </p1> :  <p1   onClick = {googlein} >< CgProfile  size = {30} color = {"white"}/>
          <p>Login</p></p1>
}
         

<p1 className = "cart"><AiOutlineShoppingCart size={30} color = {"white"}/>
<badge>0</badge></p1>
          </div>
          <p2 className = "cart"  ><AiOutlineShoppingCart size={30} color = {"white"}/>
<badges>0</badges></p2>  

         </navbar>


    </div>

   
    
    </>
  )
}




export default Navbar