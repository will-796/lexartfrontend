import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { classNames } from "primereact/utils";
import { Button } from "@presentation/components/common";
import {
  SidebarProps,
  SidebarPassThroughMethodOptions,
} from "primereact/sidebar";

const Filter = ({ ...props }: SidebarProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      <Sidebar
        {...props}
        visible={visible}
        onHide={() => setVisible(false)}
        pt={{
          root: (options: SidebarPassThroughMethodOptions) => ({
            className: classNames(
              "flex flex-col pointer-events-auto relative transform translate-x-0 translate-y-0 translate-z-0 relative transition-transform duration-300",
              "bg-white text-gray-700 border-0 shadow-lg",
              {
                "!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0":
                  options.props.position === undefined,
                "h-full w-80":
                  options.props.position === "left" ||
                  options.props.position === "right",
                "h-40 w-full":
                  options.props.position === "top" ||
                  options.props.position === "bottom",
              }
            ),
          }),
          header: {
            className: classNames("flex items-center justify-end", "p-5"),
          },

          content: {
            className: classNames(
              "p-5 pt-0 h-full w-full wrap",
              "grow overflow-y-auto"
            ),
          },
          mask: {
            className: classNames(
              "flex pointer-events-auto",
              "bg-black bg-opacity-40 transition duration-200 z-20 transition-colors"
            ),
          },
        }}
      >
        <section className="flex flex-col gap-4 w-full">
          <h2 className="text-primary">Filtros</h2>
          <p>Selecione os itens exibidos na listagem.</p>
          <div className="flex flex-wrap w-full gap-6 bg-secondary/5 p-2 rounded-md">
            <div className="flex flex-col gap-2 w-full text-secondary">
              Status
              <select className="w-full border border-secondary/30 p-2 rounded-lg">
                <option>Selecione o status</option>
                <option>Aprovado</option>
                <option>Em andamento</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full text-secondary">
              Status
              <select className="w-full border border-secondary/30 p-2 rounded-lg">
                <option>Selecione o status</option>
                <option>Aprovado</option>
                <option>Em andamento</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full text-secondary">
              Status
              <select className="w-full border border-secondary/30 p-2 rounded-lg">
                <option>Selecione o status</option>
                <option>Aprovado</option>
                <option>Em andamento</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full text-secondary">
              Status
              <select className="w-full border border-secondary/30 p-2 rounded-lg">
                <option>Selecione o status</option>
                <option>Aprovado</option>
                <option>Em andamento</option>
              </select>
            </div>
          </div>
        </section>
        <button>Filtrar</button>
      </Sidebar>

      <Button
        label="Filtros"
        icon="pi pi-list"
        size="sm"
        outline
        secondary
        onClick={() => setVisible(true)}
      />
    </div>
  );
};

export default Filter;
