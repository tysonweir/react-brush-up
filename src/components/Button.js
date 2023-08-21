function Button({ handler, children, variant = "solid" }) {
  const buttonStyles = {
    solid: "bg-blue-300 text-white hover:bg-blue-400",
    outline: "text-gray-900 border border-gray-300 hover:bg-gray-50",
  };

  return (
    <button
      type="button"
      className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 ${buttonStyles[variant]}`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default Button;
