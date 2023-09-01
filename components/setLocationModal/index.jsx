import Modal from "../modal/index";
import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("../Map/index"), {
  ssr: false,
});

function SetLocationModal({ showModal, setShowModal }) {
  return (
    <Modal
      width="w-[100%]  md:w-[75%] lg:w-[50%]"
      maxHeight={"100vh"}
      show={showModal}
      onClose={(e) => {
        setShowModal(false);
      }}
    >
      <div className="my-4">
        <DynamicMap />
      </div>
    </Modal>
  );
}

export default SetLocationModal;
