import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Navigation = () => {
  const [model, setModel] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
  });
  const submit = async () => {
    if (
      !userData.name ||
      !userData.email ||
      !userData.phone ||
      !userData.branch
    )
      return toast.error("All fields are required.");

    try {
      const { data } = await axios.post(
        "http://localhost:5050/api/fill-user-form",
        userData
      );
      console.log(data);
      if (data.isRegistered) {
        setModel(false);
        return toast.success("Registration successfuly.");
      }
    } catch (error) {
      const { status } = error.request;
      console.log(error);
      if (status === 501)
        return toast.error("Email or Phone already registered.");
      if (status === 422) return toast.error("Fill form carefully. ");

      return toast.error("Something went wrong.");
    }
  };

  return (
    <>
      {model ? (
        <div className="absolute top-0 right-0 h-full w-full mx-auto bg-gray-200">
          <h1 className="text-2xl mb-4 p-4 text-orange-500">Fill Form</h1>
          <button
            className="absolute top-0 right-0 p-4 "
            onClick={() => setModel(false)}
          >
            <span className="text-3xl text-red-600">X</span>
          </button>
          <div action="" className="bg-yellow-500 py-4">
            <div className="mb-4 px-2 flex flex-col">
              <label htmlFor="full_name" className="text-xl mr-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name :"
                id="full_name"
                className=" outline-none border-none py-1 px-4 text-lg"
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </div>
            <div className="mb-4 px-2 flex flex-col">
              <label htmlFor="email" className="text-xl mr-2">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter your email :"
                id="email"
                className="text-lg outline-none border-none py-1 px-4"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-4 px-2 flex flex-col">
              <label htmlFor="phone" className="text-xl mr-2">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Enter your phone :"
                id="phone"
                className="text-lg outline-none border-none py-1 px-4"
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
            </div>
            <div className="mb-4 px-2 flex flex-col">
              <label htmlFor="branch" className="text-xl mr-2">
                Branch
              </label>
              <input
                type="text"
                placeholder="Enter your branch :"
                id="branch"
                className="text-lg outline-none border-none py-1 px-4"
                onChange={(e) =>
                  setUserData({ ...userData, branch: e.target.value })
                }
              />
            </div>
            <button
              className="flex items-center w-full justify-center "
              onClick={submit}
            >
              <span className="text-white bg-yellow-600 px-4 text-xl rounded-full">
                Sumbit
              </span>
            </button>
          </div>
        </div>
      ) : (
        <nav className="bg-black h-20 container flex mx-auto items-center justify-between px-8 py-2">
          <img src="./images/logo.png" alt="logo" className="h-20 w-20" />
          <button
            className="text-white bg-orange-500 px-4 py-1 rounded-full hover:bg-orange-600 transition-all duration-300 "
            onClick={() => setModel(true)}
          >
            REGISTER
          </button>
        </nav>
      )}
    </>
  );
};

export default Navigation;
