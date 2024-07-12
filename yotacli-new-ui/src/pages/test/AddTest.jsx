import { useState } from "react";
import { BasicInfo } from "./BasicInfo";
import { TestSetting } from "./TestSetting";
import { AddQuestionTest } from "./AddQuestionTest";

export const AddTest = () => {
  const [nextScreen, setNextScreen] = useState("screen1");

  const renderScreen = () => {
    switch (nextScreen) {
      case "screen1":
        return <BasicInfo nextScreen={setNextScreen} />;
      case "screen2":
        return <TestSetting nextScreen={setNextScreen} />;
      case "screen3":
        return <AddQuestionTest />;
      default:
        return <TestSetting nextScreen={setNextScreen} />;
    }
  };

  return <div>{renderScreen()}</div>;
};
