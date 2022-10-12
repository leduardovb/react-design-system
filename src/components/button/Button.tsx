import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ButtonProps } from "../../props/ButtonProps";

function Button({ asChild, children }: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors"
      )}
    >
      {children}
    </Component>
  );
}

export default Button;
