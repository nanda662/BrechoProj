from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pymysql

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/login")
def login(dados: dict):

    email = dados["email"]
    senha = dados["senha"]

    conexao = pymysql.connect(
        host="localhost",
        user="root",
        password="admin!@#",
        database="brecho"
    )

    cursor = conexao.cursor()

    sql = """
    SELECT * FROM usuarios
    WHERE email=%s AND senha=%s
    """

    cursor.execute(sql, (email, senha))

    usuario = cursor.fetchone()

    conexao.close()

    if usuario:
        return {
            "success": True,
            "message": "Login realizado"
        }

    return {
        "success": False,
        "message": "Email ou senha inválidos"
    }