import { Link } from "react-router-dom";
import "./TopFooter.scss";
import IconTwitter from "../../../utils/icons/Twitter";
import IconInstagram from "../../../utils/icons/Instagram";
import IconLinkedin from "../../../utils/icons/Linkedin";

const TopFooter = () => {
  return (
    <div className="top-footer">
      <div className="top-footer__left">
        <Link to="/" className="download-app">
          حمل تطبيق كتابي
        </Link>
        <div className="social-media">
          <Link to="/" className="social-media__link">
            <IconTwitter />
          </Link>
          <Link to="/" className="social-media__link">
            <IconInstagram />
          </Link>
          <Link to="/" className="social-media__link">
            <IconLinkedin />
          </Link>
        </div>
      </div>
      <div className="top-footer__right">
        <div className="fast-links">
          <h2 className="fast-links__tittle">روابط سريعة</h2>
          <ul className="links-list">
            <li>
              <Link to="/">شروط وأحكام الإستخدام</Link>
            </li>
            <li>
              <Link to="/">سياسة الخصوصية</Link>
            </li>
            <li>
              <Link to="/">سياسة الإرجاع والاسترداد</Link>
            </li>
            <li>
              <Link to="/">كتبنا علي جوجل بلاي</Link>
            </li>
            <li>
              <Link to="/">كتبنا علي امازون</Link>
            </li>
          </ul>
        </div>
        <div className="support-links">
          <h2 className="support-links__tittle">الدعم</h2>
          <ul className="links-list">
            <li>
              <Link to="/">إتصل بنا</Link>
            </li>
            <li>
              <Link to="/">خدمة العملاء</Link>
            </li>
            <li>
              <Link to="/">أماكن تواجدنا</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
