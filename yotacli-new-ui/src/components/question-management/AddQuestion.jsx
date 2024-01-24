import React from "react";
import { CreateQuestion } from "./CreateQuestion";
import { UploadQuestion } from "./UploadQuestion";

export const AddQuestion = () => {
  return (
    <div>
      <CreateQuestion />
      <UploadQuestion />
    </div>
  );
};
