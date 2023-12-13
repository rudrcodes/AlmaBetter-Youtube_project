import axios from "axios";
import { useState } from "react";
import { API } from "../Backend";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CreateChannel = () => {
  const [name, setName] = useState("");
  const [subscribedChannel, setSubscribedChannel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        padding:"20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2B3A67",
        flexDirection: "column",
        marginBottom: "20px",
        borderRadius:"20px"
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
        <Form
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Subscribed Channel</Form.Label>
            <Form.Control
              placeholder="enter Subscribed Channel"
              type="text"
              value={subscribedChannel}
              onChange={(e) => setSubscribedChannel(e.target.value)}
            />
          </Form.Group>

          <Button variant="success" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateChannel;
