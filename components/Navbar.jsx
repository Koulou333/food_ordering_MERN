import Image from "next/legacy/image";
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux";
import Link from "next/link";
import HamburgerMenu from './HamburgerMenu';




const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            <div className={styles.callButton}>
                <Image src="/img/telephone.png" alt="" width="32" height="32" />
            </div>

           
            <div className={styles.texts}>
                <div className={styles.text}>Commander ici</div>
                <div className={styles.text}>O1 23 45 67 89</div>
            </div>
            </div>

            <div className={styles.item}>
            <HamburgerMenu  />
                    <Image src="/img/logo.png" alt="" width="160" height="69" />  
            </div>
            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="" width="30" height="30" />
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>  
            </Link>      
        </div> 
    );
};

export default Navbar;