import axios from "axios";
import { useState } from "react";
import { API } from "../Backend";
import { Button, Form } from "react-bootstrap";

const UpdateUser = () => {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [subscribedChannel, setSubscribedChannel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        alert(`🎊 Updated user with id : ${updateResID}`);
      }
      if (res.data.err !== undefined) {
        throw new Error();
      }
    } catch (error) {
      alert(" 🌋 Please check the id entered");
      console.log(`Error : ${error}`);
    }
  };

  return (
    <div className="updateUser">
      <div
        className="text-white"
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#011C27",
          flexDirection: "column",
          marginBottom: "20px",
          borderRadius: "20px",
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
              <Form.Label>Enter ID</Form.Label>
              <Form.Control
                placeholder="enter id"
                type="text"
                value={id}
                onChange={(e) => setID(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                placeholder="enter name"
                type="text"
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
    </div>
  );
};

export default UpdateUser;
