//Главная страница, с пользователями
"use client";  
import { useState } from "react";
import Header from "@/components/Header";


export default function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
    <Header onAddUserClick={ () => setIsDialogOpen (true)} />
    </>
  );
}

