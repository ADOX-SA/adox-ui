import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/components/molecules/Toast";
import React from "react";
const meta = {
  title: "Layout/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

// const ToastContextDemo = () => {
//   const { showToast, showPromiseStatus } = useToast();
//   const good = useRef(false);
//   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
//   const doSomething = async () => {
//     await delay(2000);
//     if (!good.current) {
//       good.current = true;
//       throw new Error();
//     }
//     good.current = false;
//     return "done";
//   };

//   return (
//     <div>
//       <Button
//         children="Success"
//         color="success"
//         onClick={() => {
//           showToast("Algo salio bien", "success");
//         }}
//       />
//       <Button
//         children="Warning"
//         color="warning"
//         onClick={() => {
//           showToast("Algo es necesario advertir", "warning");
//         }}
//       />
//       <Button
//         children="Error"
//         color="error"
//         onClick={() => {
//           showToast("Algo salio bastante mal", "error");
//         }}
//       />
//       <Button
//         children="Info"
//         color="secondary"
//         onClick={() => {
//           showToast("Algo hay que informar", "info");
//         }}
//       />
//       <Button
//         children="Promise"
//         color="primary"
//         onClick={() => {
//           showPromiseStatus({
//             call: doSomething(),
//             onError: () => {
//               return "Promise bad ending";
//             },
//             onResolve: () => {
//               return "Promise good ending";
//             },
//           });
//         }}
//       />
//     </div>
//   );
// };

export const Primary: Story = {
  decorators: [(Story) => <Story message="success" status="success" />],
  args: {
    message: "Toast",
    status: "success",
    progress: 100,
  },
};
