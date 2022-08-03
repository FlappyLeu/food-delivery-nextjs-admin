import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import Router from "next/router";
import * as React from "react";
import Alert from "@mui/material/Alert";

export default function cat({ category }) {
  console.log(category);
  setShowAlert(true);

  const handleSubmit = () => {};
  const router = useRouter();

  return (
    <>
      <h1>One category</h1>
      <Button onClick={handlesubmit}>Button</Button>
      <Alert severity="success" color="info">
        This is a success alert — check it out!
      </Alert>
    </>
  );
}

export async function getStaticPaths() {
  const res = await axios.get("http://loclahost:3000/category");

  return {
    fallback: false,
    paths: res.data.data.map((category) => ({
      params: { id: category.id.toSring() },
    })),
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `http://localhost:3000/category/edit/${paras.id}`
  );
  console.log(data.data);
  return {
    props: {
      category: res.data.data,
    },
  };
}
