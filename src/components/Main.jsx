import React, { useState } from "react";
import "./Main.css";
import mockData from "../constants/data";

const Main = () => {
  const [joinees, setJoinees] = useState(mockData);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [hexCode, setHexCode] = useState("");

  const addRows = (values) => {
    const updatedJoinees = [...joinees];
    updatedJoinees.push(values);
    setJoinees(updatedJoinees);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      email,
      name,
      hexCode,
    };
    addRows(values);
    setEmail("");
    setName("");
    setHexCode("");
  };

  return (
    <div className="mainDiv">
      <div>
        <h1>
          <span className="headingFirstPart">Join </span>
          <span className="heading">Unique </span> <br />
          <span className="heading">Schools</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="inputDivs">
            <input
              className="input"
              type="email"
              required
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputDivs">
            <input
              className="input"
              type="text"
              required
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputDivs">
            <input
              className="large"
              type="text"
              required
              value={hexCode}
              placeholder="16 digit hex code"
              onChange={(e) => setHexCode(e.target.value)}
            />
            <input
              className="small"
              type="text"
              required
              value={hexCode}
              placeholder="Ethereum Address"
              onChange={(e) => setHexCode(e.target.value)}
            />
          </div>
          <div className="inputDivs">
            <button type="submit" className="joinBtn">
              Join
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1 className="tableHeading">
          <span style={{ color: "#d97083" }}>{joinees.length}</span> Joinee's
        </h1>
        <table className="table">
          <tbody>
            {joinees &&
              joinees.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "oddRow" : "evenRow"}
                >
                  <td className="data">#{index + 1}</td>
                  <td className="data">{user.name}</td>
                  <td className="data">
                    {user.hexCode.replace(
                      /^(.{4}).*(.{3})$/,
                      (_, firstFour, lastThree) => `${firstFour}...${lastThree}`
                    )}
                  </td>
                  <td className="data">
                    {user.email.replace(
                      /^(.{3}).*?@/,
                      (_, firstThree) => `${firstThree}*****@`
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
