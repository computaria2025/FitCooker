document.addEventListener("DOMContentLoaded", () => {
  // Barra de pesquisa
  const botaoPesquisa = document.getElementById("botaoPesquisa")
  const barraPesquisa = document.getElementById("barraPesquisa")

  if (botaoPesquisa && barraPesquisa) {
    botaoPesquisa.addEventListener("click", () => {
      barraPesquisa.classList.toggle("ativa")
    })
  }

  // Modal de avaliação
  const botaoAvaliar = document.getElementById("botaoAvaliar")
  const modalAvaliacao = document.getElementById("modalAvaliacao")
  const fecharModal = document.querySelector(".fechar-modal")

  if (botaoAvaliar && modalAvaliacao) {
    botaoAvaliar.addEventListener("click", () => {
      modalAvaliacao.classList.add("ativo")
    })

    fecharModal.addEventListener("click", () => {
      modalAvaliacao.classList.remove("ativo")
    })

    modalAvaliacao.addEventListener("click", (e) => {
      if (e.target === modalAvaliacao) {
        modalAvaliacao.classList.remove("ativo")
      }
    })
  }

  // Seleção de estrelas
  const estrelas = document.querySelectorAll(".selecao-estrelas .estrela")

  if (estrelas.length > 0) {
    estrelas.forEach((estrela) => {
      estrela.addEventListener("click", function () {
        const valor = this.getAttribute("data-valor")

        estrelas.forEach((e) => {
          if (e.getAttribute("data-valor") <= valor) {
            e.classList.add("ativa")
            e.textContent = "★"
          } else {
            e.classList.remove("ativa")
            e.textContent = "☆"
          }
        })
      })

      estrela.addEventListener("mouseover", function () {
        const valor = this.getAttribute("data-valor")

        estrelas.forEach((e) => {
          if (e.getAttribute("data-valor") <= valor) {
            e.textContent = "★"
          } else {
            e.textContent = "☆"
          }
        })
      })

      estrela.addEventListener("mouseout", () => {
        estrelas.forEach((e) => {
          if (e.classList.contains("ativa")) {
            e.textContent = "★"
          } else {
            e.textContent = "☆"
          }
        })
      })
    })
  }

  // Controle de porções
  const botaoDiminuir = document.querySelector(".botao-porcao.diminuir")
  const botaoAumentar = document.querySelector(".botao-porcao.aumentar")
  const numeroPorcoes = document.querySelector(".numero-porcoes")

  if (botaoDiminuir && botaoAumentar && numeroPorcoes) {
    botaoDiminuir.addEventListener("click", () => {
      const valor = Number.parseInt(numeroPorcoes.textContent)
      if (valor > 1) {
        numeroPorcoes.textContent = valor - 1
        atualizarValoresNutricionais(valor - 1)
      }
    })

    botaoAumentar.addEventListener("click", () => {
      const valor = Number.parseInt(numeroPorcoes.textContent)
      numeroPorcoes.textContent = valor + 1
      atualizarValoresNutricionais(valor + 1)
    })
  }

  function atualizarValoresNutricionais(porcoes) {
    // Esta função seria implementada para atualizar os valores nutricionais
    // com base no número de porções selecionado
    console.log("Atualizando valores nutricionais para", porcoes, "porções")
  }

  // Upload de imagem
  const areaUpload = document.getElementById("areaUpload")
  const inputArquivo = document.getElementById("imagemReceita")
  const previewImagem = document.getElementById("previewImagem")
  const imagemPreview = document.getElementById("imagemPreview")
  const botaoRemoverImagem = document.getElementById("removerImagem")

  if (areaUpload && inputArquivo) {
    areaUpload.addEventListener("click", () => {
      inputArquivo.click()
    })

    areaUpload.addEventListener("dragover", (e) => {
      e.preventDefault()
      areaUpload.classList.add("ativo")
    })

    areaUpload.addEventListener("dragleave", () => {
      areaUpload.classList.remove("ativo")
    })

    areaUpload.addEventListener("drop", (e) => {
      e.preventDefault()
      areaUpload.classList.remove("ativo")

      if (e.dataTransfer.files.length) {
        inputArquivo.files = e.dataTransfer.files
        mostrarPreviewImagem()
      }
    })

    inputArquivo.addEventListener("change", mostrarPreviewImagem)

    function mostrarPreviewImagem() {
      if (inputArquivo.files && inputArquivo.files[0]) {
        const leitor = new FileReader()

        leitor.onload = (e) => {
          imagemPreview.src = e.target.result
          previewImagem.classList.add("ativo")
          areaUpload.style.display = "none"
        }

        leitor.readAsDataURL(inputArquivo.files[0])
      }
    }

    if (botaoRemoverImagem) {
      botaoRemoverImagem.addEventListener("click", () => {
        inputArquivo.value = ""
        previewImagem.classList.remove("ativo")
        areaUpload.style.display = "block"
      })
    }
  }

  // Adicionar/Remover Ingredientes
  const adicionarIngrediente = document.getElementById("adicionarIngrediente")
  const listaIngredientes = document.getElementById("listaIngredientes")

  if (adicionarIngrediente && listaIngredientes) {
    adicionarIngrediente.addEventListener("click", () => {
      const novoIngrediente = document.createElement("div")
      novoIngrediente.className = "ingrediente-item"
      novoIngrediente.innerHTML = `
                <div class="campo-quantidade">
                    <input type="text" name="quantidadeIngrediente[]" placeholder="Qtd" required>
                </div>
                <div class="campo-unidade">
                    <select name="unidadeIngrediente[]">
                        <option value="unidade">unidade(s)</option>
                        <option value="g">g</option>
                        <option value="kg">kg</option>
                        <option value="ml">ml</option>
                        <option value="l">l</option>
                        <option value="colher_cha">colher(es) de chá</option>
                        <option value="colher_sopa">colher(es) de sopa</option>
                        <option value="xicara">xícara(s)</option>
                        <option value="a_gosto">a gosto</option>
                    </select>
                </div>
                <div class="campo-ingrediente">
                    <input type="text" name="nomeIngrediente[]" placeholder="Nome do ingrediente" required>
                </div>
                <button type="button" class="botao-remover-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            `

      listaIngredientes.appendChild(novoIngrediente)
      configurarBotoesRemover()
    })
  }

  // Adicionar/Remover Passos
  const adicionarPasso = document.getElementById("adicionarPasso")
  const listaPassos = document.getElementById("listaPassos")

  if (adicionarPasso && listaPassos) {
    adicionarPasso.addEventListener("click", () => {
      const numeroPasso = listaPassos.children.length + 1

      const novoPasso = document.createElement("div")
      novoPasso.className = "passo-item"
      novoPasso.innerHTML = `
                <div class="numero-passo">${numeroPasso}</div>
                <div class="campo-passo">
                    <textarea name="passoPreparo[]" placeholder="Descreva o passo..." required></textarea>
                </div>
                <button type="button" class="botao-remover-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            `

      listaPassos.appendChild(novoPasso)
      configurarBotoesRemover()
    })
  }

  // Adicionar/Remover Dicas
  const adicionarDica = document.getElementById("adicionarDica")
  const listaDicas = document.getElementById("listaDicas")

  if (adicionarDica && listaDicas) {
    adicionarDica.addEventListener("click", () => {
      const novaDica = document.createElement("div")
      novaDica.className = "dica-item"
      novaDica.innerHTML = `
                <div class="campo-dica">
                    <input type="text" name="dicaReceita[]" placeholder="Adicione uma dica...">
                </div>
                <button type="button" class="botao-remover-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            `

      listaDicas.appendChild(novaDica)
      configurarBotoesRemover()
    })
  }

  // Configurar botões de remover
  function configurarBotoesRemover() {
    const botoesRemover = document.querySelectorAll(".botao-remover-item")

    botoesRemover.forEach((botao) => {
      botao.addEventListener("click", function () {
        const item = this.parentElement
        const lista = item.parentElement

        lista.removeChild(item)

        // Atualizar números dos passos se for a lista de passos
        if (lista.id === "listaPassos") {
          const passos = lista.querySelectorAll(".passo-item")
          passos.forEach((passo, index) => {
            passo.querySelector(".numero-passo").textContent = index + 1
          })
        }
      })
    })
  }

  // Inicializar configuração dos botões de remover
  configurarBotoesRemover()

  // Formulário de receita
  const formularioReceita = document.querySelector(".formulario-receita")

  if (formularioReceita) {
    formularioReceita.addEventListener("submit", (e) => {
      e.preventDefault()

      // Aqui seria implementada a lógica para enviar os dados do formulário
      // para o backend, que calcularia os valores nutricionais com base nos ingredientes

      alert("Receita enviada com sucesso! Após revisão, ela será publicada no site.")
      // Redirecionar para a página inicial ou de perfil do usuário
      // window.location.href = 'index.html';
    })
  }
})

