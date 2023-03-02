export const selectStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: '#fff',
  }),
  option: (styles: any, { isDisabled, isSelected }: any) => {
    return {
      ...styles,
      backgroundColor: isSelected ? 'rgb(198, 48, 49)' : '#fff',
      color: isSelected ? '#fff' : 'rgb(77, 77, 77)',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
};
