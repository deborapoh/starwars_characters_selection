// Utils imports
import constants from "../config/constants";

export const routes = async () =>
  await Promise.all([
    {
      name: "HOME",
      path: constants.ROUTES.HOME,
      loader: await import("../pages/Home")
    },
    {
      name: "CREATE_CHARACTER",
      path: constants.ROUTES.CREATE_CHARACTER,
      loader: await import("../pages/CreateCharacter")
    },
    {
      name: "CHOOSE_SIDE",
      path: constants.ROUTES.CHOOSE_SIDE,
      loader: await import("../pages/ChooseSide")
    },
    {
      name: "JEDI",
      path: constants.ROUTES.JEDI,
      loader: await import("../pages/ChooseSide/Jedi")
    },
    {
      name: "SITH",
      path: constants.ROUTES.SITH,
      loader: await import("../pages/ChooseSide/Sith")
    },
    {
      name: "LUKE",
      path: constants.ROUTES.LUKE,
      loader: await import("../components/Character/Luke")
    },
    {
      name: "LEIA",
      path: constants.ROUTES.LEIA,
      loader: await import("../components/Character/Leia")
    },
    {
      name: "BERU",
      path: constants.ROUTES.BERU,
      loader: await import("../components/Character/Beru")
    },
    {
      name: "DARTH",
      path: constants.ROUTES.DARTH,
      loader: await import("../components/Character/Darth")
    }
  ]);
