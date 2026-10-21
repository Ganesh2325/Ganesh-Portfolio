import { Fragment, type ElementType } from "react";

/** Server-rendered word split: text stays real & readable; JS only animates the inner spans. */
export default function Split({ text, as: Tag = "span", className = "", hero = false, id }: { text: string; as?: ElementType; className?: string; hero?: boolean; id?: string }) {
  const words = text.split(" ");
  return (
    <Tag id={id} className={className} data-split={hero ? undefined : ""}>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="w-mask"><span className="w-inner" data-hero-word={hero ? "" : undefined}>{w}</span></span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
