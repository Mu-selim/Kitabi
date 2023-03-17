import './Footer.scss';
import BottomFooter from './bottomFooter/BottomFooter';
import TopFooter from './topFooter/TopFooter';

const Footer = () => {
    return (
        <footer className="footer">
            <TopFooter />
            <BottomFooter />
        </footer>
    );
}
 
export default Footer;