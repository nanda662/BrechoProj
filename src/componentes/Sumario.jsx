import React from "react";

const Sumario = () => {
    return (
        <div className="p-5">
            <h2 className="text-3xl">Dashboard</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols gap-4 my-6">
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <p className="text-lg font-semibold">Produtos Totais</p>
                    <p className="text-2xl font-bold">{0}</p>
                </div>
                <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <p className="text-lg font-semibold">Estoque Total</p>
                    <p className="text-2xl font-bold">{0}</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <p className="text-lg font-semibold">Pedidos Totais</p>
                    <p className="text-2xl font-bold">{0}</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center">
                    <p className="text-lg font-semibold">Receita</p>
                    <p className="text-2xl font-bold">${0}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Produtos sem estoque
                    </h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Produto mais vendido
                    </h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Produto com pouco estoque
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Sumario;