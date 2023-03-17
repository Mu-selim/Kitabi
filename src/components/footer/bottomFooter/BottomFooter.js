import "./BottomFooter.scss";

const BottomFooter = () => {
  const copyRightsText = "جميع الحقوق محفوظة لكتابي 2023 ©";
  const buildBy = {
    name: "Muhammad Selim",
    link: "https://www.linkedin.com/in/selimjs",
    text: "بواسطة",
  };

  return (
    <div className="bottom-footer">
      <p className="bottom-footer__text">{copyRightsText}</p>
      <p className="bottom-footer__text">
        {buildBy.text}{" "}
        <a href={buildBy.link} target="_blank" rel="noreferrer">
          {buildBy.name}
        </a>
      </p>
    </div>
  );
};

export default BottomFooter;
