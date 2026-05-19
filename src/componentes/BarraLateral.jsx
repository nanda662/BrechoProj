import React, { useContext } from "react";
import { FaCog, FaHome, FaShoppingCart, FaTable, FaBox, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthSimpleContext } from "../contextos/AuthSimple.jsx";

const BarraLateral = () => {
    const { logout } = useContext(AuthSimpleContext);
    const navigate = useNavigate();

    const menuItems = [
        { name: "Dashboard", path: "/adm-dashboard", icon: <FaHome />, isParent: true },  //adicionar paths depois
        { name: "Produtos", path: "/adm-dashboard/produtos", icon: <FaBox />, isParent: false },
        { name: "Pedidos", path: "/adm-dashboard/pedidos", icon: <FaShoppingCart />, isParent: false },
        { name: "Categorias", path: "/adm-dashboard/categorias", icon: <FaTable />, isParent: false },
        { name: "Configurações", path: "/adm-dashboard/configuracoes", icon: <FaCog />, isParent: false },
    ]
    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <div className="flex flex-col h-screen bg-black text-white w-16 md:w-64 fixed">
            <div className="h-16 flex items-center justify-center border-b border-gray-700">
                <NavLink to="/adm-dashboard" className="flex items-center gap-2 p-2">
                    <span className='hidden md:block text-xl font-bold'>Brecho Admin</span>
                    <span className='md:hidden text-xl font-bold'>BA</span>
                </NavLink>
            </div>

            <div>
                <ul className='space-y-2 p-2'>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                end={item.isParent}  
                                className={({ isActive }) => (isActive ? "bg-gray-700" : "") + " flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200"}
                                to={item.path}>
                                <span className="text-xl">{item.icon}</span>
                                <span className="ml-4 hidden md:block">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border-t border-gray-700 p-2">
                <button onClick={handleLogout} className="w-full flex items-center justify-center md:justify-start p-2 rounded-md hover:bg-red-600 transition duration-200 text-red-400 hover:text-white">
                    <FaSignOutAlt className="text-lg" />
                    <span className="ml-3 hidden md:block">Sair</span>
                </button>
            </div>
        </div>
    )
};

export default BarraLateral;