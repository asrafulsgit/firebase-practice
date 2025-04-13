import { get, ref, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { username } = useParams();
  const navigate =useNavigate()
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const adminRef = ref(db, `student/${username}`);
    get(adminRef).then((data) => {
       if (data.exists()) setUserInfo(data.val());
      setLoading(false);
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((userInfo) => {
      return {
        ...userInfo,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfoRef = ref(db, "student/" + userInfo.username);
    update(userInfoRef, userInfo)
      .then(() => navigate('/admin'))
      .catch((err) => console.log(err));
  };
  if (loading) {
    return (
      <div className="w-full min-h-[90vh] flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl">Loading...</h1>
      </div>
    );
  }
  return (
    <div className="w-full min-h-[90vh] flex flex-col gap-2 justify-center items-center">
      <h1 className="font-bold text-2xl">Update Student</h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          value={userInfo.username}
          disabled
          name="username"
          type="text"
          placeholder="Enter user name"
          className="input border rounded-[3px] px-2 text-[16px] outline-none"
        />
        <input
          onChange={handleChange}
          value={userInfo.name}
          name="name"
          type="text"
          placeholder="Enter name"
          className="input border rounded-[3px] px-2 text-[16px] outline-none"
        />
        <input
          onChange={handleChange}
          value={userInfo.roll}
          name="roll"
          type="number"
          placeholder="Enter roll"
          className="input border rounded-[3px] px-2 text-[16px] outline-none"
        />
        <button type="submit" className="btn btn-success">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Update;
