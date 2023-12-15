import Link from "next/link";

export const Navbar = () => {
    return (
        <>
            <div className="navbar flex justify-between w-full">
                <div className="navbar__logo">
                    <h1>Amante-Tassels</h1>
                </div>
                <div className="navbar__left flex">
                    <a href="#" className="active_link">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
                <div className="navbar__right">
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Sign Up</Link>
                </div>
            </div>
        </>
    );
}