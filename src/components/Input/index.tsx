import IconFactory from "../Icons";

export const Input = () => {
  return (
    <div className="textarea">
      <div className="textarea--customize" contentEditable="true"></div>
      <div className="flex justify-between">
        <div className="w-32 h-32 flex justify-center items-center bg-dark-light rounded-base pointer">
          <IconFactory name="clip" />
        </div>
        <div className="w-32 h-32 flex justify-center items-center pointer">
          <IconFactory name="plane" />
        </div>
      </div>
    </div>
  );
};
