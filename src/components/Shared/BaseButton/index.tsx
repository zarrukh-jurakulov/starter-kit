const BaseButton = (props: any) => {
  const { type = "button", children, ...rest } = props;

  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

// const Button = styled.button`
//   color: ${(props) => (props.active ? "red" : "green")};
// `;

export default BaseButton;
