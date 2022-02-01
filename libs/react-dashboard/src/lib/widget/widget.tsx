import React, { forwardRef } from "react";

function WidgetInternal<T extends keyof HTMLElementTagNameMap>(
  { as, children, ...props }: WidgetProps<T>,
  ref: React.Ref<HTMLElementTagNameMap[T]>
) {
  const attr: React.RefAttributes<HTMLElementTagNameMap[T]> = { ...props, ref };
  return React.createElement(as || "div", attr, children);
}

export const Widget = forwardRef(WidgetInternal);

export interface WidgetProps<T extends keyof HTMLElementTagNameMap>
  extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<T>, T>,
    React.PropsWithChildren<object> {
  as?: T;
}
