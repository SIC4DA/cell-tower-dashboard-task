import { TriangleAlert } from "lucide-react";
import styles from "./RequestError.module.scss";

const RequestError = ({ message }: { message?: string | null }) => {
  return (
    <div className={styles.requestErrorContainer}>
      <TriangleAlert
        size={24}
        strokeWidth={1.5}
        className={styles.requestErrorIcon}
      />
      <p className={styles.requestErrorMessage}>
        {message ||
          "An error occurred while processing your request, please try again later."}
      </p>
      <a href="/" className={styles.requestErrorButton}>
        Back to home
      </a>
    </div>
  );
};

export default RequestError;
