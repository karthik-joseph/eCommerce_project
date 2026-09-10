import styles from './Navbar.module.css'
import logo from '../../assets/images/logo/ec_logo.avif';
function navbar(){

    return (
    <>
        <section className={styles.nav}>
            <div className={styles.left}>
                <a href="/">
                    <img 
                    src={logo} 
                    alt="E-commerce logo" 
                    width={100} 
                    height={100}
                    loading='eager' />
                </a>
            </div>
            <div className={styles.right}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </section>
    </>)
}


export default navbar;