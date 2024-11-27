export interface IButton {
    color:
      | "dark"
      | "green"
      | "";
    size: "smallBtn" | "smallMBtn" | "mediumBtn" | "largeBtn" | "fullWidth" | "";
    type: "outline" | "",
}

export interface IButtonProps {
  color?: IButton["color"];
  className?: string;
  size?: IButton["size"];
  type?: IButton["type"];
  showLoader?: boolean;
  disable?: boolean;
  text: any;
  onClick?: Function;
  btnRef?: any;
  noTextTransform?: boolean;
  submitDisableAndAllowClick?: boolean;
}