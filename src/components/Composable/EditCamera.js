import close from "../../assets/svg/closes.svg";
import Input from "./input";

function FilterModal({ header, onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed right-0 px-4 sm:px-0 top-0 z-[32] h-full right min-[1024px]:float-right bg-[#000]/50 grid place-content-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" space-y-5 bg-white rounded-md px-2 py-4 w-[95vw] md:w-[650px] lg:w-[800px] xl:w-[900px] shadow-ml "
      >
        <div className="flex justify-between">
          <h1 className="text-xl 2xl:text-3xl font-bold text-[#132D46]">{header}</h1>
          <button className="" onClick={onClose}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className="py-5">
          <Input
            type={"text"}
            label={"Name of Camera"}
            placeholder={"Front Door"}
          />
          <Input type={"text"} label={"Location"} placeholder={"Texas"} />
          <Input type={"text"} label={"Type"} placeholder={"Ring"} />
          <Input
            type={"text"}
            label={"Time Zone"}
            placeholder={"America/Chicago (UTC - 5:00)"}
          />
        </div>

        <div className="flex w-full flex-col space-y-2 sm:space-y-0 sm:flex-row justify-center items-center mt-10 sm:space-x-4">
          <button className="w-[70%] sm:w-[30%] py-2 sm:py-3 bg-[#132D46] text-white rounded-md">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
