const init = document.getElementById("iniciar")

const InitialPage = () => {
  init.innerhtml = ""
  const content = `   
  
        <header>
      <h1>QUIZ DE PROGRAMAÇÃO</h1>
      <p>
        Aqui voçe irá testar seus conhecimentos em programação e depois ver sua
        pontuação.
      </p>
      </header>
        <br><br>
      <!-- Introdução -->
      <section id="sec-header">
        <h2>Sobre o quiz</h2>
        <p>
          <strong> Esse quiz</strong> foi desenvolvido para testar seus
          conhecimentos em programação,como
          <em>linguagens de programação</em>,conceitos basicos e mais.
        </p>
        <p>
          Voçe encontrará diferentes tipos de perguntas,incluindo múltipa
          escolha,texto e perguntas de data. <br />
          Desafie-se e veja o quanto voçe sabe sobre programação.
        </p>
        <p>
          Voçe poderá encontrar alguns acrônimos como
          <abbr title="HiperText Markup Language">HTM</abbr> e
          <abbr title="Cascading Style Sheets">CSS</abbr>,que são comumente
          usados em questões relacionadas ao desenvolvimento web.
        </p>
      </section>
            <button id="botão-inicio">Começar quiz</button>
`
  init.innerHTML = content
  init.querySelector("button").onclick = () => StartQuiz()
}

const StartQuiz = () => {
  init.innerHTML = ""
  const content = `  <main>
        <!--Pergunta 1: Multiplas escolhas-->
      <section>
        <h2>
          Pergunta 1: Qual linguagem é usada para estruturar uma pagina web?
        </h2>
        <form>
          <input type="radio" name="Pergunta1" value="Phyton" id="p1a" />
          <label for="p1a" class="p1">Phyton</label><br />
          <input type="radio" name="Pergunta1" value="HTML" id="p1b" />
          <label for="p1b" class="p1">HTML</label><br />
          <input type="radio" name="Pergunta1" value="JavaScript" id="p1c" />
          <label for="p1c" class="p1">JavaScript</label><br />
          <input type="radio" name="Pergunta1" value="Ruby" id="p1d" />
          <label for="p1d" class="p1">Ruby</label>
        </form>
      </section>
      <!--Pergunta 2: Texto-->
      <section>
        <h2>
          Pergunta 2: Na URL https://www.google.com o trecho "google.com" é o
          ____
        </h2>
        <form>
          <input
            type="text"
            name="pergunta2"
            id="p2"
            placeholder="Digite sua resposta.."
          />
        </form>
      </section>
      <!--Pergunta 3: Senha-->
      <section>
        <h2>Pergunta 3: Faça uma senha forte</h2>
        <form>
          <input
            type="password"
            id="p3"
            name="pergunta3"
            placeholder="Digite a senha"
          />
        </form>
      </section>
      <!--Pergunta 4: Data-->
      <section>
        <h2>Pergunta 4: Em qual ano foi lançado a primeira versão do HTML?</h2>
        <form>
          <input type="date" name="pergunta4" id="p4" />
        </form>
      </section>
      <!--Pergunta 5: Seleção Multipla-->
      <section>
        <h2>
          Pergunta 5: Quais das alternativas são consideradas linguagens de
          programação?
        </h2>
        <form>
          <input type="checkbox" name="pergunta5" id="p5a" value="JavaScript" />
          <label for="p5a" class="p5">JavaScript</label><br />
          <input type="checkbox" name="pergunta5" id="p5b" value="HTML" />
          <label for="p5b" class="p5">HTML</label><br />
          <input type="checkbox" name="pergunta5" id="p5c" value="Java" />
          <label for="p5c" class="p5">Java</label><br />
          <input type="checkbox" name="pergunta5" id="p5d" value="CSS" />
          <label for="p5d" class="p5">CSS</label>
        </form>
      </section>
      <!--Pergunta 6: Upload-->
      <section>
        <h2>Pergunta 6: Faça o upload de um arquivo HTML</h2>
        <input type="file" name="pergunta6" id="p6" />
        <label for="p6" id="label-p6"></label>
      </section>
      <!--Pergunta 7: Menu Suspenso-->
      <section>
        <h2>Pergunta 7: Qual atributo do input define seu tipo?</h2>
        <form>
          <select name="pergunta7" id="p7">
            <option value="id">id</option>
            <option value="type">type</option>
            <option value="placeholder">placeholder</option>
            <option value="disabled">disabled</option>
          </select>
        </form>
      </section>
      <!--Pergunta 8: Imagens-->
      <section>
        <h2>
          pergunta 8: Qual a linguagem representada na imagem? <br />
          <figure>
            <img
              src="https://blog.geekhunter.com.br/wp-content/uploads/2020/07/pngwing.com_.png"
              alt="Java-image"
            />
            <figcaption>Imagem de uma linguagem de programação</figcaption>
          </figure>
        </h2>
        <form>
          <input
            type="text"
            name="pergunta8"
            id="p8"
            placeholder="Nome da linguagem"
          />
        </form>
      </section>    
      </main>
                  <!--Listas de respostas-->
      <section>
        <h2 id="respostas">Verifique suas resposta</h2>
        <details>
          <summary>Veja as respostas</summary>
       <ol>
          <li>HTML</li>
          <li>Domínio</li>
          <li>Ter 12 caracteres e simbolos</li>
          <li>01-06-1991</li>
          <li>Java, JavaScript</li>
          <li>Deve ter extensão .html</li>
          <li>Type</li>
          <li>Java</li>
        </ol>
        </details>
      </section>
                  <button id="enviar">Envie suas respostas!</button>
`
  init.innerHTML = content
  document.getElementById("enviar").onclick = () => {
    ResultPage()
  }
}

const ResultPage = () => {
  init.innerHTML = ""
  const content = `   
      <!--Tabela de pontuação-->
      <section>
        <h2 id="titulo-tabela">tabela de pontução</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Pontuação</th>
              <th>Avaliação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-2</td>
              <td>Precisa melhorar</td>
            </tr>
            <tr>
              <td>3-4</td>
              <td>Um pouco abaixo da média</td>
            </tr>
            <tr>
              <td>5-6</td>
              <td>Boa! na média</td>
            </tr>
            <tr>
              <td>7-8</td>
              <td>Perfeito! Voçe está bem informado</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">Boa sorte na proxima!</td>
            </tr>
          </tfoot>
        </table>
                    <button id="voltar">Voltar para a pagina inicial</button>
      </section>
       <footer>
      <p class="paragrafo-footer">
        &copy Quiz de programação. Todos os direitos reservados.
      </p>
      <p class="paragrafo-footer">
        Feito por
        <a href="https://github.com/Vinicius-2502" target="_blank">vini</a> em
        inspiração ao canal
        <a href="https://www.youtube.com/@rafaellaballerini" target="_blank"
          >Rafaella Ballerini.</a
        >
      </p>
      <br />
      <p class="paragrafo-footer">
        Conheça minhas
        <a href="https://vinicius-2502.github.io/i-am-vini/" target="_blank">
          redes sociais.
        </a>
      </p>
    </footer>
`
  init.innerHTML = content

  document.getElementById("voltar").onclick = () => {
    InitialPage()
  }
  
}
InitialPage()
