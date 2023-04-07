"use client";

import { useState } from "react";

export default function BlogForm({
  id,
  title,
  content,
  method,
}: {
  id: number;
  title: string;
  content: string;
  method: "POST" | "PATCH";
}) {
  const [form, setForm] = useState({ id: id });
  const handleForm = (name: string, value: any) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    await fetch("/api/post", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  return (
    <form action="">
      <input
        name="title"
        onChange={(e) => handleForm("title", e.target.value)}
        defaultValue={title}
      ></input>
      <textarea
        name="content"
        onChange={(e) => handleForm("content", e.target.value)}
        defaultValue={content}
      ></textarea>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  );
}
