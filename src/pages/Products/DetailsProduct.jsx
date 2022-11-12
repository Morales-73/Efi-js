import React from 'react'
import { useParams } from "react-router-dom";

export default function DetailsProduct() {
  const params = useParams();
  
  return <span>ID: {params.id}</span>;
}
