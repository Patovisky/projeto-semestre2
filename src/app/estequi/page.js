import Image from "next/image";
import styles from "./page.module.css";

export default function Organica() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.all}>
          <div className={styles.title}>
            <h3>Estequiometria</h3>
            <h2>A estequiometria é um ramo da química que estuda e calcula a relação quantitativa <br></br> entre reagentes
              e produtos em uma reação química. <br></br>
              Para começar o estudo de estequiometria, é preciso ter conhecimentos de alguns conceitos básicos:</h2>

            <Image src='/estequiImg.webp' width={300} height={400} alt="https://www.manualdaquimica.com/quimica-geral/estequiometria-das-reacoes-quimicas.html" className={styles.imgRep} />

          </div>


          <div className={styles.infoConfig}>
            <h2>Reagente:</h2>
            <p className={styles.pinfo}>São substâncias utilizadas em análises laboratoriais para <span>provocar</span>, <span>identificar</span> ou <span>medir</span> reações químicas.</p>
            <br></br>
            <p className={styles.pinfo}><span>Graus de pureza:</span> A pureza de um reagente é o quanto de uma determinada
              amostra de fato corresponde ao composto que vai reagir.
              Para calcular a pureza de uma amostra, divida a massa da substância pura pela massa
              total da amostra e multiplique por 100 (imagem abaixo). Você também pode usar uma regra de três simples.
            </p>
            <Image src='/pureza.jpg' width={400} height={200} alt="pureza" className={styles.imgRep} />
          </div>

          <div className={styles.infoConfig}>
            <h2>Produto:</h2>
            <p className={styles.pinfo}>É a <span>matéria gerada</span> quando os reagentes (substâncias iniciais) se <span>transformam e 
              se combinam</span> entre si.
              Nas equações químicas, os produtos aparecem sempre do lado direito da seta →, que indica o sentido da transformação.</p>
            <br></br>
            <p className={styles.pinfo}><span>Obs: </span>
              Pode ter características físicas e químicas totalmente
              diferentes dos materiais iniciais.
            </p>
            <Image src='/enxofre.jpg' width={400} height={200} alt="produto" className={styles.imgRep} />
          </div>

          <div className={styles.infoConfig}>
            <h2>Lei de lavoisier (conservação da massa):</h2>
            <div className={styles.quoteDiv}>
              <p>
                <Image src='/quote-left-svgrepo-com.svg' width={20} height={20} alt="blublu" className={styles.quote} />
                Na natureza, nada se cria, nada se perde, tudo se transforma
                <Image src='/quote-right-svgrepo-com.svg' width={20} height={20} alt="blublu" className={styles.quote} /></p>
            </div>
            <p className={styles.pinfo}>Enunciou lavoisier, criador da lei da conservação da massa.
              A lei de Lavoisier, estabelece que, em um sistema fechado, a <span>soma</span> das <span>massas dos reagentes </span>
              é sempre <span>igual</span> à soma das <span>massas dos produtos</span> em qualquer reação química.
              Nesse sentido, essa lei foi corroborada por meio de experimentos pioneiros,
              especialmente o de combustão do enxofre (representado na imagem anterior) em um sistema fechado,
              proporcionando evidências cruciais para a aceitação da teoria atômica.</p>

          </div>
          <div className={styles.infoConfig}>
            <h2>Lei de Proust (proporções constantes):</h2>
            <div className={styles.quoteDiv}>
              <p>
                <Image src='/quote-left-svgrepo-com.svg' width={20} height={20} alt="blublu" className={styles.quote} />
                As substâncias que se combinam para formar um composto
                sempre o fazem em uma relação de massas fixas, constantes e invariaveis
                <Image src='/quote-right-svgrepo-com.svg' width={20} height={20} alt="blublu" className={styles.quote} /></p>
            </div>
            <p className={styles.pinfo}>Essa lei é muito importante porque forneceu as bases para o atomismo e
              também é usada para a obtenção de outras fórmulas químicas importantes, tais como a <span>fórmula molecular</span>,
              a <span>fórmula percentual ou centesimal</span>  e a <span>fórmula mínima ou empírica</span>.
              Segundo a lei de Proust, as reações
              sempre ocorreram na mesma proporção de massas.</p>
            <br></br>
            <p className={styles.pinfo}><span>Exemplo:</span>  A água é formada por hidrogênio e oxigênio na proporção
              de 4 gramas de hidrogênio para cada 32 gramas de oxigênio,
              produzindo 36 gramas de água.</p>
            <Image src='/doisagadoiso2aaaaa.jpg' width={800} height={400} alt="produto" className={styles.imgRep} />
          </div>



















          <div className={styles.infoConfig}>
            <p className={styles.pinfo}><span>Nota: </span>Refletindo há algum tempo,
              cheguei a um vislumbre de que a famosa frase
              de Heráclito de Éfeso — “Ninguém entra em um mesmo rio
              uma segunda vez, pois, quando isso acontece, já não se é o
              mesmo, assim como as águas que já serão outras.”
              — pode nos ajudar a discernir melhor a lei de
              conservação de Lavoisier. Antes de continuar
              a explicar como as duas ideias se relacionam, é preciso entender
              o ponto central de ambas. <br></br>
              <br></br>
              Heráclito propunha que o ser é um constante "vir-a-ser, pois estamos
              sempre nos tornando a todo momento uma versão transformada, renovada
              e diferente de nós mesmos. A vida acontece neste fluxo, impulsionada
              por contradições, e é por meio destas que o mundo modifica e evolui.
              Nada permanece igual, e tudo está em contínua mutação. Recapitulando
              a ideia de Lavoisier brevemente —
              os átomos apenas se rearranjam, a quantidade de matéria permanece constante durante
              uma transformação química.
              <br></br><br></br>
              Agora posso finalmente chegar ao ponto-chave. Lembrem-se das seguintes palavras:
              fluxo e rearranjam. A frase de Heráclito pode, e deve, ser interpretada de forma literal.
              O homem e o rio nunca serão os mesmos de antes; tudo está, de fato, em um fluxo
              de constante transformação; os átomos sempre se rearranjam, passando
              continuamente por processos químicos, físicos e biológicos. Sabia que, em um ano,
              grande parte dos nossos átomos já não é a mesma? Somos basicamente um monte
              de matéria reciclada, que continuará se transformando eternamente. A matéria e energia
              do Big Bang podem estar,
              de alguma forma, presentes até mesmo em nós.
              <br></br><br></br>
              Em resumo: A frase de Heráclito ganha uma profundidade maior
              e uma perspectiva literal quando lembramos que o corpo humano
              é feito de matéria. As células do nosso corpo morrem e se regeneram;
              os átomos que nos compõem hoje, em sua maioria, já não são os mesmos de anos atrás.
              A ciência comprova: nós não somos os mesmos de forma literal. Mas isso não
              anula as diversas interpretações do que é “ser” ou do que é “você”. Na minha
              opinião, apesar de sermos pura matéria, a forma como nos relacionamos é o que
              define quem somos. O lado filosófico do "ser", ou simplesmente como a sociologia
              explica o ser, não é anulado pela física ou química. Mas não irei me aprofundar;
              isso se trata de ideias sociológicas e filosóficas que deixariam este texto ainda
              maior.
              (Essa parte do site já está grande o suficiente…).
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
