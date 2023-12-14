function Imgcomm({
  initialValues,
  onChange,
  name,
  accptinput,
  values
 
}) {
  // const changphoto = () => {
  //   if (values.photo) {
  //     setinitialValues({ ...initialValues, photo: "" });
  //   } else if (values.pdf) {
  //     setinitialValues({ ...initialValues, photo: "" });
  //   }
  // };
  return (
    <>
      <label className="text-center  border border-gray-500 rounded-md w-[95%] col-span-2 transition-transform transform hover:scale-105 border-dashed">
        <div className="flex text-sm leading-6 text-gray-600 w-full">
          <input
            name={name}
            // initialValues={initialValues}
            // setinitialValues={setinitialValues}
            accept={accptinput}
            type="file"
            className="sr-only"
            onChange={onChange}
          />
        </div>
        <div className="flex justify-center pt-1 ">
          {values.image &&
          values.image.type === "application/pdf" ? (
            <img src="unnamed.png" alt="PDF" width="100" />
          ) : values.image &&
            (values.image.type ===
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
              values.image.type === "application/vnd.ms-excel") ? (
            <img src="excel_hero.jpg" alt="Excel" width="100" />
          ) : values.image ? (
            <img
              src={(initialValues.image)}
              alt="img"
              width="100"
            />
          ) 
          : values.image ? null : (
            <svg
              className="mx-auto h-12 w-12 mt-3 mb-3 text-gray-300 hover:text-indigo-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 01 1.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                clipRule="evenodd"
              />
            </svg>
          )
          }
        </div>
        {/* {values.photo || values.pdf ? (
          <button
            className="bg-black text-white rounded-sm px-1 mb-1 text-sm "
            onClick={changphoto}
          >
            Remove
          </button>
        ) : null} */}
      </label>
    </>
  );
}
export default Imgcomm;
<></>;
