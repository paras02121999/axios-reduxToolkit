import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../reducer/dataSlice";
import { setData } from "../reducer/dataSliceTwo";

const Axios = () => {
  const userData = useSelector((state) => state.user.users.data); // get data from reducers
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()); // set data to reducer
  }, []);

  const handleGet = async () => {
    console.log("Data from redux thunk", userData);
  };

  const handleGetTwo = async () => {
    try {
      const response1 = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(setData(response1));
    } catch (error) {
      console.error(error);
    }
  };

  const handlePost = async () => {
    try {
      const response2 = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          title: "foo",
          body: "bar",
          userId: 2,
        }
      );
      console.log("response2", response2);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePatch = async () => {
    try {
      const response3 = await axios.patch(
        "https://jsonplaceholder.typicode.com/users/1",
        {
          name: "paras",
          username: "parasss",
        }
      );
      console.log("response3", response3);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async () => {
    try {
      const response4 = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/10"
      );
      console.log("response4", response4);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <button onClick={handleGet}>Get</button>&nbsp;
      <button onClick={handleGetTwo}>Get2</button>&nbsp;
      <button onClick={handlePost}>Post</button>&nbsp;
      <button onClick={handlePatch}>Patch</button>&nbsp;
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Axios;
