import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@presentation/components/common";
import { useWindowSize } from "@presentation/hooks";
import { MenuAccordion } from "./MenuAccordion";
import { classNames } from "primereact/utils";
import { logoff } from "@data/authentication";
import { PrimeIcons } from "primereact/api";
const productLinks = [
  {
    to: "/produtos",
    label: "Listar Produtos",
  },
  {
    to: "/produtos/novo-produto",
    label: "Adicionar novo produto",
  },
];

export const Menu = () => {
  const [visible, toggleVisible] = useState(false);
  const [opened, toggleOpened] = useState(false);
  const { width } = useWindowSize();
  const navigate = useNavigate();

  return (
    <aside
      className={classNames(
        "flex flex-col font-medium w-full fixed z-20 bg-white overflow-hidden border-b border-secondary/10 ",
        "transition-[width,height,gap] ease-in-out duration-300",
        "sm:pb-6 sm:px-2 sm:gap-4 sm:overflow-visible",
        "md:border-r lg:transition-none sm:max-lg:border-r sm:max-lg:border-secondary/10 sm:max-lg:top-0 sm:max-lg:bottom-0 sm:min-h-screen",
        "lg:w-fit lg:sticky lg:top-0",
        {
          "h-screen gap-4": visible && width < 600,
          "h-[52px] gap-0": !visible && width < 600,
          "h-screen": width >= 600,
          "sm:max-lg:w-16": !opened,
          "sm:max-lg:w-[241px]": opened,
        }
      )}
    >
      <button
        className={classNames(
          "hidden absolute justify-center items-center w-7 h-7 bg-white",
          "border-2 border-secondary/20 rounded-full top-[134px] -right-[0.875rem] z-40",
          "sm:max-lg:flex"
        )}
        onClick={() => toggleOpened((n) => !n)}
      >
        <i
          className={classNames(
            "icon-chevron-right pl-[0.125rem] !text-icon transition-transform duration-500 cursor-pointer",
            {
              "rotate-180": opened,
            }
          )}
        />
      </button>

      <div
        className={classNames(
          "flex justify-between items-center pl-3 pt-1 pr-1 pb-0",
          "sm:p-0 sm:pt-6 sm:w-full"
        )}
      >
        <div className="sm:hidden">
          <IconButton
            icon={visible ? "icon-x" : "icon-menu"}
            text
            onClick={() => toggleVisible((n) => !n)}
          />
        </div>
      </div>

      <div className={classNames("flex flex-col gap-4 overflow-hidden")}>
        <div className="px-3 sm:p-0 flex gap-4">
          <IconButton icon="icon-user" severity="muted" rounded />
          <Link to="/" reloadDocument className="flex items-center">
            <div className="flex items-end mb-2 overflow-hidden max-sm:h-10">
              Lexart
            </div>
          </Link>
        </div>
        <nav
          className={classNames(
            "overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-secondary/10",
            "[&::-webkit-scrollbar-thumb]:rounded-md gutter-stable"
          )}
        >
          <ul
            className={classNames(
              "text-normal divide-y last:border-b",
              "sm:w-56",
              {
                "divide-coolgray last:border-coolgray": opened || width >= 1280,
                "divide-transparent last:border-transparent":
                  !opened && width < 1280 && width >= 600,
              }
            )}
          >
            <li>
              <MenuAccordion
                title="Produtos"
                items={productLinks}
                icon={PrimeIcons.PHONE}
                menuToggle={opened}
              />
            </li>

            <li>
              <button
                className="w-full inline-block hover:bg-secondary/10"
                onClick={() => {
                  logoff();
                  navigate("/login", { replace: true });
                }}
              >
                <div className="flex items-center gap-2 p-2">
                  <i className="icon-log-out rotate-180 !text-icon-lg text-primary pl-0 pr-1 sm:max-xl:pl-4" />
                  <span>Sair</span>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};
