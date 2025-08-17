import type { ComponentType, SVGProps } from "react";

import ApiIcon from "@/assets/icons/api.svg";
import Icons8PostgresqlIcon from "@/assets/icons/icons8-postgresql.svg";
import DatabaseIcon from "@/assets/icons/database.svg";
import BrandSupabaseIcon from "@/assets/icons/brand-supabase.svg";
import BrandGitIcon from "@/assets/icons/brand-git.svg";
import BrandGithubIcon from "@/assets/icons/brand-github.svg";
import BrandPythonIcon from "@/assets/icons/brand-python.svg";
import BrandPrismaIcon from "@/assets/icons/brand-prisma.svg";
import BrandMysqlIcon from "@/assets/icons/brand-mysql.svg";
import BrandMongodbIcon from "@/assets/icons/brand-mongodb.svg";
import BrandReduxIcon from "@/assets/icons/brand-redux.svg";
import ArrowsExchangeIcon from "@/assets/icons/arrows-exchange.svg";
import KeyIcon from "@/assets/icons/key.svg";
import JsonIcon from "@/assets/icons/json.svg";
import ServerIcon from "@/assets/icons/server.svg";
import BrandStorybookIcon from "@/assets/icons/brand-storybook.svg";
import BrandTailwindIcon from "@/assets/icons/brand-tailwind.svg";
import BrandZulipIcon from "@/assets/icons/brand-zulip.svg";
import BrandNextjsIcon from "@/assets/icons/brand-nextjs.svg";
import BrandJavascriptIcon from "@/assets/icons/brand-javascript.svg";
import BrandTypescriptIcon from "@/assets/icons/brand-typescript.svg";
import BrandNodejsIcon from "@/assets/icons/brand-nodejs.svg";
import BrandCss3Icon from "@/assets/icons/brand-css3.svg";
import HtmlIcon from "@/assets/icons/html.svg";
import BrandReactNativeIcon from "@/assets/icons/brand-react-native.svg";
import BrandReactIcon from "@/assets/icons/brand-react.svg";


export type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

export {
  ApiIcon,
  Icons8PostgresqlIcon,
  DatabaseIcon,
  BrandSupabaseIcon,
  BrandGitIcon,
  BrandGithubIcon,
  BrandPythonIcon,
  BrandPrismaIcon,
  BrandMysqlIcon,
  BrandMongodbIcon,
  BrandReduxIcon,
  ArrowsExchangeIcon,
  KeyIcon,
  JsonIcon,
  ServerIcon,
  BrandStorybookIcon,
  BrandTailwindIcon,
  BrandZulipIcon,
  BrandNextjsIcon,
  BrandJavascriptIcon,
  BrandTypescriptIcon,
  BrandNodejsIcon,
  BrandCss3Icon,
  HtmlIcon,
  BrandReactNativeIcon,
  BrandReactIcon,
};

export const icons: Record<string, SvgIcon> = {
  api: ApiIcon,
  postgresql: Icons8PostgresqlIcon,
  database: DatabaseIcon,
  supabase: BrandSupabaseIcon,
  git: BrandGitIcon,
  github: BrandGithubIcon,
  python: BrandPythonIcon,
  prisma: BrandPrismaIcon,
  mysql: BrandMysqlIcon,
  mongodb: BrandMongodbIcon,
  redux: BrandReduxIcon,
  arrowsExchange: ArrowsExchangeIcon,
  key: KeyIcon,
  json: JsonIcon,
  server: ServerIcon,
  storybook: BrandStorybookIcon,
  tailwind: BrandTailwindIcon,
  zulip: BrandZulipIcon,
  nextjs: BrandNextjsIcon,
  javascript: BrandJavascriptIcon,
  typescript: BrandTypescriptIcon,
  nodejs: BrandNodejsIcon,
  css3: BrandCss3Icon,
  html: HtmlIcon,
  reactNative: BrandReactNativeIcon,
  react: BrandReactIcon,
};

export const skills=[
    {name:"React" , icon:BrandReactIcon,category:"frontend"},
    {name:"React Native" , icon:BrandReactNativeIcon,category:"frontend"},
    {name:"Next.js" , icon:BrandNextjsIcon,category:"frontend"},
    {name:"Typescript" , icon:BrandTypescriptIcon,category:"frontend"},
    {name:"Javascript" , icon:BrandJavascriptIcon,category:"frontend"},
    {name:"HTML" , icon:HtmlIcon,category:"frontend"},
    {name:"CSS" , icon:BrandCss3Icon,category:"frontend"},
    {name:"Redux" , icon:BrandReduxIcon,category:"frontend"},
    {name:"Tailwind" , icon:BrandTailwindIcon,category:"frontend"},
    {name:"Prisma" , icon:BrandPrismaIcon,category:"frontend"},
    {name:"Node.js" , icon:BrandNodejsIcon,category:"backend"},
    {name:"Express" , icon:ApiIcon,category:"backend"},
    {name:"PostgreSQL" , icon:Icons8PostgresqlIcon,category:"backend"},
    {name:"MongoDB" , icon:BrandMongodbIcon,category:"backend"},
    {name:"MySQL" , icon:BrandMysqlIcon,category:"backend"},
    {name:"Python" , icon:BrandPythonIcon,category:"backend"},
    {name:"Supabase" , icon:BrandSupabaseIcon,category:"backend"},
    {name:"Git" , icon:BrandGitIcon,category:"devops"},
    {name:"Github" , icon:BrandGithubIcon,category:"devops"},
    {name:"Zulip" , icon:BrandZulipIcon,category:"devops"},
    {name:"Storybook" , icon:BrandStorybookIcon,category:"devops"},
    {name:"Prisma" , icon:BrandPrismaIcon,category:"devops"},   

]