import styles from "./page-container.module.scss";
import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide" | "fluid";
  className?: string;
};

export function Container({
  children,
  size = "default",
  className,
}: ContainerProps) {
  return (
    <div className={clsx(styles.container, styles[size], className)}>
      {children}
    </div>
  );
}
