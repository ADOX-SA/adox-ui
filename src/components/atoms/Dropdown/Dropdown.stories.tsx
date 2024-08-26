import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import React from "react";
import { Button } from "../Button";
import { css } from "@emotion/css";
import { Text } from "../Text";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default = {
  args: {
    position: "top",
    dropdownContent: (
      <div
        className={css`
          background-color: white;
          padding: 1rem;
          border: 1px solid black;
          width: 100%;
        `}
      >
        <Text as="h1" size="xl">
          Pagina de inicio
        </Text>
        <Text as="h1" size="xl">
          Pagina de inicio
        </Text>
        <Text as="h1" size="xl">
          Pagina de inicio
        </Text>
        <Text as="h1" size="xl">
          Pagina de inicio
        </Text>
      </div>
    ),
    children: <Button>Abrir Dropdown</Button>,
    open: false,
    setOpen: () => {},
  },
  render: (args) => {
    const ref = React.useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
        `}
      >
        <Dropdown
          open={isOpen}
          setOpen={setIsOpen}
          position={args.position}
          dropdownContent={args.dropdownContent}
        >
          <Button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            ref={ref}
          >
            Abrir Dropdown
          </Button>
        </Dropdown>
        <Text as="h1" size="xl">
          {isOpen ? "Aberto" : "Fechado"}
        </Text>
      </div>
    );
  },
} satisfies Story;
