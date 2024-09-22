import { Button, ButtonProps, ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";

export default function ColorButton({
  bgColor,
  children,
  ...props
}: { bgColor: string } & ButtonProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: bgColor,
            colorPrimaryHover: new TinyColor(bgColor).lighten(5).toString(),
            colorPrimaryActive: new TinyColor(bgColor).darken(5).toString(),
            lineWidth: 0,
          },
        },
      }}
    >
      <Button {...props}>{children}</Button>
    </ConfigProvider>
  );
}