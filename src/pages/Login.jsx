import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthSimpleContext } from "../contextos/AuthSimple.jsx";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();
    const { login } = useContext(AuthSimpleContext);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");
    const [lembrar, setLembrar] = useState(false);

    async function fazerLogin(e) {
        e.preventDefault();
        setErro("");
        setCarregando(true);

        try {
            const resposta = await fetch("http://127.0.0.1:8000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            if (!resposta.ok) {
                const txt = await resposta.text().catch(() => null);
                console.error('Resposta inválida do backend:', resposta.status, txt);
                throw new Error('Resposta inválida do backend');
            }

            const dados = await resposta.json();

            if (dados.success) {
                login();
                navigate("/adm-dashboard");
            } else {
                setErro(dados.message || "Email ou senha inválidos");
            }
        } catch (err) {
            console.error(err);
            const isDevTest = (email === "admin@brecho.com" && senha === "admin123");
            if (isDevTest) {
                login();
                navigate("/adm-dashboard");
                return;
            }

            setErro("Erro ao conectar ao servidor");
        } finally {
            setCarregando(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-pink-50 p-6">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:flex items-center justify-center bg-gradient-to-b from-indigo-600 to-indigo-400 p-8">
                    <div className="text-center text-white px-6">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="mx-auto mb-4">
                            <path d="M12 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z" fill="currentColor" opacity="0.9"></path>
                        </svg>
                        <h3 className="text-2xl font-bold">Brechó Admin</h3>
                        <p className="mt-2 opacity-90">Painel administrativo</p>
                    </div>
                </div>

                <div className="p-8 md:p-10">
                    <div className="mb-6 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-800">Bem-vindo de volta</h2>
                        <p className="text-sm text-gray-500 mt-1">Faça login para acessar o painel administrativo</p>
                    </div>

                    <form onSubmit={fazerLogin} aria-busy={carregando} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                name="email"
                                required
                                placeholder="seu@exemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Senha</label>
                            <input
                                type="password"
                                className="mt-1 block w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                                name="password"
                                required
                                placeholder="••••••••"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        {erro && (
                            <div role="alert" aria-live="assertive" className="text-sm text-red-700 bg-red-100 p-2 rounded">{erro}</div>
                        )}

                        <div className="flex items-center justify-between">
                            <label className="inline-flex items-center text-sm">
                                <input type="checkbox" checked={lembrar} onChange={(e) => setLembrar(e.target.checked)} className="h-4 w-4 rounded text-indigo-600" />
                                <span className="ml-2 text-gray-600">Lembrar-me</span>
                            </label>
                            <a href="#" className="text-sm text-indigo-600 hover:underline">Esqueci a senha</a>
                        </div>

                        <div>
                            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 font-semibold hover:bg-indigo-700 disabled:opacity-60" disabled={carregando}>
                                {carregando ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                        </svg>
                                        Entrando...
                                    </>
                                ) : (
                                    'Entrar'
                                )}
                            </button>
                        </div>

                        <p className="text-center text-xs text-gray-400">Desenvolvimento: credenciais de teste — admin@brecho.com / admin123</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;