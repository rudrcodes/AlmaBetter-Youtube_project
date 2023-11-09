import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllSubscriber } from "../Features/AllSubscriber";
import { API } from "../Backend";
console.log(API);

const DisplayAllSubs = (id) => {
  const dispatch = useDispatch();
  const deleteFunc = async (id) => {
    try {
      const resp = await axios.delete(`${API}/DeleteData`, {
        data: { id },
      });
      if (resp.status !== 200) {
        alert(`Error in deleting user , Error Status code : ${resp.status}`);
      } else {
        alert(`User Deleted 🗑️`);
        window.location.reload();
      }
      console.log(resp.statusText);
    } catch (error) {
      alert(`Error : ${error}`);
    }
    console.log("Deleted...");
  };
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const fetchDataSub = async () => {
      let { data } = await axios.get(`${API}`);
      console.log(data);
      dispatch(setAllSubscriber(data));
      setSubs(data);
    };
    fetchDataSub();
  }, []);
  console.log(subs);
  return (
    <div className="DisplayAllSubs">
      <h1 className="text-success text-start p-2">All Subscriber Data : </h1>
      {subs.length == 0 && (
        <div className="text-danger text-start p-2">
          {" "}
          Empty... Create some data
        </div>
      )}

      {subs.map((item) => (
        <div
          className="card bg-dark m-3 p-1"
          style={{ width: "22rem" }}
          key={item._id}
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
          <button onClick={() => deleteFunc({ id: item._id })}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayAllSubs;
