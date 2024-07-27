import React from 'react'
import MenuCard from './MenuCard'
import burger1 from "../../assests/burger1.png";
import burger2 from "../../assests/burger2.png";
import burger3 from "../../assests/burger3.png";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const Menu = () => {
  const dispatch= useDispatch();
  const addToCartHandler=(itemNum)=>{
switch(itemNum){
  case 1:
   dispatch({type:"cheeseBurgerIncrement"});
   dispatch({type:"calculatePrice"});
   toast.success("Added To Cart");
   break;
   case 2:
    dispatch({type:"vegCheeseBurgerIncrement"});
    dispatch({type:"calculatePrice"});
    toast.success("Added To Cart");

   break;
   case 3:
    dispatch({type:" burgerWithFriesIncrement"});
    dispatch({type:"calculatePrice"});
    toast.success("Added To Cart");
   break;
}
  }
  return (
  <section id="menu">
    <h1>
    MENU  
    </h1>
    <div>
      <MenuCard itemNum={1} 
      bugerSrc={burger1} 
      price={250} 
      title="Cheese Burger" 
      handler={addToCartHandler}
      delay={0.1}/>
      <MenuCard itemNum={2} 
      bugerSrc={burger2} 
     price={500} 
     title="Cheese Mix  top loaded Veggie Burger" 
      handler={addToCartHandler}
      delay={0.5}/>
      <MenuCard itemNum={3} 
      bugerSrc={burger3} 
      price={750} 
      title="Cheese Chicken Tofu Burger with French fries" 
      handler={addToCartHandler}
      delay={0.8}/>
    </div>
  </section>
  )
}

export default Menu