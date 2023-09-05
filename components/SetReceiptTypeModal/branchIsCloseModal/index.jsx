import { emptyCart } from "@/app/rtk/products-slice";
import Modal from "../../modal/index";

function BranchIsCloseModal({
  showModal,
  setShowModal,
  dispatch,
  setOrderType,
  setShowOrderTypeModal,
}) {
  return (
    <Modal
      show={showModal}
      onClose={(e) => {
        dispatch(setOrderType({}));
        setShowModal(false);
        dispatch(setShowOrderTypeModal(false));
        dispatch(emptyCart());
      }}
    >
      <div className="font-bold">الفرع مغلق</div>
    </Modal>
  );
}

export default BranchIsCloseModal;
