import axios from "axios";
import { useState } from "react";
import { API } from "../Backend";

const CreateChannel = () => {
  const [name, setName] = useState("");
  const [subscribedChannel, setSubscribedChannel] = useState("");

  const handleSubmit = async () => {
    //TODO: send data to server
    if (name.length === 0 || subscribedChannel.length === 0)
      return alert("Enter all values");

    try {
      const res = await axios.post(`${API}/EnterData`, {
        name,
        subscribedChannel,
      });
      console.log(API);
      console.log(res.data.response);
      console.log(name, subscribedChannel);
      alert("🎉 🎉 New User created.");
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  return (
    <div
      className="text-white"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        flexDirection: "column",
      }}
    >
      <h2>Create user</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          placeholder="enter name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="enter Subscribed Channel"
          type="text"
          value={subscribedChannel}
          onChange={(e) => setSubscribedChannel(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CreateChannel;
