import React from "react";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-6">Bem-vindo de volta!</h2>
            <div className="border shadow-lg p-6 w-80 bg-white">
            <h2 className="text-2x1 fonto-bold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="block text-gray-700">Email:</label>
                    <input 
                    type="email"
                    className="w-full px-3 py-2 border"
                    name="email" required
                    placeholder="Enter Email" 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="block text-gray-700">Senha:</label>
                    <input type="password" 
                    id="password" 
                    className="w-full px-3 py-2 border"
                    name="password" required
                    placeholder="Enter Password" 
                    />
                </div>
                
                <button type="submit" className="w-full bg-blue-500 text-white py-2">Entrar</button>
            </form>
            </div>
        </div>
    );
}

export default Login;