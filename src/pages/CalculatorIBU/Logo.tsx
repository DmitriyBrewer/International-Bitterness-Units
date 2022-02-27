import cl from "./Navbar.module.css";

const Logo = () => {
  return (
    <div className={cl.logo}>
      <svg
        width="22"
        height="27"
        viewBox="0 0 37 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.8352 31.9565L24.0159 2.13043H2.10876V31.9565"
          stroke="white"
          stroke-width="3"
          stroke-miterlimit="10"
        />
        <path
          d="M34.6924 10.0435L34.8792 39.8695H12.972V10.0435"
          stroke="white"
          stroke-width="3"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  );
};

export default Logo;
