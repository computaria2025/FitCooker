import mysql.connector
from mysql.connector import Error
import getpass

def inserir_usuario():
    try:
        conexao = mysql.connector.connect(
            host='localhost',       
            user='root',     
            password='bd12',   
            database='Fitcooker'    
        )

        if conexao.is_connected():
            cursor = conexao.cursor()

            id_usuario = input("Digite o ID do usuário: ")
            email_usuario = input("Digite o e-mail do usuário: ")
            senha = input("Digite a senha do usuário: ")  # Oculta a senha ao digitá-la
            nome_usuario = input("Digite o nome completo do usuário: ")

            comando_sql = """
            INSERT INTO Usuario (id_usuario, email_usuario, senha, nome_usuario)
            VALUES (%s, %s, %s, %s)
            """
            valores = (id_usuario, email_usuario, senha, nome_usuario)

            cursor.execute(comando_sql, valores)
            conexao.commit()
            print(f"Usuário '{nome_usuario}' inserido com sucesso!")

    except Error as e:
        print(f"Erro ao conectar ou inserir dados no MySQL: {e}")

    finally:
        if conexao.is_connected():
            cursor.close()
            conexao.close()
            print("Conexão ao MySQL encerrada.")


inserir_usuario()
