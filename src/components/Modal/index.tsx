import * as React from "react";
import ReactDOM from "react-dom";

type Props = {
  onClose?: (e: React.SyntheticEvent) => void;
  children?: JSX.Element | string | React.ReactNode;
  innerWidth?: number;
};

const Backdrop = ({ onClose }: Props) => {
  return (
    <div
      className="position-fixed 
        top-0 
        left-0 
        w-100 
        h-100 
        zindex-modal-backdrop"
      onClick={onClose}
      style={{ backgroundColor: "rgba(0, 0, 0, .75)" }}
    />
  );
};

const ModalOverlay = ({ children }: Props) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div
      /** Bootstrap modal and animation doesn't work
       * data-mdb-toggle="animation"
       * data-mdb-animation-reset="true"
       * data-mdb-animation="fade-in-down"
       *
       * positioning in bootstrap isn't responsive based on
       * the documentation, so I have to magically do it
       * depending on innerWidth, because creating a css file
       * with media queries seems to be a lot of work :P
       */
      className="position-relative
      w-75
      mx-auto
      zindex-dropdown
      fade-in-down"
      style={{
        maxWidth: "500px",
        marginTop: `${width > 650 ? "-200px" : "-350px"}`,
      }}
    >
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
