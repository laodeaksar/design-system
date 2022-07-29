import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import VisuallyHidden from 'src/components/VisuallyHidden';

import {
  DEFAULT_TOOLTIP_DELAY,
  DEFAULT_TOOLTIP_PORTALLED,
  DEFAULT_TOOLTIP_SIDE,
  DEFAULT_TOOLTIP_SIDE_OFFSET,
} from './Tooltip.constants';
import { TooltipContent } from './Tooltip.styles';
import type { TooltipProps } from './Tooltip.types';

const Tooltip = (props: React.PropsWithChildren<TooltipProps>) => {
  const {
    children,
    content,
    delayDuration = DEFAULT_TOOLTIP_DELAY,
    id,
    portalled = DEFAULT_TOOLTIP_PORTALLED,
    side = DEFAULT_TOOLTIP_SIDE,
    sideOffset = DEFAULT_TOOLTIP_SIDE_OFFSET,
    visuallyHiddenText,
  } = props;
  return (
    <TooltipPrimitive.Root delayDuration={delayDuration}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipContent
        id={id}
        portalled={portalled}
        side={side}
        sideOffset={sideOffset}
      >
        {content}
        {visuallyHiddenText && (
          <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
        )}
      </TooltipContent>
    </TooltipPrimitive.Root>
  );
};

export default Tooltip;
