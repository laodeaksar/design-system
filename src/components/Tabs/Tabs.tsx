import React from 'react';

import * as Styled from './Tabs.styles';
import type { TabsProps, TabsItemProps } from './Tabs.types';

const Tabs = ({ children, defaultTab = 0 }: TabsProps) => {
  if (!Array.isArray(children)) {
    return <div className="Tabs">{children}</div>;
  }

  return (
    <Styled.Tabs defaultValue={defaultTab.toString()}>
      <Styled.List>
        {React.Children.map(
          children,
          (child: React.ReactElement<TabsItemProps>, i: number) => {
            return (
              <Styled.Trigger value={i.toString()}>
                {child.props.title}
              </Styled.Trigger>
            );
          }
        )}
      </Styled.List>

      {React.Children.map(
        children,
        (child: React.ReactElement<TabsItemProps>, i: number) => {
          return (
            <Styled.Content value={i.toString()} key={i}>
              {child.props.children}
            </Styled.Content>
          );
        }
      )}
    </Styled.Tabs>
  );
};

const TabsItem = ({ title, children }: TabsItemProps) => {
  return children;
};

Tabs.Item = TabsItem;

export default Tabs;
