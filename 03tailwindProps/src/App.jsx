import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  let myObj = {
    username: "Rudra",
    age: 21,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded mb-4 ">Rudra</h1>
      <Card
        username={"chaiaurcode"}
        btnText="click ME"
        image={
          "https://media.istockphoto.com/id/1497809928/photo/systematical-planning-work-increase-production-capacity-and-reduce-costs-production-planning.jpg?s=612x612&w=is&k=20&c=1ZCougiD4FiPNWDitsXkiCzGKpEVgV7WCG_8HVRCQQo="
        }
      />
      <Card
        username={"bob"}
        btnText="tap ME"
        image={
          "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?q=80&w=832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </>
  );
}

export default App;
