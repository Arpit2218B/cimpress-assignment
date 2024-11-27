import { IButtonProps } from "../utils/constants";
import { formatClassNames } from "../utils/stringUtility";
import appStyles from "./styles.module.scss";

const Button = (props: IButtonProps): JSX.Element => {
  const {
    color,
    className,
    size,
    type,
    showLoader,
    disable,
    text,
    onClick,
    btnRef,
    noTextTransform,
    submitDisableAndAllowClick,
  } = props;
  const disabled = disable || showLoader;

  const handleOnClick = (e: any): void => {
    if (onClick) onClick(e);
  };

  return (
    <button
      aria-disabled={submitDisableAndAllowClick}
      ref={btnRef}
      disabled={disabled}
      onClick={handleOnClick}
      className={formatClassNames(
        appStyles.btn,
        className,
        color && appStyles[color],
        size && appStyles[size],
        type && appStyles[type],
        showLoader && appStyles.showLoader,
        noTextTransform && appStyles.noTextTransform,
        submitDisableAndAllowClick && appStyles.disabledLinkBtn,
      )}
    >
      <span className={appStyles.btnInnerContent}>
        {text}
      </span>
    </button>
  );
};

Button.defaultProps = {
  color: "",
  className: "",
  size: "",
  type: "",
  showLoader: false,
  disable: false,
  onClick: null,
  btnRef: null,
  action: "",
  noTextTransform: false,
  submitDisableAndAllowClick: false,
};

export default Button;
