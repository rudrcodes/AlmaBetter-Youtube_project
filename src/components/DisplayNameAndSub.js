import { useSelector } from "react-redux";

const DisplayNameAndSub = () => {
  const names = useSelector(
    (state) => state.allSubscribers.allSubscribersArray
  );
  console.log(names);
  return (
    <div className="DisplayAllSubs">
      <h1 className="text-success text-start p-2">
        All Subscriber Names and Subscribed Channel names :{" "}
      </h1>
      {names.map((item) => (
        <div
          className="card bg-dark m-3 p-1"
          style={{ width: "19.5rem" }}
          key={item.name}
        >
          <p className="text-success text-start p-2">
            <b>Name :</b>  {item.name}
            <br />
            <b>Subscribed Channel :</b> {item.subscribedChannel}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DisplayNameAndSub;
