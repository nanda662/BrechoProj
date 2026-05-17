import React from "react";
import { FaCog, FaHome, FaShoppingCart, FaTable, FaBox } from "react-icons/fa";
import { NavLink } from "react-router";

const BarraLateral = () => {
    const menuItems = [
        { name: "Dashboard", path: "/adm-dashboard", icon: <FaHome />, isParent: true },  //adicionar paths depois
        { name: "Produtos", path: "/adm-dashboard/produtos", icon: <FaBox />, isParent: false },
        { name: "Pedidos", path: "/adm-dashboard/pedidos", icon: <FaShoppingCart />, isParent: false },
        { name: "Categorias", path: "/adm-dashboard/categorias", icon: <FaTable />, isParent: false },
        { name: "Configurações", path: "/adm-dashboard/configuracoes", icon: <FaCog />, isParent: false },
    ]
    return (
        <div className="flex flex-col h-screen bg-black text-white w-16 md:w-64 fixed">
            <div className="h-16 flex flex-items justify-center">
                <span className='hidden md:block text-xl font-bold'>inventario</span>
                <span className='md:hidden text-xl font-bold'>Testeslc</span>
            </div>

            <div>
                <ul className='space-y-2 p-2'>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                end={item.isParent}  //para deixar a rota pai ativa apenas na rota exata
                                className={({ isActive }) => (isActive ? "bg-gray-700" : "") + " flex items-center p-2 rounded-md hover:bg-gray-700 transition duration-200"}
                                to={item.path}>
                                <span className="text-xl">{item.icon}</span>
                                <span className="ml-4 hidden md:block">{item.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default BarraLateral;