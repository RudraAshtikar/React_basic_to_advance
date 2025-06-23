import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="text-center text-3xl bg-gray-600 p-4">User: {userId}</div>
  );
}
