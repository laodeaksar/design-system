export type ArrowPosition = 'left' | 'right';

interface BaseAnchor extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  discreet?: boolean;
}

interface UnderlineAnchorProps extends BaseAnchor {
  arrow?: never;
  underline?: boolean;
  favicon?: never;
  hastag?: never;
}
interface ArrowAnchorProps extends BaseAnchor {
  arrow?: ArrowPosition;
  underline?: never;
  favicon?: never;
  hastag?: never;
}
interface FaviconAnchorProps extends BaseAnchor {
  arrow?: never;
  underline?: never;
  favicon?: boolean;
  hastag?: never;
}
interface HastagAnchorProps extends BaseAnchor {
  arrow?: never;
  underline?: never;
  favicon?: never;
  hastag?: boolean;
}

export type AnchorProps =
  | ArrowAnchorProps
  | FaviconAnchorProps
  | HastagAnchorProps
  | UnderlineAnchorProps;
