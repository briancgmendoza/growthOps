import ReactDOM from "react-dom";

type Props = {
  onClose?: (e: React.SyntheticEvent) => void;
  children?: JSX.Element | string | React.ReactNode;
};

/**
 * This modal is entirely useless, it doesn't work the way I
 * want it.. might be a webpack config issue because
 * I'm not using postloader-css?
 */
const Backdrop = ({ onClose }: Props) => {
  return <div onClick={onClose} />;
};

const ModalOverlay = ({ children }: Props) => {
  return (
    <div className="col-md-4" style={{ margin: "0 auto" }}>
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children, onClose }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </>
  );
};

export default Modal;
