import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>

        <div className={styles.mainImage}>

          <Image
            src="/fogo.png"
            width={600}
            height={300}
            alt="Imagem de química"
            className={styles.imgRep}
          />

          <div className={styles.textoSobreposto}>
            Química com pato!
          </div>

          <div className={styles.texto}>
            Vasta informação sobre química reunida de forma simples
          </div>

        </div>

        <div className={styles.all}>

          <div className={styles.infoConfig}>
            <h2>Átomo</h2>
            <p className={styles.pinfo}>
              O átomo é a <span>unidade fundamental da matéria</span> e a <span>menor fração</span> capaz de identificar
              um elemento químico, pois detém sua identidade. O termo átomo deriva do grego
              e significa indivisível.
              Ele é formado por um núcleo, que contém nêutrons e prótons, e por elétrons que
              circundam o núcleo.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Prótons</h2>
            <p className={styles.pinfo}>
              Prótons são <span>partículas subatômicas</span> com <span>carga elétrica positiva</span> que
              ficam no núcleo do átomo. Eles definem o número atômico e ajudam a
              identificar cada elemento químico na tabela periódica.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Elétrons</h2>
            <p className={styles.pinfo}>
              Elétrons são partículas subatômicas com <span>carga elétrica negativa.</span>
              Os elétrons estão localizados em torno do núcleo do átomo. No entanto, é importante salientar que
              embora o modelo planetário seja replicado para fins didáticos, <span>os elétrons não se movem em órbitas fixas
                como planetas ao redor do sol</span>, mas sim em regiões de <span>alta probabilidade</span> de encontrar um elétron.
              Dessa forma, eles ocupam regiões do
              espaço chamadas <span>orbitais</span>, que representam as <span>prováveis posições</span> onde podem ser
              encontrados com base na teoria quântica.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Nêutrons</h2>
            <p className={styles.pinfo}>
              Nêutron é uma <span>partícula subatômica neutra, isto é, sem carga elétrica,</span> que é encontrada no núcleo dos átomos,
              juntamente com os prótons. Nesse sentido, a descoberta dos nêutrons foi fundamental para o desenvolvimento
              da Física Nuclear e da compreensão da estrutura dos átomos. Eles desempenham um papel crucial na estabilidade dos
              núcleos atômicos, ajudando a <span>equilibrar as forças elétricas entre os prótons.</span> Além disso, são essenciais em reações
              nucleares, como em processos de fissão nuclear.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Íons</h2>
            <p className={styles.pinfo}>
              Os íons são <span>espécies químicas eletricamente carregadas resultantes de átomos que
                perderam ou receberam elétrons.</span> Os átomos são eletricamente neutros por possuírem iguais quantidades de
              partículas carregadas positivamente (prótons) e negativamente (elétrons).
              Assim, o átomo neutro, ao receber elétrons adicionais, fica com excesso de carga negativa, formando um
              íon negativo, e, se o átomo neutro perde
              seus elétrons originais, ficará com ausência dessas cargas, representada por uma carga numérica
              positiva, originado um íon positivo.

              <br></br><br></br>

              <span>Exemplos de íons negativos:</span> F-, Cl-, O2-.

              <br></br>

              <span>Exemplos de íons positivos:</span> H+, K+, Fe2+.

              <br></br><br></br>

              Os íons podem ser simples, quando formados por um único elemento
              químico, ou compostos, quando formados por mais de um elemento químico.

              <br></br><br></br>

              <span>Exemplos de íons simples:</span> Na+, Ca2+, Br-, O2-.

              <br></br>

              <span>Exemplos de íons compostos:</span> NH4+, SO4-, CO32-.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Cátions</h2>
            <p className={styles.pinfo}>
              Os íons com carga positiva são denominados cátions e são
              formados por átomos eletricamente neutros que perderam
              elétrons, conforme representação pela equação abaixo:
            </p>

            <Image
              src="/x.png"
              width={400}
              height={200}
              alt="produto"
              className={styles.imgRep2}
            />

            <p className={styles.pinfo}>
              O termo n representa a quantidade de elétrons perdidos e a
              carga gerada no íon. Por exemplo, o átomo de sódio (Na) perde um elétron
              para formar o íon positivo sódio
              (Na+). Como esse elemento perde um único elétron, sua carga será 1+:
            </p>

            <Image
              src="/na.png"
              width={400}
              height={200}
              alt="produto"
              className={styles.imgRep2}
            />

            <p className={styles.pinfo}>
              Já o átomo de cálcio (Ca) perde dois elétrons, formando o íon
              positivo cálcio (Ca2+). Como esse elemento perde dois elétrons,
              o cátion resultante possui carga 2+:
            </p>

            <Image
              src="/ca.png"
              width={400}
              height={200}
              alt="produto"
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Ânions</h2>
            <p className={styles.pinfo}>
              Os ânions, por sua vez, possuem <span>carga negativa</span>, pois recebem um ou mais elétrons,
              resultando num maior número de elétrons em relação ao número de prótons.

              <br></br><br></br>

              <span>Tipos de Ânions</span>

              <br></br><br></br>

              Os ânions monovalentes possuem carga -1;
              <br></br>
              Os ânions bivalentes possuem carga -2;
              <br></br>
              Os ânions trivalentes possuem carga -3;
              <br></br>
              Os ânions tetravalentes possuem carga -4.

              <br></br><br></br>

              <span>Exemplos de Ânions</span>

              <br></br><br></br>

              Cl-1 (cloro)
              <br></br>
              Br-1 (bromo)
              <br></br>
              F-1 (flúor)
              <br></br>
              O-2 (oxigênio)
              <br></br>
              S-2 (enxofre)
              <br></br>
              N-3 (nitrogênio)
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Quarks</h2>
            <p className={styles.pinfo}>
              Atualmente, acreditamos que os quarks são <span>partículas pontuais</span> que constituem os prótons,
              nêutrons e toda uma classe de partículas de forte interação chamadas <span>hádrons</span>.

              <br></br><br></br>

              Como vimos, os quarks estão confinados dentro das partículas que constituem e movem-se como bolas
              saltando dentro de uma bola maior. Os quarks têm três tipos de cargas: <span>carga elétrica, sabor e cor</span>
              (porém, não nos sentidos tradicionais de “sabor” e “cor”, que detectamos com a língua ou os olhos).

              <br></br><br></br>

              Em termos de carga elétrica, os quarks podem ter uma carga que é uma fração da carga de um elétron ou próton:
              ou <span>-1/3</span> (1/3 da carga negativa de um elétron) ou <span>+2/3</span> (2/3 da carga positiva de um próton).

              <br></br><br></br>

              Os quarks têm seis sabores, que chamamos de <span>up, down, strange, charm, top e bottom</span>.
              Os sabores do quark estão relacionados com a força fraca responsável pela radioatividade.

              <br></br><br></br>

              Os prótons são formados de <span>dois quarks up e um quark down</span>; os nêutrons são formados de
              <span>dois quarks down e um quark up</span>.

              <br></br><br></br>

              Além da carga elétrica e do sabor, os quarks podem ter uma destas três cores:
              <span>vermelha, branca e azul.</span> As cores são a fonte da força forte que une os quarks e explicam
              o nome cromodinâmica – <span>chromos</span> significa “cor” em grego.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Férmions</h2>
            <p className={styles.pinfo}>
              Basicamente são os <span>“tijolos” constituintes da matéria.</span> Os férmions são partículas que possuem
              uma propriedade quântica chamada <span>spin</span> (uma espécie de momento angular quântico) de módulo
              semi-inteiro (½), sendo descritos pelo princípio de Exclusão de Pauli.

              <br></br><br></br>

              Em outras palavras, dois férmions no mesmo nível de energia não podem apresentar os mesmos números
              quânticos ou ainda ocupar uma mesma posição do espaço no mesmo instante.

              <br></br><br></br>

              Os férmions mais “leves” (de menor massa) são chamados de <span>léptons</span> (do grego: “leve”),
              e os mais pesados, como os prótons, nêutrons e átomos, formados por estados de quarks ligados pela
              interação forte, são chamados de <span>hádrons</span> (do grego “forte”).

              <br></br><br></br>

              Trios de quarks são chamados de <span>bárions</span> (prótons e nêutrons), e duplas de quarks são
              chamadas de <span>mésons</span>.

              <br></br><br></br>

              Os léptons incluem elétrons, múons e taúons. Essas partículas apresentam carga elétrica fundamental
              (e = 1,6.10-19 C) negativa e possuem massa.

              <br></br><br></br>

              Os quarks também são léptons e são classificados em seis sabores: up, charm, top, down, strange e bottom.
              Apresentam carga elétrica fracionária, sendo positivas ou negativas, com um ou dois terços da carga fundamental.

              <br></br><br></br>

              Outra classe de léptons são os neutrinos, de massa extremamente pequena e carga elétrica neutra.
              São divididos em neutrinos eletrônicos, tauônicos e muônicos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Bósons</h2>
            <p className={styles.pinfo}>
              Bósons são as partículas responsáveis pela <span>interação existente entre os férmions.</span>
              Diferentemente deles, essas partículas não apresentam problema em ocupar o mesmo lugar no espaço
              e ao mesmo tempo.

              <br></br><br></br>

              Apresentam <span>spin inteiro</span>, não possuem massa e podem apresentar carga elétrica.
              Os bósons são os glúons, fótons, bósons W e Z e o bóson de Higgs. Cada um deles é responsável
              pela mediação de um tipo de força da natureza.

              <br></br><br></br>

              Os fótons, por exemplo, são os responsáveis pela <span>interação eletromagnética.</span>
              Em razão de suas propriedades, é possível que um feixe de luz atravesse outro sem que haja
              qualquer colisão entre eles.

              <br></br><br></br>

              Os glúons, por sua vez, são os mediadores da <span>interação forte</span>, que mantém os quarks unidos,
              formando os mésons e os bárions.

              <br></br><br></br>

              Os bósons W e Z são os responsáveis pela <span>força eletrofraca</span>, comum nos decaimentos beta.

              <br></br><br></br>

              O bóson de Higgs, por sua vez, é a partícula responsável pela <span>atribuição de massa aos férmions.</span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fóton</h2>
            <p className={styles.pinfo}>
              Os fótons são as <span>partículas elementares da luz.</span>

              <br></br><br></br>

              <span>Características:</span> não têm massa, a energia de cada fóton é dada por
              <span>E = h ⋅ f</span> e o momento é uma propriedade associada à sua natureza quântica.

              <br></br><br></br>

              Fótons são criados no núcleo das estrelas por meio da <span>fusão nuclear.</span>
              Também podem ser produzidos pelo aumento da temperatura de certos materiais ou pela aplicação
              de uma corrente elétrica em outros.

              <br></br><br></br>

              Partículas quânticas como o fóton apresentam a natureza da <span>dualidade onda-partícula.</span>

              <br></br><br></br>

              Enquanto o fóton é a partícula elementar da luz, o elétron é uma partícula massiva e com carga
              elétrica negativa que está presente nos átomos.

              <br></br><br></br>

              <span>Tipos de fótons:</span> ondas de rádio, micro-ondas, infravermelho, luz visível,
              ultravioleta, raios X e raios gama.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Glúon</h2>
            <p className={styles.pinfo}>
              Glúon (ou gluon) é uma <span>partícula subatômica fundamental</span> que atua como a
              “cola” do universo, mantendo os quarks unidos para formar prótons, nêutrons e outras partículas.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Modelos atômicos</h2>
            <p className={styles.pinfo}>
              O Modelo Atômico de Dalton, conhecido como o <span>modelo bola de bilhar</span>, possui os seguintes princípios:

              <br></br><br></br>

              Todas as substâncias são formadas de pequenas partículas chamadas átomos;
              <br></br>
              Os átomos de diferentes elementos têm diferentes propriedades, mas todos os átomos do mesmo elemento
              são exatamente iguais;
              <br></br>
              Os átomos não se alteram quando formam compostos químicos;
              <br></br>
              Os átomos são permanentes e indivisíveis, não podendo ser criados nem destruídos;
              <br></br>
              As reações químicas correspondem a uma reorganização de átomos.

              <br></br><br></br>

              <span>Modelo Atômico de Thomson</span>

              <br></br><br></br>

              O Modelo Atômico de Thomson foi o primeiro a realizar a <span>divisibilidade do átomo.</span>
              Ao pesquisar sobre raios catódicos, o físico inglês propôs esse modelo que ficou conhecido
              como o modelo pudim de ameixa.

              <br></br><br></br>

              Ele demonstrou que esses raios podiam ser interpretados como sendo um feixe de partículas
              carregadas de energia elétrica negativa.

              <br></br><br></br>

              Em 1887, Thomson sugeriu que os elétrons eram um constituinte universal da matéria.
              Ele apresentou as primeiras ideias relativas à estrutura interna dos átomos.

              <br></br><br></br>

              Thomson indicava que os átomos deviam ser constituídos de cargas elétricas positivas e negativas
              distribuídas uniformemente.

              <br></br><br></br>

              Ele descobriu essa mínima partícula e assim estabeleceu a teoria da natureza elétrica da matéria.
              Concluiu que os elétrons eram constituintes de todos os tipos de matéria, pois observou que a
              relação carga/massa do elétron era a mesma para qualquer gás empregado em suas experiências.

              <br></br><br></br>

              Em 1897, Thomson tornou-se reconhecido como o <span>“pai do elétron”.</span>

              <br></br><br></br>

              <span>Modelo Atômico de Rutherford</span>

              <br></br><br></br>

              Em 1911, o físico neozelandês Rutherford colocou uma folha de ouro bastante fina numa câmara metálica.
              Seu objetivo era analisar a trajetória de partículas alfa a partir do obstáculo criado pela folha de ouro.

              <br></br><br></br>

              Nesse ensaio de Rutherford, observou que algumas partículas ficavam totalmente bloqueadas e outras
              partículas, que não eram afetadas, ultrapassavam a folha, sofrendo desvios.

              <br></br><br></br>

              Segundo ele, esse comportamento podia ser explicado graças às forças de repulsão elétrica entre essas partículas.

              <br></br><br></br>

              Pelas observações, afirmou que o átomo era nucleado e sua parte positiva se concentrava num volume
              extremamente pequeno, que seria o próprio núcleo.

              <br></br><br></br>

              O Modelo Atômico de Rutherford, conhecido como <span>modelo planetário</span>, corresponde a um sistema
              planetário em miniatura, no qual os elétrons se movem em órbitas circulares, ao redor do núcleo.

              <br></br><br></br>

              <span>Modelo Atômico de Rutherford-Bohr</span>

              <br></br><br></br>

              O modelo apresentado por Rutherford foi aperfeiçoado por Bohr. Por esse motivo, o aspecto da estrutura
              atômica de Bohr também é chamado de Modelo Atômico de Bohr ou Modelo Atômico de Rutherford-Bohr.

              <br></br><br></br>

              A teoria do físico dinamarquês Niels Bohr estabeleceu as seguintes concepções atômicas:

              <br></br><br></br>

              Os elétrons que giram ao redor do núcleo não giram ao acaso, mas descrevem <span>órbitas determinadas.</span>

              <br></br><br></br>

              O átomo é incrivelmente pequeno, mesmo assim a maior parte do átomo é espaço vazio.
              O diâmetro do núcleo atômico é cerca de cem mil vezes menor que o átomo todo.

              <br></br><br></br>

              Quando a eletricidade passa através do átomo, o elétron pula para a órbita maior e seguinte,
              voltando depois à sua órbita usual.

              <br></br><br></br>

              Quando os elétrons saltam de uma órbita para a outra resulta luz. Bohr conseguiu prever os
              comprimentos de onda a partir da constituição do átomo e do salto dos elétrons de uma órbita para a outra.

              <br></br><br></br>

              <span>Modelo Atômico de Schrödinger</span>

              <br></br><br></br>

              Trata-se do modelo atual e o mais aceito pela comunidade científica. Ele nasceu da teoria da
              mecânica ondulatória proposta por Erwin Schrödinger.

              <br></br><br></br>

              Para Schrödinger, os átomos possuíam <span>regiões prováveis de existência dos elétrons</span>,
              o que ele chamou de orbitais eletrônicos.

              <br></br><br></br>

              O orbital é uma zona de máxima probabilidade de se encontrar um elétron. Isso porque, segundo
              modelos matemáticos, seria impossível definir o local exato e velocidade de movimento dessa
              partícula subatômica.

              <br></br><br></br>

              Através de funções matemáticas, conhecidas por funções ondulatórias, o cientista obteve resultados
              consideráveis, o que rendeu a ele o prêmio Nobel em 1933.

              <br></br><br></br>

              O princípio da incerteza de Heisenberg contribuiu para a formulação desse modelo atômico.
              O princípio diz: é impossível definir a posição e velocidade exatas de um elétron num mesmo instante.

              <br></br><br></br>

              Esse fato se dá, pois os elétrons possuem comportamento de <span>onda-partícula</span>, ou seja,
              ora se comportam como onda, ora como partícula.

              <br></br><br></br>

              Baseado nisso, o cientista definiu o estado de maior concentração de elétrons no orbital como sendo
              a <span>nuvem eletrônica do átomo.</span> Essa descoberta foi importantíssima para a melhor compreensão
              das propriedades químicas e físicas dos átomos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Massa</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam suscipit, ligula vitae tincidunt commodo, libero neque
                consequat nunc, vitae feugiat sapien ipsum vel justo.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Número atômico</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam erat volutpat. Sed tincidunt lacus sed felis consequat,
                vel posuere sapien elementum.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Como calcular prótons, nêutrons, elétrons e número atômico</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras posuere, sapien vitae commodo tincidunt, erat neque
                consectetur lorem, eget facilisis ipsum nisl vitae justo.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligações</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec faucibus, sapien vitae pulvinar malesuada, libero justo
                consequat augue, vitae fermentum sapien neque vitae nisl.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligações iônicas</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum feugiat, sapien vel tincidunt consequat, massa
                sapien tincidunt lorem, vitae interdum purus augue nec justo.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligações covalentes</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer facilisis ipsum sed ligula consequat, vitae tincidunt
                neque pellentesque. Suspendisse potenti.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligações metálicas</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vitae ipsum at libero tincidunt consequat. Sed
                ullamcorper, augue vitae commodo malesuada, lacus erat.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Cristalização</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vitae neque id libero faucibus consequat. Donec
                elementum, sapien sed tincidunt malesuada, justo nisl.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Geometria molecular</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Polaridade</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Forças intermoleculares</h2>
            <p className={styles.pinfo}>
              <span>
                Pellentesque habitant morbi tristique senectus et netus et
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                malesuada fames ac turpis egestas.
              </span>
            </p>
          </div>

        </div>

      </main>

    </div>
  );
}