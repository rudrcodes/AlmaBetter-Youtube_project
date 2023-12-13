import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAllSubscriber } from "../Features/AllSubscriber";
import { API } from "../Backend";


console.log("api : ", API);

const DisplayAllSubs = (id) => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const fetchDataSub = async () => {
      let { data } = await axios.get(`${API}`);
      console.log(data);
      dispatch(setAllSubscriber(data));
      setSubs(data);
      setLoading(false);
    };
    fetchDataSub();
  }, []);
  console.log(subs);
  return (
    <div className="DisplayAllSubs">
      <h1 className="text-success text-start p-2">All Subscriber Data : </h1>
      {loading == true && <h3 className="loadingHeading">Fetching data....</h3>}

      {loading == false && subs.length == 0 && (
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
            <b> ID</b> : {item._id}
            <br />
            <b>Name :</b> {item.name}
            <br />
            <b> Subscribed Channel :</b> {item.subscribedChannel}
            <br />
            <b> Subscribed Date :</b> {item.subscribedDate}
          </p>
          <button onClick={() => deleteFunc({ id: item._id })}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayAllSubs;
