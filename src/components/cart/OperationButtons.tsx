type OperationButtonsProps = {
  handleClickCancel: () => void;
  handelClickOrder: () => void;
}

function OperationButtons({
  handleClickCancel, handelClickOrder,
}: OperationButtonsProps) {
  return (
    <div>
      <button
        type="button"
        onClick={handleClickCancel}
      >
        취소
      </button>
      <button
        type="button"
        onClick={handelClickOrder}
      >
        주문하기
      </button>
    </div>
  );
}

export default OperationButtons;
