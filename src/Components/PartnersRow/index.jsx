const imageStyle = "lg:max-w-[100px] max-w-[55px] filter grayscale";
const PatnersRow = () => {
  return (
    <div className="flex  lg:gap-[30px] gap-[8px] items-center justify-between pt-3">
      <img className={imageStyle} src="/assets/images/partner-1.png" />
      <img className={imageStyle} src="/assets/images/partner-2.png" />
      <img className={imageStyle} src="/assets/images/partner-3.png" />
      <img className={imageStyle} src="/assets/images/partner-4.png" />
      <img className={imageStyle} src="/assets/images/partner-5.png" />
    </div>
  );
};

export default PatnersRow;
