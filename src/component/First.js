import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
export default function DialogCustomAnimation() {
  const [open, setOpen] = useState(false);
  const [editsubmit, seteditsubmit] = useState(false);
  const [editdata, seteditdata] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
    phone: "",
    Address: "",
    Gender: "",
    Languages: [],
    photo: null,
  });

  const handleOpen = () => setOpen(!open);

  const addTask = () => {
    if (editsubmit) {
      const tempedit = [...tasks];
      tempedit[editdata] = newTask;
      setTasks(tempedit);
    } else {
      setTasks([...tasks, newTask]);
    }
    setNewTask({
      name: "",
      phone: "",
      Address: "",
      Gender: "",
      Languages: [],
      photo: null,
    });

    seteditsubmit(false);
    setOpen(false);
  };

  const handleDelete = (task) => {
    setTasks(tasks.filter((e) => e !== task));
  };

  const handleupdate = (index) => {
    setOpen(true);
    const tempdata = tasks[index];
    setNewTask({
      name: tempdata.name,
      phone: tempdata.phone,
      Address: tempdata.Address,
      Gender: tempdata.Gender,
      Languages: tempdata.Languages,
      photo: tempdata.photo,
    });
    seteditsubmit(true);
    seteditdata(index);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewTask({ ...newTask, photo: file });
    }
  };

  return (
  
      <div className="grid justify-items-end m-2">
        <Button onClick={handleOpen} variant="gradient">
          CREATE YOUR TEXT
        </Button>
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Create Your Schedule</DialogHeader>
          <hr className="mb-5" />
          <form action="" className="mt-1 ml-2 mr-2">
            <div className="flex">
              <label
                htmlFor="name"
                className="text-gray-600 font-semibold text-base pr-5"
              >
                Name:
              </label>
              <input
                className="border-b w-full border-black outline-none mb-2"
                placeholder="Enter your Name"
                name="name"
                value={newTask.name}
                onChange={(e) =>
                  setNewTask({ ...newTask, name: e.target.value })
                }
              />
            </div>
            <div className="flex">
              <label
                htmlFor="phone"
                className="text-gray-600 font-semibold text-base pr-5"
              >
                Phone:
              </label>
              <input
                className="border-b w-full border-black outline-none mb-2 pr-2"
                placeholder="Enter your phone number"
                name="phone"
                value={newTask.phone}
                onChange={(e) =>
                  setNewTask({ ...newTask, phone: e.target.value })
                }
              />
            </div>
            <div className="flex">
              <label
                htmlFor="Address"
                className="text-gray-600 font-semibold text-base pr-5"
              >
                Address:
              </label>
              <input
                className="border-b w-full border-black outline-none mb-2"
                name="Address"
                placeholder="Enter your Address"
                value={newTask.Address}
                onChange={(e) =>
                  setNewTask({ ...newTask, Address: e.target.value })
                }
              />
            </div>
            <div className="flex p-1 space-x-1 text-black">
              <p className="text-gray-600 font-semibold text-base">Gender:</p>
              <input
                type="radio"
                id="Male"
                name="Gender"
                value="Male"
                checked={newTask.Gender === "Male"}
                onChange={(e) =>
                  setNewTask({ ...newTask, Gender: e.target.value })
                }
              />
              <label htmlFor="Male">Male</label>

              <input
                type="radio"
                id="Female"
                name="Gender"
                value="Female"
                checked={newTask.Gender === "Female"}
                onChange={(e) =>
                  setNewTask({ ...newTask, Gender: e.target.value })
                }
              />
              <label htmlFor="Female">Female</label>
              <input
                type="radio"
                id="Other"
                name="Gender"
                value="Other"
                checked={newTask.Gender === "Other"}
                onChange={(e) =>
                  setNewTask({ ...newTask, Gender: e.target.value })
                }
              />
              <label htmlFor="Other">Other</label>
            </div>
            <div className="p-1 space-x-1 text-black">
              <p className="text-gray-600 font-semibold text-base">Languages</p>
              <div className="border-2 w-fit border-gray-300 pr-4 p-1 mb-1 rounded-md">
                <label>
                  <input
                    type="checkbox"
                    name="Languages"
                    value="Gujarati"
                    className="p-1 mr-1"
                    checked={newTask.Languages.includes("Gujarati")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setNewTask({
                          ...newTask,
                          Languages: [...newTask.Languages, "Gujarati"],
                        });
                      } else {
                        setNewTask({
                          ...newTask,
                          Languages: newTask.Languages.filter(
                            (lang) => lang !== "Gujarati"
                          ),
                        });
                      }
                    }}
                  />
                  Gujarati
                </label>
              </div>
              <div className="border-2 w-fit border-gray-300 pr-5 p-1 rounded-md">
                <label>
                  <input
                    type="checkbox"
                    name="Languages"
                    value="English"
                    className="mr-1"
                    checked={newTask.Languages.includes("English")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setNewTask({
                          ...newTask,
                          Languages: [...newTask.Languages, "English"],
                        });
                      } else {
                        setNewTask({
                          ...newTask,
                          Languages: newTask.Languages.filter(
                            (lang) => lang !== "English"
                          ),
                        });
                      }
                    }}
                  />
                  English
                </label>
              </div>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center w-56 h-28  justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  {newTask.photo ? null : (
                    <div className="flex flex-col items-center justify-center  ">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                    </div>
                  )}
                  <input
                    id="dropzone-file"
                    type="file"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <td className="pl-5">
                    {newTask.photo && (
                      <img
                        src={URL.createObjectURL(newTask.photo)}
                        alt=""
                        width="100"
                      />
                    )}
                  </td>
                </label>
              </div>
            </div>
          </form>
        <hr className="mt-5" />
        
          <DialogFooter>
            <Button
              variant="gradient"
              color="green"
              onClick={() => {
                addTask();
              }}
            >
              {editsubmit ? "Update" : "Submit"}
            </Button>
          </DialogFooter>
        </Dialog>
    
      <div className="mr-10 ml-10 rounded-lg border-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  border-[#c2bebc]">
        <p className="text-xl p-3 text-gray-500">Material-UI Table</p>
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-[12%]">Name</th>
              <th className="w-[12%]">Phone</th>
              <th className="w-[12%]">Address</th>
              <th className="w-[12%]">Gender</th>
              <th className="w-[12%]">Languages</th>
              <th className="w-[8%]">Photo</th>
              <th className="float-right mr-5">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y      divide-gray-200 text-center text-gray-950">
            {tasks.map((task, index) => (
              <tr key={index} className="text-gray-600  text-[16px] ">
                <td className="flex mt-3 mb-3 flex-row  ">
                  <div
                    className="rounded-full ml-3 mr-1 border-2 p-1 w-8 h-8 text-white uppercase text-center"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    {task.name[0]}
                  </div>
                  <span className="mt-1">   {task.name} </span>
                 
                </td>
                <td className="pl-5">{task.phone}</td>
                <td className="pl-5">{task.Address}</td>
                <td>{task.Gender}</td>
                <td>{task.Languages.join(", ")}</td>
                <td className="pl-5">
                  {task.photo && (
                    <img
                      src={URL.createObjectURL(task.photo)}
                      alt={task.name}
                      width="60"
                      height="60"
                    />
                  )}
                </td>
                <td className="">
                  <button
                    className="bg-red-700 px-2 mt-1 py-1 text-[12px] hover:bg-red-900 text-white mr-2 float-right rounded-[4px]"
                    onClick={() => handleDelete(task)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-300 px-2 mr-2 mt-1 py-1 text-[12px] hover:bg-green-900  float-right text-white rounded-[4px]"
                    onClick={() => handleupdate(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
    
  )
}