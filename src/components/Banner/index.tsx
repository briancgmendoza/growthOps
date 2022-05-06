import { bannerConfig } from "./Config/growthOpsConfig";

const Banner = () => {
  const { className, title } = bannerConfig;
  return (
    <section className="mb-3">
      <h3 className={className}>{title}</h3>
    </section>
  );
};

export default Banner;
