import React, { useState } from "react";
import Common from "./Common";
import Radio from "./Redio";
import { Formik } from "formik";
import { signupSchema } from "./schemas";
import { addTask, deleteTask, updateTask, adddata } from "./Action";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import Chackbox from "./Chackbox";
import Imgcomm from "./Imgcomm";
import { Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function DialogCustomAnimation() {
  const initialValuesobj = {
    fname: "",
    mobileno: "",
    address: "",
    gender: "",
    language: [],
    image: "",
  };
  const [open, setOpen] = useState(false);
  const [editsubmit, seteditsubmit] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [initialValues, setinitialValues] = useState(initialValuesobj);

  const tasks = useSelector((state) => state?.tasksReducer);

  const dispatch = useDispatch();
  console.log(tasks);
  const addTasktoRedux = (values) => {
    if (editsubmit) {
      dispatch(updateTask(values));
    } else {
      values.userId = Date.now();
      dispatch(addTask(values));
    }
    setinitialValues(initialValuesobj);
    seteditsubmit(false);
    setOpen(false);
  };
  useEffect(() => {
    dispatch(adddata());
  }, []);

  const handleDelete = (task) => {
    dispatch(deleteTask(task));
  };
  const handleupdate = (task) => {
    console.log(task);
    setOpen(true);
    setinitialValues(task);
    seteditsubmit(true);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleImageChange = (e, setFieldValue, values) => {
    const file = e.target.files[0];

    if (file) {
      setFieldValue("image", values.image);
    }
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Image = reader.result;

      values.image = base64Image;
    };
  };

  const option = [
    { label: "male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "other", value: "other" },
  ];
  const chack = [
    {
      label: "Gujrati",
      value: "Gujrati",
    },
    {
      label: "English",
      value: "English",
    },
  ];
  return (
    <div className="">
      <div className="grid justify-items-end m-2">
        <Button onClick={handleOpen} variant="gradient">
          CREATE YOUR TEXT
        </Button>
        <Dialog
          open={open}
          onClose={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>Create Your Schedule</DialogHeader>
          <hr className="mb-5" />
          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={(values) => addTasktoRedux(values)}
          >
            {({ errors, values, handleChange, setFieldValue, touched }) => (
              <Form className="mt-1 ml-2 mr-2  ">
                <Common
                  label="Name"
                  placeholder="Enter your name"
                  name="fname"
                  value={values.fname}
                  onChange={handleChange}
                  error={touched.fname && errors.fname}
                />
                <Common
                  label="Phone"
                  placeholder="Enter your Phone"
                  name="mobileno"
                  value={values.mobileno}
                  onChange={handleChange}
                  error={touched.mobileno && errors.mobileno}
                />
                <Common
                  label="Address"
                  placeholder="Enter your Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  error={touched.address && errors.address}
                />
                <div className="flex p-1 space-x-1 text-black">
                  <p className="text-gray-600 font-semibold text-base">
                    Gender:
                  </p>
                  <Radio
                    name="gender"
                    options={option}
                    checked={initialValuesobj.gender === option.value}
                    // checked={values.Gender === option.value}
                    onChange={handleChange}
                    error={touched.gender && errors.gender}
                  />
                </div>
                <div className="p-1 flex text-black">
                  <Chackbox
                    name="language"
                    chack={chack}
                    className="mr-1"
                    defaultvalue={initialValues.language}
                    onChange={handleChange}
                    error={touched.language && errors.language}
                  />
                  <Imgcomm
                    accptinput={[
                      "image/png",
                      "image/jpeg",
                      "application/pdf",
                      " application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                      "application/vnd.ms-excel",
                    ]}
                    type="file"
                    name=" image"
                    values={values.image}
                    onChange={(e) =>
                      handleImageChange(e, setFieldValue, values)
                    }
                  />
                </div>
                <DialogFooter>
                  <Button variant="gradient" color="green" type="Submit">
                    {editsubmit ? "Update" : "Submit"}
                  </Button>
                </DialogFooter>
              </Form>
            )}
          </Formik>
          <hr className="mt-5" />
        </Dialog>
      </div>
      <div className=" mt-2 place-content-center ml-20 mr-20 rounded-lg border-2 shadow-[0px_55px_70px_35px_rgb(246,248,247)]  border-[#c2bebc]">
        <p className="text-xl p-3 text-gray-500">Material-UI Table</p>
        <div className="flex mb-2 "></div>
        <table className=" min-w-full  mt-2 ">
          <thead>
            <tr className="text-[14px] text-justify text-gray-800 ">
              <th className=" pl-10 w-[12%]">Name</th>
              <th className="  w-[10%] ">Phone</th>
              <th className=" w-[10%]  ">Address</th>
              <th className="   w-[10%]">Gender</th>
              <th className=" w-[%] ">Languages</th>
              <th className="w-[35%]">Photo</th>
              <th className="text-end  pr-7">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center text-gray-950">
            {tasks && tasks.length > 0 ? (
              tasks.map((task) => (
                <tr
                  key={task.userid}
                  className="text-gray-600 text-start text-[16px] "
                >
                  <td className="flex mt-3 mb-3  flex-row  ">
                    {task.fname && (
                      <div
                        className="rounded-full mr-1 border-2 p-1 w-8 h-8 text-white uppercase text-center "
                        style={{ backgroundColor: getRandomColor() }}
                      >
                        {task.fname[0]}
                      </div>
                    )}
                    <span>{task.fname}</span>
                  </td>
                  <td className=" w-[10%]">{task.mobileno}</td>

                  <td className=" w-[10%] ">{task.address}</td>
                  <td>{task.gender}</td>
                  <td>{task.language.join(",")}</td>
                  <td>
                    {task.image && (
                      <img
                        src={task.image}
                        alt={task.fname}
                        width="60"
                        height="60"
                      />
                    )}
                  </td>
                  <td className="">
                    <button
                      className="bg-red-700 px-2 mt-1 py-1 text-[12px] hover:bg-red-900 text-white mr-2 float-right rounded-[4px]"
                      onClick={() => handleDelete(task.userId)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-300 px-2 mr-2 mt-1 py-1 text-[12px] hover:bg-green-900  float-right text-white rounded-[4px]"
                      onClick={() => handleupdate(task)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
