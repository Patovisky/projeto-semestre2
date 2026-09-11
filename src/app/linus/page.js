import Image from "next/image";
import styles from "./page.module.css";

export default function LinusPauling() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.all}>

          <div className={styles.title}>
            <h3>Diagrama de Linus Pauling</h3>

            <h2>
              O diagrama de Linus Pauling é utilizado para organizar a
              distribuição dos elétrons de um átomo. Ele apresenta os
              <span> subníveis eletrônicos</span> em uma sequência baseada
              em seus níveis de energia.
            </h2>

            <Image
              src="/notaLinus.webp"
              width={700}
              height={500}
              alt="Diagrama de Linus Pauling"
              className={styles.imgRep}
            />

            <Image
              src="/linus.webp"
              width={700}
              height={500}
              alt="Diagrama de Linus Pauling em ordem diagonal"
              className={styles.imgRep}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>O que é o diagrama de Linus Pauling?</h2>

            <p className={styles.pinfo}>
              O <span>diagrama de Linus Pauling</span> é uma representação
              utilizada para determinar como os elétrons de um átomo são
              distribuídos em seus diferentes níveis e subníveis de energia.
              Sua principal função é mostrar a sequência em que os
              <span> subníveis são preenchidos</span>, partindo dos que
              possuem menor energia até os de maior energia.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              O método recebeu esse nome em homenagem ao químico
              <span> Linus Pauling</span>, que apresentou uma representação
              desse tipo em 1939. Com o passar do tempo, outros cientistas
              estudaram e modificaram diferentes formas de representar a
              distribuição eletrônica.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Em outros países, essa organização também pode ser relacionada
              ao <span>princípio da construção</span>, associado ao termo
              alemão <i>aufbau</i>, que significa construção. A regra de
              Madelung é outro modelo utilizado para explicar a ordem de
              preenchimento dos orbitais.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Para que serve?</h2>

            <p className={styles.pinfo}>
              O diagrama permite descobrir a <span>distribuição eletrônica</span>
              de um átomo sem a necessidade de realizar cálculos matemáticos
              complexos. Para isso, basta seguir a ordem de energia indicada
              pelos subníveis.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              A configuração eletrônica é importante porque está diretamente
              relacionada às <span>propriedades químicas</span> dos elementos.
              Por meio dela, podemos identificar informações como a
              <span> camada de valência</span> e compreender fenômenos como
              o raio atômico, a energia de ionização, a afinidade eletrônica,
              a eletronegatividade e a formação de ligações químicas.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Níveis e subníveis de energia</h2>

            <p className={styles.pinfo}>
              Os elétrons de um átomo estão distribuídos em diferentes
              <span> níveis de energia</span>, representados pelos números
              1 a 7. Esses níveis também recebem os nomes K, L, M, N, O,
              P e Q.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Dentro dos níveis existem os <span>subníveis s, p, d e f</span>.
              Cada um deles possui uma capacidade máxima de elétrons:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Subnível s:</span> comporta no máximo 2 elétrons.
              <br></br>
              <span>Subnível p:</span> comporta no máximo 6 elétrons.
              <br></br>
              <span>Subnível d:</span> comporta no máximo 10 elétrons.
              <br></br>
              <span>Subnível f:</span> comporta no máximo 14 elétrons.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Dessa forma, os níveis mais internos possuem menos possibilidades
              de subníveis, enquanto os níveis mais externos podem apresentar
              uma quantidade maior deles.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Capacidade dos níveis eletrônicos</h2>

            <p className={styles.pinfo}>
              A quantidade máxima de elétrons que cada nível pode comportar
              aumenta conforme seu número. A organização pode ser resumida
              da seguinte maneira:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Nível 1 (K):</span> 1s²
              <br></br>
              <span>Nível 2 (L):</span> 2s² 2p⁶
              <br></br>
              <span>Nível 3 (M):</span> 3s² 3p⁶ 3d¹⁰
              <br></br>
              <span>Nível 4 (N):</span> 4s² 4p⁶ 4d¹⁰ 4f¹⁴
              <br></br>
              <span>Nível 5 (O):</span> 5s² 5p⁶ 5d¹⁰ 5f¹⁴
              <br></br>
              <span>Nível 6 (P):</span> 6s² 6p⁶ 6d¹⁰
              <br></br>
              <span>Nível 7 (Q):</span> 7s² 7p⁶
            </p>

            <br></br>

            <p className={styles.pinfo}>
              É importante observar que essa disposição mostra os subníveis
              que podem existir em cada nível. Isso não significa que eles
              serão preenchidos nessa mesma ordem, pois a distribuição
              eletrônica segue a <span>ordem crescente de energia</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ordem de preenchimento</h2>

            <p className={styles.pinfo}>
              A sequência indicada pelo diagrama começa pelo subnível de
              menor energia, <span>1s</span>, e continua seguindo as diagonais
              até alcançar o subnível 7p.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              A ordem completa de preenchimento é:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>
                1s² → 2s² → 2p⁶ → 3s² → 3p⁶ → 4s² → 3d¹⁰ →
                4p⁶ → 5s² → 4d¹⁰ → 5p⁶ → 6s² → 4f¹⁴ →
                5d¹⁰ → 6p⁶ → 7s² → 5f¹⁴ → 6d¹⁰ → 7p⁶
              </span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Essa sequência é diferente da simples ordem numérica dos níveis.
              Por exemplo, o <span>4s</span> é preenchido antes do
              <span> 3d</span>, porque apresenta menor energia nesse contexto.
              O mesmo princípio explica outras inversões existentes no
              preenchimento dos subníveis.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Distribuição eletrônica</h2>

            <p className={styles.pinfo}>
              Para realizar uma distribuição eletrônica, devemos conhecer
              o número de elétrons presentes no átomo e seguir a sequência
              fornecida pelo diagrama.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>Exemplo: oxigênio.</span> O oxigênio possui número
              atômico igual a 8. Portanto, em seu estado fundamental,
              apresenta 8 elétrons:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>8O → 1s² 2s² 2p⁴</span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Os dois primeiros elétrons ocupam o 1s. Os próximos dois
              ocupam o 2s e os quatro restantes são direcionados para o
              subnível 2p.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Outro exemplo é o potássio, que possui número atômico 19:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>19K → 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹</span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Nesse caso, o 19º elétron entra no <span>4s</span> e não no
              3d, pois o 4s apresenta menor energia na ordem de preenchimento
              considerada pelo diagrama.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Distribuição simplificada</h2>

            <p className={styles.pinfo}>
              Quando o átomo possui muitos elétrons, escrever toda a
              distribuição pode ser bastante trabalhoso. Uma alternativa
              é utilizar um <span>gás nobre</span> como referência.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              O bário, por exemplo, possui número atômico 56. Sua configuração
              completa pode ser representada como:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>
                56Ba → 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶
                5s² 4d¹⁰ 5p⁶ 6s²
              </span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Como o xenônio possui 54 elétrons e sua distribuição termina
              em 5p⁶, podemos utilizar sua configuração como referência.
              Assim, a representação simplificada do bário fica:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>56Ba → [Xe] 6s²</span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Distribuição eletrônica dos íons</h2>

            <p className={styles.pinfo}>
              O diagrama também pode ser utilizado para determinar a
              configuração eletrônica de <span>íons</span>. Quando um átomo
              perde ou recebe elétrons, sua distribuição eletrônica é
              modificada.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              O potássio possui 19 elétrons e sua configuração termina em
              4s¹. Ao perder esse elétron, forma-se o cátion K⁺:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>
                19K → 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹
              </span>
              <br></br>
              <span>
                19K⁺ → 1s² 2s² 2p⁶ 3s² 3p⁶
              </span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Já o oxigênio possui 8 elétrons. Ao receber dois elétrons,
              transforma-se no ânion O²⁻:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>8O²⁻ → 1s² 2s² 2p⁶</span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Distribuição do ferro</h2>

            <p className={styles.pinfo}>
              O ferro possui número atômico 26. Em seu estado fundamental,
              sua distribuição eletrônica é:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>
                26Fe → 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶
              </span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Apesar de o subnível 4s ser preenchido antes do 3d durante a
              distribuição, o 4s pertence ao nível mais externo. Por isso,
              quando o ferro perde dois elétrons para formar o
              <span> Fe²⁺</span>, os elétrons retirados são os do subnível 4s.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Dessa maneira:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>
                26Fe²⁺ → 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Limitações do diagrama</h2>

            <p className={styles.pinfo}>
              O diagrama de Linus Pauling é extremamente útil para estudar
              a distribuição eletrônica, mas <span>não explica perfeitamente
              todos os elementos</span>. Existem algumas exceções observadas
              experimentalmente.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Um dos exemplos mais conhecidos é o <span>cromo (Cr)</span>.
              Pelo preenchimento esperado, sua configuração seria 4s² 3d⁴.
              Entretanto, experimentalmente, encontra-se:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>24Cr → 4s¹ 3d⁵</span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Essa configuração está relacionada a uma maior estabilidade
              proporcionada pelo subnível d semipreenchido.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              O <span>cobre (Cu)</span> também apresenta uma exceção. Em vez
              da configuração esperada 4s² 3d⁹, o estado fundamental observado
              é:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>29Cu → 4s¹ 3d¹⁰</span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Nesse caso, o subnível d completamente preenchido contribui
              para uma configuração mais estável.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Exceções nos elementos de transição interna</h2>

            <p className={styles.pinfo}>
              Algumas exceções também aparecem entre os elementos de
              <span> transição interna</span>. Um exemplo é o lantânio,
              cujo preenchimento observado não corresponde exatamente à
              previsão mais simples feita pelo diagrama.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Para o <span>lantânio (La)</span>, esperava-se uma configuração
              envolvendo 6s² 4f¹. Porém, a configuração observada é:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>57La → 6s² 5d¹</span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              O <span>cério (Ce)</span> também apresenta uma configuração
              diferente daquela que seria obtida seguindo apenas a sequência
              teórica do diagrama:
            </p>

            <br></br>

            <p className={styles.pinfo}>
              <span>58Ce → 6s² 4f¹ 5d¹</span>
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Esses casos mostram que o diagrama deve ser entendido como
              uma ferramenta de organização da distribuição eletrônica,
              e não como uma regra absoluta capaz de prever sozinho o
              comportamento de todos os elementos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Resumo</h2>

            <p className={styles.pinfo}>
              O <span>diagrama de Linus Pauling</span> organiza os subníveis
              atômicos conforme sua energia e auxilia na construção da
              distribuição eletrônica dos elementos.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              A sequência começa pelo <span>1s</span> e termina no
              <span> 7p</span>, passando pelos subníveis s, p, d e f.
              Cada subnível possui uma capacidade máxima de elétrons,
              sendo 2 no s, 6 no p, 10 no d e 14 no f.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Conhecer essa organização permite compreender melhor a
              <span> estrutura eletrônica</span> dos átomos, identificar
              elétrons de valência, estudar íons e relacionar a configuração
              eletrônica às propriedades químicas dos elementos.
            </p>

            <br></br>

            <p className={styles.pinfo}>
              Entretanto, existem <span>exceções</span>, principalmente entre
              alguns metais de transição e elementos de transição interna.
              Por isso, resultados experimentais também são importantes para
              determinar a configuração real de determinados átomos.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}