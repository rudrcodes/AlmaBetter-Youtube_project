import axios from "axios";
import { useState } from "react";
import { API } from "../Backend";

const UpdateUser = () => {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [subscribedChannel, setSubscribedChannel] = useState("");

  const handleSubmit = async () => {
    if (id.length === 0) return alert("Enter id please");
    if (name.length == 0 || subscribedChannel.length == 0)
      return alert(
        "Please enter new Name and subscribed Channel to update them"
      );

    try {
      const res = await axios.put(`${API}/UpdateData/${id}`, {
        name,
        subscribedChannel,
      });
      console.log(res.data.updateRes);
      if (res.data.updateRes !== undefined) {
        let updateResID = await res.data.updateRes._id;
        alert(`Updated user with id : ${updateResID}`);
      }
      if (res.data.err !== undefined) {
        throw new Error();
      }
    } catch (error) {
      alert("Please check the id entered");
      console.log(`Error : ${error}`);
    }
  };

  return (
    <div className="updateUser">
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
        <h2>Update user : Enter the id of the user </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <input
            placeholder="enter id"
            type="text"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
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
          {id}
          <br />
          {name}
          <br />
          {subscribedChannel}
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
