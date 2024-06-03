import { useState } from "react";
import { BasicInfo } from "./BasicInfo";
import { TestSetting } from "./TestSetting";
import { AddQuestion } from "./AddQuestion";

export const AddTest = () => {
  const [nextScreen, setNextScreen] = useState("screen1");

  const renderScreen = () => {
    switch (nextScreen) {
      case "screen1":
        return <BasicInfo nextScreen={setNextScreen} />;
      case "screen2":
        return <TestSetting nextScreen={setNextScreen} />;
      case "screen3":
        return <AddQuestion />;
      default:
        return <AddQuestion />;
    }
  };

  return <div>{renderScreen()}</div>;
};
