import image from "/assets/images/person.png";
function PersonMessage(props) {
  return (
    <>
      <div
        className="flex mt-3 border-b-[1px] border-solid border-[#DBE9FF]  cursor-pointer"
        onClick={props.setChat}
      >
        <img src={image} style={{ width: "50px", height: "50px" }} alt="..." />
        <div className="flex-1 mt-1 ps-2">
          <div className="flex justify-between">
            <p className="text-[#575859] font-semibold ">{props.name}</p>
            <p className="text-[14px] text-[#BBBCBF]">{props.time}</p>
          </div>
          <p className="text-[14px] text-[#BBBCBF] mt-1">{props.lastMessage}</p>
        </div>
      </div>
    </>
  );
}

export default PersonMessage;
