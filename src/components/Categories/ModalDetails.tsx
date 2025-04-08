"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

const ModalDetails = () => {
  const action = useSearchParams().get("action");

  if (action == "add") {
    return <AddCategory />;
  } else if (action == "edit") {
    return <EditCategory />;
  } else if (action == "delete") {
    return <DeleteCategory />;
  }
  return null;
};

export default ModalDetails;
