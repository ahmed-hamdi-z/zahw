// Types
import { FC } from "react";

export interface RouteObject {
  path: string,
  name: string,
  element: FC,
  category?: string,
  key?: string | number,
  roles: string[]
}

