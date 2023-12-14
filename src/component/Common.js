export function Common(props) {
  return (
    <>
      <div className="flex">
        <label className="text-gray-600 font-semibold text-base pr-5">
          {props.label}
        </label>
        <input
          type="text"
          className={`border-b w-full border-black outline-none mb-2 ${
            props.error ? 'border-red-500' : ''
          }`}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          
          
        />
      </div>
      {props.error && (
        <div className="text-red-500 text-sm">{props.error}</div>
      )}
    </>
  );
}export default Common;