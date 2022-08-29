import React from 'react';

import Icon from 'src/components/Icon';

import { StyledListItem } from './List.styles';

const ListItem = (props: React.LiHTMLAttributes<HTMLLIElement>) => {
  const { children, ...rest } = props;

  return (
    <StyledListItem {...rest}>
      <span data-list-item>
        <Icon.Arrow variant="info" />
      </span>
      <div>{children}</div>
    </StyledListItem>
  );
};

ListItem.displayName = 'ListItem';

export default ListItem;
