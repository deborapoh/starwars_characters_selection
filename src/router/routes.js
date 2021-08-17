// Utils imports
import constants from "../config/constants";

export const routes = async () =>
  await Promise.all([
    {
      name: "HOME",
      path: constants.ROUTES.HOME,
      loader: await import("../components/Home")
    },
    {
      name: "PAGINA_NOME",
      path: constants.ROUTES.PAGINA_NOME,
      loader: await import("../components/PaginaNome")
    },
    {
      name: "PAGINA_CLASSE",
      path: constants.ROUTES.PAGINA_CLASSE,
      loader: await import("../components/PaginaClasse")
    },
    {
      name: "LUKE",
      path: constants.ROUTES.LUKE,
      loader: await import("../components/Personagem/Luke")
    },
    {
      name: "LEIA",
      path: constants.ROUTES.LEIA,
      loader: await import("../components/Personagem/Leia")
    },
    {
      name: "BERU",
      path: constants.ROUTES.BERU,
      loader: await import("../components/Personagem/Beru")
    },
    {
      name: "DARTH",
      path: constants.ROUTES.DARTH,
      loader: await import("../components/Personagem/Darth")
    },
    {
      name: "JEDI",
      path: constants.ROUTES.JEDI,
      loader: await import("../components/Jedi")
    },
    {
      name: "SITH",
      path: constants.ROUTES.SITH,
      loader: await import("../components/Sith")
    }
  ]);
