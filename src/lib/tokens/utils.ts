import type { PropertyValue } from '@stitches/react';

const utils = {
  pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),

    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value
    }),

    bc: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    }),
    linearGradient: (value: PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
    radialGradient: (value: PropertyValue<'backgroundImage'>) => ({
      backgroundImage: `radial-gradient(${value})`
    }),

    btrr: (value: PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value
    }),
    bbrr: (value: PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value
    }),
    bblr: (value: PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value
    }),
    btlr: (value: PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value
    }),
    btr: (value: PropertyValue<'borderRadius'>) => ({
      borderTopLeftRadius: value,
      borderTopRightRadius: value
    }),
    brr: (value: PropertyValue<'borderRadius'>) => ({
      borderTopRightRadius: value,
      borderBottomRightRadius: value
    }),
    bbr: (value: PropertyValue<'borderRadius'>) => ({
      borderBottomRightRadius: value,
      borderBottomLeftRadius: value
    }),
    blr: (value: PropertyValue<'borderRadius'>) => ({
      borderTopLeftRadius: value,
      borderBottomLeftRadius: value
    }),

    insetX: (value: PropertyValue<'left'>) => ({
      left: value,
      right: value
    }),
    insetY: (value: PropertyValue<'top'>) => ({
      top: value,
      bottom: value
    }),

    userSelect: (value: PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      MozUserSelect: value,
      MsUserSelect: value,
      userSelect: value
    }),

    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value
    }),

    appearance: (value: PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      MozAppearance: 'none',
      appearance: value
    }),
    backgroundClip: (value: PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value
    })
};

export { utils };
