import logo from '../../assets/images/logo.png';
import botaoHome from '../../assets/images/botaoHome.png';
import botaoIdioma from '../../assets/icons/botaoIdioma.png';


function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Cadastre-se</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Idioma
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Português</a></li>
                                <li><a>Inglês</a></li>
                            </ul>
                        </li>
                        <li><a>Home</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className='h-11' src={logo} /></a>
            </div>

            <div className="navbar-end invisible lg:visible">
                <ul className="menu menu-horizontal px-1">

                    <li tabIndex={0}>
                        <a>
                            <img src={botaoIdioma} />
                        </a>
                        <ul className="p-2">
                            <li><a>Português</a></li>
                            <li><a>Inglês</a></li>
                        </ul>
                    </li>
                    <li><a className='text-stone-500 font-bold'>Cadastre-se</a></li>
                </ul>
                <a className='cursor-pointer'><img src={botaoHome} /></a>
            </div>
        </div>
    );
}

export default Navbar;