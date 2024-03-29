import Text from 'src/components/Typography';

const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  const { children, ...rest } = props;

  return (
    <Text
      as="label"
      css={{
        display: 'inline-block',
        cursor: 'pointer',
        userSelect: 'none',
        marginRight: '8px',
        marginBottom: '0px',
        letterSpacing: '0px',
        verticalAlign: 'top',
      }}
      variant="secondary"
      size="1"
      weight="3"
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Label;
