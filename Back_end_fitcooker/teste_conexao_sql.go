package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	go get "github.com/gin-gonic/gin"
	go get "github.com/jmoiron/sqlx"
	go get "github.com/go-sql-driver/mysql"
)

var db *sqlx.DB

func initDB() {
	var err error
	// Conectando ao MySQL
	dsn := "user:bd12@tcp(localhost:3306)/fitcooker"
	db, err = sqlx.Connect("Fitcooker", dsn)
	if err != nil {
		log.Fatal("Erro ao conectar ao banco de dados: ", err)
	}
	fmt.Println("Banco de dados conectado!")
}

type Usuario struct {
	ID       string `db:"id_usuario" json:"id"`
	Email    string `db:"email_usuario" json:"email"`
	Senha    string `db:"senha" json:"senha"`
	Nome     string `db:"nome_usuario" json:"nome"`
}

func cadastrarUsuario(c *gin.Context) {
	var user Usuario
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Dados inválidos"})
		return
	}

	query := "INSERT INTO Usuario (id_usuario, email_usuario, senha, nome_usuario) VALUES (?, ?, ?, ?)"
	_, err := db.Exec(query, user.ID, user.Email, user.Senha, user.Nome)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao cadastrar usuário"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Usuário cadastrado com sucesso!"})
}

func listarUsuarios(c *gin.Context) {
	var usuarios []Usuario
	query := "SELECT * FROM Usuario"
	err := db.Select(&usuarios, query)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao listar usuários"})
		return
	}
	c.JSON(http.StatusOK, usuarios)
}

type Receita struct {
	ID          int    `db:"id_receita" json:"id"`
	Categoria   string `db:"categoria" json:"categoria"`
	Ingredientes string `db:"ingredientes" json:"ingredientes"`
	Nome        string `db:"nome_receita" json:"nome"`
	Descricao   string `db:"descricao_receita" json:"descricao"`
	Data        string `db:"data_receita" json:"data"`
}

func listarReceitas(c *gin.Context) {
	var receitas []Receita
	query := "SELECT id_receita, categoria, ingredientes, nome_receita, descricao_receita, data_receita FROM Receitas"
	err := db.Select(&receitas, query)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Erro ao listar receitas"})
		return
	}
	c.JSON(http.StatusOK, receitas)
}

func main() {
	initDB()
	defer db.Close()

	r := gin.Default()
	r.POST("/usuarios", cadastrarUsuario)
	r.GET("/usuarios", listarUsuarios)
	r.GET("/receitas", listarReceitas)

	r.Run(":8080")
}
