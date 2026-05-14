import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function fazerLogin(e) {

        e.preventDefault();

        const resposta = await fetch(
            "http://127.0.0.1:8000/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    senha
                })
            }
        );

        const dados = await resposta.json();

        console.log(dados);

        if (dados.success) {
            alert("Login autorizado");
        } else {
            alert("Email ou senha inválidos");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

            <h2 className="text-2xl font-bold mb-6">
                Bem-vindo de volta!
            </h2>

            <div className="border shadow-lg p-6 w-80 bg-white">

                <h2 className="text-2xl font-bold mb-4">
                    Login
                </h2>

                <form onSubmit={fazerLogin}>

                    <div className="mb-4">

                        <label className="block text-gray-700">
                            Email:
                        </label>

                        <input
                            type="email"
                            className="w-full px-3 py-2 border"
                            name="email"
                            required
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    <div className="mb-4">

                        <label className="block text-gray-700">
                            Senha:
                        </label>

                        <input
                            type="password"
                            className="w-full px-3 py-2 border"
                            name="password"
                            required
                            placeholder="Enter Password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2"
                    >
                        Entrar
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;