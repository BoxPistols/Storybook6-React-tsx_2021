import * as React from "react";

// My props can be merged with the default ones
interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** To disable or not to disable */
  isDisabled?: boolean;
  /** Tho default, added here to show in argsTable  */
  type?: "button" | "submit" | "reset";
}

// OR using a type alias
// type ButtonProps {
//    /** To disable or not to disable */
//   isDisabled?: boolean;
//   type?: "button" | "submit" | "reset"
// }
// type MyButtonProps = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<MyButtonProps> = ({
  type = "button",
  isDisabled,
  children,
  ...props
}) => (
  <button type={type} disabled={isDisabled} {...props}>
    {children}
  </button>
);

// OR regular function declaration (w/o FC<>)
// type WithChildren<T = {}> = T & { children?: React.ReactNode } & ButtonProps;
// type Props = WithChildren<{}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

// function Button({ type = "button", isDisabled, children, ...props }: Props) {
//   return (
//     <button type={type} disabled={isDisabled} {...props}>
//       {children}
//     </button>
//   );
// }

export default Button;
