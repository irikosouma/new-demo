const Microsoft = () => {
  return (
    <img src="data:image/png;base64,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" />
  );
};

export default Microsoft;
