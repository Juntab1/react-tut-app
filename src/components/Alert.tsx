// import { ReactNode } from "react";

interface Props {
    onClose: () => void;
}

// const Alert = ({ children}: Props) => {
//   return (
//     <div className="alert alert-primary">{children}</div>
//   )
// }

// export default Alert

import { useState } from "react";
const Alert = ({onClose}: Props) => {
  const [closeView, closeViewUpdate] = useState(false);
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check on your mistake!
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
    </div>
  )
}

export default Alert
