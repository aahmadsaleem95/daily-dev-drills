export const Question6 = (props) => {
  const { type, text } = props;
  const Component = type;
  // no if and switch
  // react differentiates between tags as <h1> its in lower case but <App> this is react component as it start with a capital letter
  return <Component>{text}</Component>;
};
