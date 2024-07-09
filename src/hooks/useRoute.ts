// Types
import { RouteObject } from "@/types/route";
import { User } from "@/types/user";

// Config
import { CONFIG } from "@/utils/config";

const useRoute = () => {
  /** createRouteObject
    * This Function Used To Create a Route Object.
    * @param { RouteObject route }
    * @return { RouteObject }
  */
  const createRouteObject = (route: RouteObject): RouteObject => route;

  /** createRoutesArray
    * This Function Used To Create Array Of Routes Object.
    * @param { RouteObject[] routes }
    * @return { RouteObject[] }
  */
  const createRoutesArray = (routes: RouteObject[]): RouteObject[] => routes;

  /** routeValidate
    * This Function Used To Check If Current User Have Access To This Route.
    * @param { RouteObject route }
    * @param { User user }
    * @return { boolean }
  */
  const routeValidate = (route: RouteObject, user: User): boolean => {
    return user.roles.filter((role:string) => route.roles.includes(role)) ? true : false; 
  };

  /** setTitle
   * This Function Used To Change Page Title.
   * @param { string title }
   * @return { void }
   */
  const setTitle = (title: string): void => {
    document.title = `${title} | ${CONFIG.shortcut_name}`
  };

  return {
    createRouteObject,
    createRoutesArray,
    routeValidate,
    setTitle
  }
}

export default useRoute;
