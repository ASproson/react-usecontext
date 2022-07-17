import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ConsumeContext = () => {
  const { user, setUser } = useContext(UserContext);

  const handleFrameworkSwitch = () => {
    const frameworks = [
      { name: "React", language: "JavaScript" },
      { name: "Vue", language: "JavaScript" },
      { name: "Angular", language: "JavaScript" },
      { name: "Svelte", language: "JavaScript" },
      { name: "PHP", language: "Awful" },
      { name: "SSMS", language: "SQL" },
    ];
    let randomSelection = Math.floor(Math.random() * frameworks.length);
    let randomFramework = frameworks[randomSelection];
    return randomFramework;
  };

  return (
    <div>
      <h3>
        {user.name}, {user.language}
      </h3>
      <button onClick={() => setUser(handleFrameworkSwitch)}>
        Change framework
      </button>
    </div>
  );
};

export default ConsumeContext;
