import { AnchorHTMLAttributes, ComponentType, HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";
import { PhosphorIconLibrary } from "~utils";

export type DivType = HTMLAttributes<HTMLDivElement>;
export type ImgType = ImgHTMLAttributes<HTMLImageElement>;
export type LinkType = AnchorHTMLAttributes<HTMLAnchorElement>;
export type PhosphorIconLibraryType = keyof typeof PhosphorIconLibrary;
export type SvgElementType = ComponentType<React.SVGProps<SVGSVGElement>>;
export type ChildrenType = ReactNode;

export interface IChildren {
    children: ChildrenType;
}
export interface IPhosphorIcon {
    icon: PhosphorIconLibraryType;
}
