import scss from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={scss.loading}>
      <div className={scss.text}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export default Loader;
