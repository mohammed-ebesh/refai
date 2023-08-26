import { IoIosCloseCircle } from "react-icons/io";

type PropsType = {
  show: boolean;
  onClose: (show?: boolean) => void;
  children?: any;
  width?: string;
  closeIconCoordinates?: string;
  maxHeight?: string;
  bgColor?: string;
  withoutCloseIcon?: boolean;
};

const Model: React.FC<PropsType> = ({
  show,
  onClose,
  children,
  width,
  closeIconCoordinates,
  maxHeight,
  bgColor = "bg-white",
  withoutCloseIcon = false,
}) => {
  return (
    <div
      style={{
        zIndex: 1000000000,
      }}
      className={`${
        show ? "" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-opacity-40 bg-black overflow-hidden `}
    >
      <div
        className={`relative flex items-center justify-center w-full h-full `}
      >
        <div
          className={`fixed py-3 bg-white px-9 rounded-md  max-h-106  ${bgColor} ${
            width ? width : "w-96"
          }`}
        >
          <div
            style={{ maxHeight: maxHeight ? maxHeight : "34rem" }}
            className={`flex  flex-col w-full removeScroll overflow-y-auto   `}
          >
            <div
              className={`absolute z-[1000] ${
                closeIconCoordinates ? closeIconCoordinates : "left-3 top-3"
              }`}
            >
              {withoutCloseIcon === false && (
                <IoIosCloseCircle
                  onClick={() => {
                    onClose(show);
                  }}
                  size="1.8rem"
                  className="text-gray-500 transition duration-300 transform cursor-pointer hover:text-main hover:rotate-180"
                />
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
