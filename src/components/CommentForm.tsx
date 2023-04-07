"use client";

import { useState } from "react";

export default function CommentForm({ id }: { id: number }) {
  const [form, setForm] = useState({ blogPostId: id });
  const handleForm = (name: string, value: any) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    await fetch("/api/comment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  return (
    <form action="">
      <label>Name:</label>
      <input
        type="text"
        name="author"
        onChange={(e) => handleForm("author", e.target.value)}
      ></input>
      <br></br>
      <label>Comment:</label>
      <input
        type="text"
        name="comment"
        onChange={(e) => handleForm("comment", e.target.value)}
      ></input>
      <br></br>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  );
}
