import React from "react";
import "./styles.css";
import getApiData from "./getApiData"

const wishListStyle = {
  padding: "10px",
  border: "1px solid black",
  background: "#f2f2f2",
  marginBottom: "10px",
  borderRadius: "5px",
}

function WishListItem({ item }){
  console.log(item)
  const { description, link } = item
  return (
    <div style={wishListStyle}>
      <span>{description} </span>
      <a href={link}>Buy</a>
    </div>
  )
}

function processList(wishListItem){
  return <WishListItem item={wishListItem} key={wishListItem.id}/>
}

function WishList({ wishList }) {
  console.log(wishList)
  return wishList.map(processList)
}

export default function App() {
  const data = getApiData();
  return (
    <div className="App">
      <h1>{data.appName}</h1>
      <h2>{data.userName}</h2>
      <WishList wishList={data.wishList} />
    </div>
  );
}
