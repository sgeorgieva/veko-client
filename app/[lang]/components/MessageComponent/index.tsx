import { Flex, Toast } from "gestalt";
import { usePathname } from "next/navigation";

import "./messageComponent.scss";
export default function Message({ type, message, setShowToast }) {
  const pathname = usePathname();

  const handleDismiss = () => {
    setShowToast(false);
  };

  return (
    <div className={`${pathname === "/" ? "toast-message" : ""}`}>
      <Flex
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Toast
          text={message}
          type={type}
          dismissButton={{ onDismiss: () => handleDismiss() }}
        />
      </Flex>
    </div>
  );
}
