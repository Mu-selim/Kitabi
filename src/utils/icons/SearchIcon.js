const styleObject = {
    fill: "none",
    stroke: "#ffffff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    viewBox: "0 0 24 24",
}

const SearchIcon = () => {
  return (
    <svg
      fill={styleObject.fill}
      stroke={styleObject.stroke}
      strokeLinecap={styleObject.strokeLinecap}
      strokeLinejoin={styleObject.strokeLinejoin}
      strokeWidth={styleObject.strokeWidth}
      viewBox={styleObject.viewBox}
    >
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
  );
};

export default SearchIcon;