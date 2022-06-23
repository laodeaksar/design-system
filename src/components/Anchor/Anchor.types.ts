export type ArrowPosition = 'left' | 'right';

interface BaseAnchor extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** This prop makes the Anchor component color typography tertiary to blend more with corpus */
  discreet?: boolean;
}

interface UnderlineAnchorProps extends BaseAnchor {
  arrow?: never;
  /** This prop makes the Anchor component render an underline only visible on hover */
  underline?: boolean;
  favicon?: never;
  hastag?: never;
}
interface ArrowAnchorProps extends BaseAnchor {
  /** This prop makes the Anchor component render an arrow to the left or the right of the text */
  arrow?: ArrowPosition;
  underline?: never;
  favicon?: never;
  hastag?: never;
}
interface FaviconAnchorProps extends BaseAnchor {
  arrow?: never;
  underline?: never;
  /** This prop makes the Anchor component render a favicon corresponding to the domain name passed in the href prop (only Twitter and Github are supported) */
  favicon?: boolean;
  hastag?: never;
}
interface HastagAnchorProps extends BaseAnchor {
  arrow?: never;
  underline?: never;
  favicon?: never;
  /** This prop makes the Anchor component render a hastag corresponding to the domain name passed in the href prop (only Twitter and Github are supported) */
  hastag?: boolean;
}

export type AnchorProps =
  | ArrowAnchorProps
  | FaviconAnchorProps
  | HastagAnchorProps
  | UnderlineAnchorProps;
