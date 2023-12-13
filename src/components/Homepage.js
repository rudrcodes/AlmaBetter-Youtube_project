import React, { useState } from "react";
import "./Homepage.css";
import axios from "axios";
import CreateChannel from "./CreateChannel";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setAllSubscriber } from "../Features/AllSubscriber";
import { API } from "../Backend";

const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [subs, setSubs] = useState([]);
  const [names, setNames] = useState([]);
  const [ids, setIds] = useState([]);
  const [id, setId] = useState([]);

  // Fetching Data from API

  const fetchDataSub = async () => {
    let { data } = await axios.get(`${API}`);
    console.log(data);
    dispatch(setAllSubscriber(data));
    setSubs(data);
  };

  const fetchDataNames = async () => {
    let { data } = await axios.get(`${API}/names`);
    dispatch(setAllSubscriber(data));
    setNames(data);
  };

  const fetchDataIds = async () => {
    if (id === "") {
      setIds();
      return alert("Enter an id ");
    }
    try {
      let { data } = await axios.get(`${API}/${id}`);
      console.log(data);
      setIds(data);
    } catch (error) {
      setIds();
      alert("⚠️ Error : Oopsie! Got a 400 error , do check the entered ID.");
    }
  };

  const showDataSub = () => {
    fetchDataSub();

    navigate("DisplayAllSubs");
  };

  const showNames = () => {
    fetchDataNames();
    navigate("DisplayNameAndSub");
  };

  const showIds = () => {
    fetchDataIds();
  };

  //  Main Page

  return (
    <div className="homepage">
      {/* To create a subscriber with all the details */}
      <CreateChannel />
      {/* <UpdateUser /> */}

      <div className="container text-center text-light">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={showDataSub}
            >
              All Subscriber Data
            </button>
          </div>
          {/* Button to show Subscriber name and channel */}

          <div className="col">
            <button
              type="button"
              className="btn btn-warning"
              onClick={showNames}
            >
              Subscriber Name & Channel
            </button>
          </div>

          <div className="col">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => navigate("UpdateUser")}
            >
              Update User
            </button>
          </div>
          {/* Search box for searching ID */}

          <div className="col">
            <input
              type="text"
              className="mx-2 py-1"
              placeholder="Enter ID"
              aria-label="id"
              value={id}
              onChange={(event) => setId(event.target.value)}
              style={{
                heigth: "1rem",
                width: "17rem",
                borderRadius: "0.5rem",
                borderColor: "rgb(42, 45, 48)",
                padding:"10px"
              }}
            />
            <button type="submit" className="btn btn-danger searchBTN" onClick={showIds}>
              Search
            </button>
            {ids == undefined && <div className="py-2">No user found</div>}
            {ids?.map((item) => (
              <div
                className="card bg-dark m-3 p-1"
                style={{ width: "19rem" }}
                key={item.subscribedChannel}
              >
                <p className="text-success text-start p-2">
                  ID : {item._id}
                  <br />
                  Name : {item.name}
                  <br />
                  Subscribed Channel : {item.subscribedChannel}
                  <br />
                  Subscribed Date : {item.subscribedDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
