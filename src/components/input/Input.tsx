import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import {
  InputContainerProps,
  InputIconProps,
  InputProps,
} from "../../props/InputProps";

function InputContainer(props: InputContainerProps) {
  return (
    <div className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-1 ring-cyan-500">
      {props.children}
    </div>
  );
}

function InputIcon(props: InputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

function InputComponent(props: InputProps) {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
      )}
      {...props}
    />
  );
}

export const Input = {
  Container: InputContainer,
  Component: InputComponent,
  Icon: InputIcon,
};
