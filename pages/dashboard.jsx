import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllChild } from "../Redux/StoreSlice";

function Dashboard() {
  let { logSuccess, AllChild } = useSelector((s) => s.ASRStore);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllChild());
  }, [dispatch]);
  console.log(AllChild);
  return (
    <div className="dashboard">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis
      architecto cumque delectus adipisci distinctio, expedita iste esse, odit
      molestias eveniet nemo dolor quasi quos consectetur quo soluta mollitia
      doloribus!
      {logSuccess}
    </div>
  );
}

export default Dashboard;
