'use client'
import Link from 'next/link'
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
            Química completa
          </div>

        </div>

        <div className={styles.all}>

          <div className={styles.infoConfig}>
            <h2>Átomo</h2>
            <p className={styles.pinfo}>
              O átomo corresponde à <span>unidade básica da matéria</span> e representa a menor
              porção capaz de conservar as características de um elemento químico. Seu nome tem
              origem grega e significa indivisível.
              <br></br><br></br>
              Ele é constituído por um núcleo, onde estão localizados os prótons e nêutrons,
              e por elétrons distribuídos ao redor do núcleo em regiões chamadas orbitais.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Prótons</h2>
            <p className={styles.pinfo}>
              Os prótons são <span>partículas subatômicas de carga elétrica positiva </span>
              encontradas no núcleo dos átomos. A quantidade de prótons presente no núcleo
              determina o número atômico e, consequentemente, identifica qual é o elemento
              químico representado.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Elétrons</h2>
            <p className={styles.pinfo}>
              Os elétrons são partículas subatômicas que apresentam <span>carga elétrica negativa </span>
              e encontram-se na região ao redor do núcleo.
              <br></br><br></br>
              Embora seja comum representar o átomo como um pequeno sistema planetário, essa
              comparação serve apenas para facilitar sua compreensão. <span>Os elétrons não percorrem
                órbitas fixas</span> como os planetas ao redor do Sol. Na realidade, eles ocupam
              regiões onde existe maior probabilidade de serem encontrados.
              <br></br><br></br>
              Essas regiões são chamadas de <span>orbitais</span> e representam possíveis locais
              de presença do elétron de acordo com a mecânica quântica.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Nêutrons</h2>
            <p className={styles.pinfo}>
              O nêutron é uma <span>partícula subatômica que não possui carga elétrica</span>.
              Ele está localizado no núcleo dos átomos juntamente com os prótons.
              <br></br><br></br>
              A descoberta dos nêutrons foi importante para compreender melhor a estrutura
              atômica e o funcionamento do núcleo. Eles contribuem para a <span>estabilidade nuclear</span>,
              ajudando a equilibrar as interações entre os prótons.
              <br></br><br></br>
              Além disso, os nêutrons possuem participação importante em processos e
              <span> reações nucleares</span>, como a fissão nuclear.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Íons</h2>
            <p className={styles.pinfo}>
              Íons são <span>átomos ou grupos de átomos que apresentam carga elétrica </span>
              devido à perda ou ao ganho de elétrons.
              <br></br><br></br>
              Um átomo neutro possui a mesma quantidade de prótons e elétrons. Quando recebe
              elétrons, passa a apresentar excesso de cargas negativas e transforma-se em um
              íon negativo. Quando perde elétrons, fica com maior quantidade de cargas positivas,
              originando um íon positivo.

              <br></br><br></br>

              <span>Exemplos de íons negativos:</span> F-, Cl-, O2-.

              <br></br>

              <span>Exemplos de íons positivos:</span> H+, K+, Fe2+.

              <br></br><br></br>

              Os íons podem ser classificados em simples, quando são constituídos por apenas
              um elemento químico, ou compostos, quando apresentam átomos de diferentes
              elementos.

              <br></br><br></br>

              <span>Exemplos de íons simples:</span> Na+, Ca2+, Br-, O2-.

              <br></br>

              <span>Exemplos de íons compostos:</span> NH4+, SO4-, CO32-.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Cátions</h2>

            <p className={styles.pinfo}>
              Os <span>cátions são íons que apresentam carga positiva</span>. Eles surgem
              quando um átomo eletricamente neutro perde um ou mais elétrons.
              A quantidade de elétrons perdida determina o valor da carga positiva do íon.
            </p>

            <Image
              src="/x.png"
              width={400}
              height={200}
              alt="Representação da formação de um cátion"
              className={styles.imgRep2}
            />

            <p className={styles.pinfo}>
              Na representação, a letra n indica a quantidade de elétrons que foi retirada
              do átomo e, consequentemente, o valor da carga adquirida pelo cátion.
              <br></br><br></br>
              Um exemplo é o sódio (Na). Quando o átomo de sódio perde um elétron, forma-se
              o íon Na+, que possui carga positiva de 1+.
            </p>

            <Image
              src="/na.png"
              width={400}
              height={200}
              alt="Formação do cátion sódio"
              className={styles.imgRep2}
            />

            <p className={styles.pinfo}>
              O cálcio (Ca), por outro lado, pode perder dois elétrons. Dessa forma, origina
              o íon Ca2+, cuja carga é igual a 2+.
            </p>

            <Image
              src="/ca.png"
              width={400}
              height={200}
              alt="Formação do cátion cálcio"
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Ânions</h2>

            <p className={styles.pinfo}>
              Os ânions são íons que possuem <span>carga elétrica negativa</span>. Eles são
              formados quando um átomo recebe um ou mais elétrons, passando a apresentar
              mais elétrons do que prótons.

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
            <h2>Isótopos</h2>

            <p className={styles.pinfo}>
              Isótopos, isóbaros e isótonos são formas de classificar átomos de acordo com
              a quantidade de prótons, nêutrons e a massa presentes em seus núcleos.
              <br></br><br></br>

              Dessa forma:
              <br></br><br></br>

              <span>Isótopos:</span> átomos que possuem o mesmo número de prótons;
              <br></br>
              <span>Isótonos:</span> átomos que apresentam a mesma quantidade de nêutrons;
              <br></br>
              <span>Isóbaros:</span> átomos que possuem o mesmo número de massa.

              <br></br><br></br>

              Os prótons possuem carga positiva, os elétrons apresentam carga negativa e os
              nêutrons não possuem carga. Dentro do átomo, prótons e nêutrons ficam no núcleo,
              enquanto os elétrons ocupam a eletrosfera.

            </p>

            <br></br><br></br>

            <h1 className={styles.h1}>
              <span>Carbono-14:</span> O carbono-14 é produzido na atmosfera terrestre a partir
              da interação entre raios cósmicos e o nitrogênio-14. Esse isótopo pode se combinar
              com o oxigênio, formando o gás carbônico (14CO2), que é incorporado pelas plantas.
              <br></br><br></br>
              Enquanto um organismo está vivo, ele mantém uma determinada quantidade de
              carbono-14. Após sua morte, essa quantidade começa a diminuir devido ao
              <span> decaimento radioativo</span>.
              <br></br><br></br>
              O carbono-14 possui meia-vida de aproximadamente <span>5730 anos</span>. Isso
              significa que, após esse período, metade da quantidade inicial de carbono-14
              presente em uma amostra terá sofrido decaimento.
              <br></br><br></br>
              A meia-vida corresponde ao tempo necessário para que metade dos núcleos
              radioativos de uma amostra se desintegre. Dependendo do radioisótopo, esse
              período pode variar de frações de segundo até bilhões de anos.
              <br></br><br></br>
              Por exemplo, se uma amostra possuir 200 g de uma substância radioativa com
              meia-vida de 10 anos, após 10 anos restarão aproximadamente 100 g. Depois de
              mais 10 anos, restarão cerca de 50 g.
              <br></br><br></br>
              No caso da datação por carbono-14, a idade de uma amostra pode ser estimada
              comparando a quantidade de carbono-14 restante com a quantidade esperada em
              organismos vivos. Assim, <span>quanto menor a quantidade de carbono-14, maior
                tende a ser a idade da amostra</span>.
            </h1>
          </div>

          <div className={styles.infoConfig}>
            <h2>Quarks</h2>

            <p className={styles.pinfo}>
              Os quarks são considerados <span>partículas elementares</span> que formam
              prótons, nêutrons e outras partículas que pertencem ao grupo dos hádrons.

              <br></br><br></br>

              Eles permanecem confinados dentro dessas partículas e participam das interações
              fundamentais que mantêm sua estrutura. Os quarks possuem diferentes propriedades,
              incluindo <span>carga elétrica, sabor e cor</span>, sendo que esses termos não
              correspondem literalmente às características percebidas pelos sentidos humanos.

              <br></br><br></br>

              Em relação à carga elétrica, os quarks apresentam valores fracionários:
              <span> -1/3 ou +2/3</span> da carga elétrica fundamental.

              <br></br><br></br>

              Existem seis tipos, chamados de <span>up, down, strange, charm, top e bottom</span>.
              Essas classificações são conhecidas como sabores dos quarks.

              <br></br><br></br>

              Um próton é formado por <span>dois quarks up e um quark down</span>, enquanto
              um nêutron é constituído por <span>dois quarks down e um quark up</span>.

              <br></br><br></br>

              Além disso, os quarks possuem três estados de cor, chamados de
              <span> vermelho, verde e azul</span>. Essas cores estão relacionadas à interação
              forte, responsável por manter os quarks unidos.
            </p>

            <Image
              src="/quark.jpg"
              width={600}
              height={300}
              alt="Representação dos quarks"
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Férmions</h2>

            <p className={styles.pinfo}>
              Os férmions podem ser considerados os <span>constituintes fundamentais da matéria</span>.
              Eles possuem uma propriedade quântica chamada spin, cujo valor é semi-inteiro,
              como 1/2.
              <br></br><br></br>
              Essas partículas obedecem ao <span>Princípio de Exclusão de Pauli</span>, segundo
              o qual dois férmions idênticos não podem ocupar simultaneamente o mesmo estado
              quântico.
              <br></br><br></br>
              Os férmions fundamentais são divididos principalmente em <span>quarks e léptons</span>.
              Os quarks formam partículas compostas, como prótons e nêutrons, enquanto os léptons
              incluem partículas como elétrons, múons, taúons e neutrinos.
              <br></br><br></br>
              Os quarks possuem seis sabores: <span>up, down, charm, strange, top e bottom</span>.
              Suas cargas elétricas são fracionárias, podendo ser +2/3 ou -1/3 da carga elementar.
              <br></br><br></br>
              Os neutrinos possuem <span>carga elétrica nula</span> e massas extremamente pequenas.
              Existem três tipos principais: neutrino eletrônico, neutrino muônico e neutrino tauônico.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Bósons</h2>

            <p className={styles.pinfo}>
              Os bósons são partículas que participam da <span>mediação das interações
                fundamentais</span> entre outras partículas. Diferentemente dos férmions,
              eles possuem spin inteiro e não obedecem ao Princípio de Exclusão de Pauli.

              <br></br><br></br>

              Entre os principais bósons estão os <span>fótons, glúons, bósons W e Z e o
                bóson de Higgs</span>. Cada um está associado a diferentes fenômenos e
              interações fundamentais.

              <br></br><br></br>

              Os fótons estão relacionados à <span>interação eletromagnética</span>. Por
              não possuírem carga elétrica, os feixes de luz podem atravessar outros feixes
              sem ocorrer uma colisão entre fótons em condições comuns.

              <br></br><br></br>

              Os glúons estão associados à <span>interação forte</span>, mantendo os quarks
              unidos dentro de partículas como prótons e nêutrons.

              <br></br><br></br>

              Os bósons W e Z participam da <span>interação fraca</span>, importante em
              processos como certos tipos de decaimento radioativo.

              <br></br><br></br>

              O bóson de Higgs está relacionado ao <span>campo de Higgs</span>, mecanismo
              responsável por conferir massa às partículas elementares que interagem com esse campo.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fóton</h2>

            <p className={styles.pinfo}>
              Os fótons são as <span>partículas elementares associadas à luz e à radiação
                eletromagnética</span>.

              <br></br><br></br>

              Eles não possuem massa de repouso e apresentam energia determinada pela
              frequência da radiação, podendo ser representada pela equação
              <span> E = h ⋅ f</span>.

              <br></br><br></br>

              Os fótons podem ser produzidos em diversos fenômenos, como nas reações de
              <span> fusão nuclear no interior das estrelas</span>, além de serem emitidos
              por materiais aquecidos ou por dispositivos submetidos a correntes elétricas.

              <br></br><br></br>

              Assim como outras entidades quânticas, os fótons apresentam
              <span> dualidade onda-partícula</span>, podendo apresentar características
              associadas tanto a ondas quanto a partículas.

              <br></br><br></br>

              O espectro eletromagnético inclui diferentes tipos de radiação, como
              <span> ondas de rádio, micro-ondas, infravermelho, luz visível, ultravioleta,
                raios X e raios gama</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Glúon</h2>

            <p className={styles.pinfo}>
              O glúon é uma <span>partícula subatômica fundamental</span> associada à
              interação forte. Ele atua como mediador da força que mantém os quarks unidos,
              permitindo a formação de partículas compostas, como prótons e nêutrons.
            </p>

            <Image
              src="/moleculaAquark.png"
              width={500}
              height={600}
              alt="Representação da interação entre quarks"
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Modelos atômicos</h2>

            <p className={styles.pinfo}>
              <span>Modelo Atômico de Dalton</span>

              <br></br><br></br>

              Conhecido como <span>modelo da bola de bilhar</span>, foi uma das primeiras
              tentativas científicas de explicar a estrutura da matéria. Dalton considerava
              que toda matéria era formada por pequenas partículas chamadas átomos.

              <br></br><br></br>

              De acordo com sua proposta, átomos de um mesmo elemento possuíam características
              semelhantes, enquanto átomos de elementos diferentes apresentavam propriedades
              distintas. Os átomos também não seriam destruídos ou criados durante uma reação
              química, apenas reorganizados.

              <br></br><br></br>
            </p>

            <Image
              src="/dalton.jpg"
              width={500}
              height={500}
              alt="Modelo atômico de Dalton"
              className={styles.imgRep2}
            />

            <p className={styles.pinfo}>
              <span>Modelo Atômico de Thomson</span>

              <br></br><br></br>

              O modelo de Thomson representou uma mudança importante ao demonstrar que
              o átomo não era indivisível. A partir de seus estudos com <span>raios catódicos</span>,
              Thomson identificou o elétron.

              <br></br><br></br>

              Seu modelo ficou conhecido como <span>modelo do pudim de ameixa</span>.
              Nele, o átomo seria composto por uma região de carga positiva na qual os
              elétrons estariam distribuídos.

              <br></br><br></br>

              Thomson também concluiu que os elétrons faziam parte de diferentes tipos de
              matéria, contribuindo para o desenvolvimento da ideia de que o átomo possuía
              uma estrutura interna.

              <br></br><br></br>
            </p>

            <Image
              src="/modeloThomson.webp"
              width={500}
              height={500}
              alt="Modelo atômico de Thomson"
              className={styles.imgRep2}
            />

            <p className={styles.pinfo}>
              <span>Modelo Atômico de Ernest Rutherford</span>

              <br></br><br></br>

              Em 1911, Rutherford realizou o famoso experimento da <span>lâmina de ouro</span>,
              utilizando partículas alfa para investigar a estrutura interna dos átomos.

              <br></br><br></br>

              A maioria das partículas atravessava a lâmina praticamente sem sofrer alterações,
              enquanto algumas sofriam desvios e uma pequena quantidade era refletida.

              <br></br><br></br>

              A partir desses resultados, Rutherford concluiu que o átomo era formado
              principalmente por <span>espaço vazio</span>, possuindo uma região central
              extremamente pequena, densa e positiva, denominada núcleo.

              <br></br><br></br>

              Seu modelo ficou conhecido como <span>modelo planetário</span>, pois os elétrons
              eram representados como partículas que se movimentavam ao redor do núcleo.
            </p>

            <Image
              src="/rutherford.webp"
              width={500}
              height={500}
              alt="Modelo atômico de Rutherford"
              className={styles.imgRep2}
            />

            <p className={styles.pinfo}>
              <span>Modelo Atômico de Niels Bohr</span>

              <br></br><br></br>

              Bohr aperfeiçoou o modelo de Rutherford ao propor que os elétrons não poderiam
              ocupar qualquer posição ao redor do núcleo. Eles estariam distribuídos em
              <span> níveis de energia específicos</span>.

              <br></br><br></br>

              O átomo possui uma grande quantidade de espaço vazio, enquanto seu núcleo
              apresenta dimensões muito menores em comparação com o tamanho total do átomo.

              <br></br><br></br>

              Quando um elétron recebe energia, pode passar para um nível energético mais alto.
              Ao retornar para um nível de menor energia, ocorre a <span>emissão de energia
                na forma de radiação eletromagnética</span>.

              <br></br><br></br>

              Esse modelo conseguiu explicar determinados espectros de emissão e contribuiu
              para o desenvolvimento da compreensão quântica do átomo.
            </p>

            <Image
              src="/bohr.webp"
              width={500}
              height={400}
              alt="Modelo atômico de Bohr"
              className={styles.imgRep2}
            />

            <p className={styles.pinfo}>
              <span>Modelo Atômico de Schrödinger</span>

              <br></br><br></br>

              O modelo desenvolvido a partir da mecânica quântica é o modelo atualmente
              utilizado para descrever o comportamento dos elétrons.

              <br></br><br></br>

              Schrödinger propôs que não seria possível determinar simultaneamente a posição
              exata e o movimento de um elétron. Em vez disso, podemos determinar regiões
              onde existe maior probabilidade de encontrá-lo, chamadas de
              <span> orbitais atômicos</span>.

              <br></br><br></br>

              Essas regiões são descritas por funções matemáticas associadas ao comportamento
              ondulatório dos elétrons.

              <br></br><br></br>

              O princípio da incerteza de Heisenberg também contribuiu para essa compreensão,
              estabelecendo que não é possível conhecer simultaneamente com precisão absoluta
              a posição e o momento de uma partícula.

              <br></br><br></br>

              Dessa maneira, o modelo moderno representa os elétrons como uma espécie de
              <span> nuvem eletrônica</span>, indicando regiões de maior probabilidade de
              encontrá-los.
            </p>

            <Image
              src="/erwin.webp"
              width={500}
              height={400}
              alt="Erwin Schrödinger"
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Massa</h2>

            <p className={styles.pinfo}>
              A massa atômica representa a <span>massa de um átomo</span> e normalmente é
              expressa em unidade de massa atômica (u).
              <br></br><br></br>
              Esse conceito também está relacionado à estequiometria e aos cálculos
              envolvendo quantidades de matéria. Mais detalhes podem ser encontrados em
              <Link href="estequi" className={styles.link}> Estequiometria</Link>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Número atômico</h2>

            <p className={styles.pinfo}>
              O número atômico é representado pela letra <span>Z</span> e corresponde
              à quantidade de prótons presentes no núcleo de um átomo.
              <br></br><br></br>
              Como cada elemento químico possui uma quantidade específica de prótons,
              o número atômico funciona como uma forma de <span>identificação do elemento</span>.
              Assim, elementos diferentes não apresentam o mesmo número atômico.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Como calcular prótons, nêutrons, elétrons e número atômico</h2>

            <p className={styles.pinfo}>
              A partir de algumas informações sobre um átomo ou íon, é possível determinar
              a quantidade de prótons, nêutrons e elétrons presentes nele.
              <span> Prótons e nêutrons ficam no núcleo</span>, enquanto os elétrons
              estão distribuídos na eletrosfera.
            </p>

            <p className={styles.pinfo}>
              <br></br>
              <span>Número atômico (Z)</span>
              <br />
              O número atômico indica quantos prótons existem no núcleo. Em um átomo neutro,
              a quantidade de prótons também corresponde à quantidade de elétrons.
              <br /><br />
              <span>Z = p = e</span>
            </p>

            <p className={styles.pinfo}>
              <br></br>
              <span>Número de massa (A)</span>
              <br />
              O número de massa é obtido pela soma dos prótons e nêutrons presentes no núcleo.
              <br /><br />
              <span>A = p + n</span>
              <br /><br />
              Como o número de prótons é igual ao número atômico:
              <br /><br />
              <span>A = Z + n</span>
              <br /><br />
              Para encontrar a quantidade de nêutrons:
              <br /><br />
              <span>n = A − Z</span>
            </p>

            <p className={styles.pinfo}>
              <br></br>
              <span>Íons</span>
              <br />
              Quando um átomo perde ou recebe elétrons, ele passa a possuir uma carga elétrica.
              Essa carga aparece no canto superior direito do símbolo químico.
              <br /><br />
              <span>X⁺</span> indica um íon positivo e
              <span> X⁻</span> indica um íon negativo.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligações</h2>

            <p className={styles.pinfo}>
              O termo <span>ligação química</span> foi utilizado por Gilbert Newton Lewis
              em 1920 para explicar como os átomos conseguem permanecer unidos e formar
              diferentes substâncias.
              <br></br><br></br>
              A maioria dos elementos químicos não é encontrada de maneira isolada na natureza.
              Os materiais podem ser constituídos por substâncias simples, formadas por átomos
              de um único elemento, ou por substâncias compostas, que apresentam átomos de
              diferentes elementos.
              <br></br><br></br>
              Isso acontece porque os átomos podem estabelecer <span>ligações químicas</span>
              entre si, seja com átomos do mesmo elemento ou com elementos diferentes.
              <br></br><br></br>
              A Regra do Octeto estabelece que muitos átomos tendem a alcançar uma configuração
              mais estável, geralmente associada à presença de <span>oito elétrons na camada
                de valência</span>, semelhante à configuração dos gases nobres.
            </p>

            <br></br>

            <div className={styles.quoteDiv}>
              <p>
                <Image
                  src='/quote-left-svgrepo-com.svg'
                  width={20}
                  height={20}
                  alt="Aspas"
                  className={styles.quote}
                />
                Em uma ligação química, muitos átomos tendem a alcançar uma configuração
                eletrônica mais estável, semelhante à de um gás nobre.
                <Image
                  src='/quote-right-svgrepo-com.svg'
                  width={20}
                  height={20}
                  alt="Aspas"
                  className={styles.quote}
                />
              </p>
            </div>
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligações iônicas</h2>

            <p className={styles.pinfo}>
              Na ligação iônica, ao contrário da ligação covalente, ocorre
              <span> transferência de elétrons</span> entre os átomos envolvidos.

              <br></br><br></br>

              Esse processo provoca a formação de <span>cátions e ânions</span>. Os cátions
              apresentam carga positiva porque perderam elétrons, enquanto os ânions possuem
              carga negativa porque receberam elétrons.

              <br></br><br></br>

              A atração eletrostática entre esses íons mantém a estrutura do composto,
              formando uma <span>ligação iônica</span>. Esse tipo de ligação está relacionado
              principalmente à diferença significativa de eletronegatividade entre os elementos.

              <br></br><br></br>

              <span>Exemplo:</span>

              <br></br><br></br>
            </p>

            <Image
              src='/ion.png'
              width={350}
              height={500}
              alt="Representação de uma ligação iônica"
              className={styles.quote}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligações covalentes</h2>

            <p className={styles.pinfo}>
              As ligações covalentes acontecem quando dois ou mais átomos
              <span> compartilham elétrons</span>. Dependendo da diferença de eletronegatividade
              entre os átomos, podem surgir polos parciais, representados por δ- e δ+.

              <br></br><br></br>

              A <span>eletronegatividade</span> corresponde à capacidade que um átomo possui
              de atrair para si os elétrons envolvidos em uma ligação. Assim como um ímã,
              um átomo mais eletronegativo exerce uma atração maior sobre os elétrons
              compartilhados.

              <br></br><br></br>

              A distribuição desses elétrons influencia a forma como os átomos ficam
              organizados no espaço, contribuindo para a <span>geometria molecular </span>
              das substâncias.

              <br></br><br></br>

              <span>Ligações covalentes simples, duplas e triplas</span>

              <br></br><br></br>

              Uma ligação covalente pode envolver diferentes quantidades de pares de elétrons.
              Quando apenas um par é compartilhado, temos uma <span>ligação simples</span>.
              Quando dois pares são compartilhados, ocorre uma <span>ligação dupla</span>.
              Já o compartilhamento de três pares caracteriza uma <span>ligação tripla</span>.
            </p>

            <Image
              src="/ligaCova.webp"
              width={600}
              height={400}
              alt="Representação de uma ligação covalente"
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Ligações metálicas</h2>

            <p className={styles.pinfo}>
              Os metais estão distribuídos por diferentes regiões da Tabela Periódica.
              Entre eles estão os elementos da <span>Família IA, chamados metais alcalinos</span>,
              como lítio e sódio, e os da <span>Família IIA, os metais alcalino-terrosos</span>,
              como berílio e magnésio.

              <br></br><br></br>

              Também fazem parte desse grupo os <span>metais de transição</span>, localizados
              no bloco d, entre os grupos 3 e 12. Ouro, prata, cromo, ferro, manganês,
              níquel, cobre, zinco e platina são alguns exemplos.

              <br></br><br></br>

              Entre os metais representativos podemos citar <span>alumínio, gálio, índio,
                estanho, tálio, chumbo e bismuto</span>.

              <br></br><br></br>

              Em condições ambientes, a maioria dos metais encontra-se no
              <span> estado sólido</span>. A principal exceção é o mercúrio, que permanece
              líquido nessas condições.

              <br></br><br></br>

              Os metais apresentam características como <span>brilho, boa condutividade
                elétrica e térmica, densidade relativamente elevada e altos pontos de fusão
                e ebulição</span>. Também são conhecidos pela maleabilidade e ductilidade.

              <br></br><br></br>

              <span>Teoria da nuvem eletrônica</span>

              <br></br><br></br>

              A ligação metálica pode ser explicada pela chamada <span>Teoria do Mar de
                Elétrons</span>. Segundo esse modelo, os elétrons mais externos dos átomos
              metálicos possuem maior liberdade de movimento.

              <br></br><br></br>

              Em vez de permanecerem presos a um único átomo, esses elétrons podem se
              deslocar pelo material, formando uma <span>nuvem de elétrons livres</span>.

              <br></br><br></br>

              Os átomos metálicos podem ser representados como cátions organizados em um
              <span> retículo cristalino</span>, cercados por essa nuvem eletrônica.
              A atração entre os cátions e os elétrons mantém a estrutura metálica unida.

              <br></br><br></br>

              Esse modelo ajuda a compreender propriedades como a
              <span> condutividade, maleabilidade e ductilidade</span> dos metais.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Cristalização</h2>

            <p className={styles.pinfo}>
              A cristalização é um <span>processo físico-químico</span> no qual átomos,
              moléculas ou íons que estavam desorganizados passam a se organizar em
              estruturas cristalinas regulares.

              <br></br><br></br>

              Como resultado, são formados cristais que apresentam
              <span> organização interna e formas geométricas características</span>.

              <br></br><br></br>

              Esse processo pode ocorrer quando uma solução saturada é resfriada ou quando
              ocorre a <span>evaporação do solvente</span>. A cristalização pode acontecer
              naturalmente, como na formação de minerais, ou ser controlada em laboratórios
              e indústrias para obter substâncias mais puras.

              <br></br><br></br>

              Um exemplo cotidiano são as <span>salinas</span>. Nelas, a água do mar sofre
              evaporação e o sal dissolvido permanece, formando cristais que podem ser
              posteriormente recolhidos.

              <br></br><br></br>

              <span>Como funciona a cristalização?</span>

              <br></br><br></br>

              O processo pode ser compreendido a partir de três etapas principais:

              <br></br><br></br>

              <span>1. Saturação</span>

              <br></br><br></br>

              Uma solução atinge a saturação quando alcança a quantidade máxima de soluto
              que consegue dissolver em determinadas condições.

              <br></br><br></br>

              Alterações como evaporação ou resfriamento podem levar a solução à
              <span> supersaturação</span>, situação que favorece o surgimento dos cristais.

              <br></br><br></br>

              <span>2. Nucleação</span>

              <br></br><br></br>

              Durante a nucleação, pequenas partículas ou agrupamentos de moléculas começam
              a se organizar, formando <span>núcleos cristalinos</span>.

              <br></br><br></br>

              A nucleação pode ser primária, quando ocorre espontaneamente, ou secundária,
              quando é favorecida pela presença de partículas ou impurezas. Por exemplo,
              partículas de areia podem servir como pontos iniciais para a formação de
              cristais de sal.

              <br></br><br></br>

              <span>3. Crescimento do cristal</span>

              <br></br><br></br>

              Depois da formação dos núcleos, novas partículas de soluto se depositam sobre
              eles, fazendo com que os cristais aumentem de tamanho.

              <br></br><br></br>

              O tamanho, formato e pureza dos cristais podem ser influenciados por fatores
              como <span>temperatura, velocidade de supersaturação e presença de impurezas</span>.

              <br></br><br></br>

              O quartzo é um exemplo de cristal cuja formação pode depender de condições
              específicas de <span>temperatura e pressão</span> para produzir estruturas
              grandes e bem definidas.
            </p>

            <Image
              src="/cristalizacao.jpg"
              width={600}
              height={400}
              alt="Processo de cristalização"
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Geometria molecular</h2>

            <p className={styles.pinfo}>
              A geometria molecular descreve a <span>forma como os átomos de uma molécula
                estão organizados no espaço</span>, levando em consideração principalmente
              as posições dos núcleos dos átomos.

              <br></br><br></br>

              As moléculas são formadas por átomos unidos por ligações químicas, especialmente
              ligações covalentes. A distribuição dos átomos e dos pares de elétrons ao redor
              do átomo central influencia diretamente o formato da molécula.

              <br></br><br></br>

              Entre as principais geometrias moleculares estão:

              <br></br><br></br>

              <span>Geometria linear;</span>
              <br></br>
              <span>Geometria angular;</span>
              <br></br>
              <span>Geometria trigonal plana;</span>
              <br></br>
              <span>Geometria piramidal;</span>
              <br></br>
              <span>Geometria tetraédrica;</span>
              <br></br>
              <span>Geometria bipiramidal;</span>
              <br></br>
              <span>Geometria octaédrica.</span>

              <br></br><br></br>

              A forma da molécula influencia diversas propriedades químicas, incluindo sua
              <span> polaridade e a maneira como ela interage com outras moléculas</span>.
            </p>

            <Image
              src="/geoMole.webp"
              width={600}
              height={400}
              alt="Principais geometrias moleculares"
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Polaridade</h2>

            <p className={styles.pinfo}>
              As moléculas podem ser classificadas, de acordo com sua polaridade, como
              <span> polares ou apolares</span>.

              <br></br><br></br>

              Uma molécula é polar quando apresenta uma distribuição desigual de cargas,
              resultando em um momento dipolar diferente de zero. Já uma molécula apolar
              possui distribuição de cargas que faz com que o <span>momento dipolar
                resultante seja igual a zero</span>.

              <br></br><br></br>

              Uma forma de analisar a polaridade é observar os <span>vetores das ligações
                polares</span>. A soma desses vetores determina o momento dipolar resultante
              da molécula.

              <br></br><br></br>

              Dois fatores são especialmente importantes para determinar a polaridade:
              <span> a eletronegatividade dos átomos e a geometria molecular</span>.

              <br></br><br></br>

              A eletronegatividade indica a capacidade de um átomo de
              <span> atrair os elétrons compartilhados</span> em uma ligação covalente.

              <br></br><br></br>

              <span>Exemplo: HCl</span>

              <br></br><br></br>

              Na molécula de HCl, o hidrogênio possui eletronegatividade aproximada de 2,20,
              enquanto o cloro apresenta valor próximo de 3,16.

              <br></br><br></br>

              Como o cloro possui maior eletronegatividade, ele atrai com mais intensidade
              os elétrons compartilhados na ligação. Isso produz uma
              <span> distribuição desigual de cargas</span>.

              <br></br><br></br>

              Dessa maneira, o cloro adquire uma carga parcial negativa (δ-) e o hidrogênio
              uma carga parcial positiva (δ+). Por esse motivo, o HCl é uma
              <span> molécula polar</span>.

              <br></br><br></br>

              O mesmo princípio pode ser observado em outras moléculas diatômicas formadas
              por elementos diferentes, como <span>HF, HBr e HI</span>.
            </p>

            <Image
              src="/polaridade.png"
              width={600}
              height={400}
              alt="Representação da polaridade molecular"
              className={styles.imgRep2}
            />
          </div>

          <div className={styles.infoConfig}>
            <h2>Forças intermoleculares</h2>

            <p className={styles.pinfo}>
              As forças intermoleculares são <span>atrações que ocorrem entre moléculas</span>.
              Essas interações influenciam características das substâncias, como seus estados
              físicos e os pontos de fusão e ebulição.

              <br></br><br></br>

              De maneira geral, podemos destacar três tipos principais de interações:

              <br></br><br></br>

              <span>Ligação de hidrogênio:</span> apresenta forte intensidade.

              <br></br>

              <span>Dipolo-dipolo:</span> possui intensidade intermediária.

              <br></br>

              <span>Dipolo induzido ou forças de London:</span> geralmente apresenta menor
              intensidade entre as três.

              <br></br><br></br>

              Essas interações são frequentemente relacionadas ao conjunto de
              <span> forças de Van der Waals</span>, embora a terminologia possa variar
              conforme a classificação utilizada.
            </p>

            <br></br><br></br>

            <h3>Ligação de Hidrogênio</h3>

            <p className={styles.pinfo}>
              A ligação de hidrogênio ocorre entre moléculas polares nas quais o hidrogênio
              está ligado diretamente a um átomo pequeno e bastante eletronegativo,
              principalmente <span>flúor, oxigênio ou nitrogênio</span>.

              <br></br><br></br>

              Essa interação apresenta intensidade elevada devido à grande diferença de
              eletronegatividade entre o hidrogênio e esses elementos.

              <br></br><br></br>

              A água é um exemplo importante. Nas moléculas de <span>H₂O</span>, as ligações
              de hidrogênio estão constantemente sendo formadas e rompidas no estado líquido.
              No gelo, as moléculas ficam organizadas em uma estrutura tridimensional mais
              ordenada.
            </p>

            <Image
              src="/ligHi.png"
              width={600}
              height={400}
              alt="Representação de ligação de hidrogênio"
              className={styles.imgRep2}
            />

            <br></br><br></br>

            <h3>Dipolo-dipolo</h3>

            <p className={styles.pinfo}>
              A interação dipolo-dipolo acontece entre <span>moléculas polares</span>.
              Como a distribuição dos elétrons não é uniforme, essas moléculas possuem
              regiões parcialmente positivas e negativas.

              <br></br><br></br>

              Ao se aproximarem, as moléculas tendem a se posicionar de modo que
              <span> regiões de cargas opostas se atraiam</span>.

              <br></br><br></br>

              No caso do HCl, por exemplo, a região parcialmente negativa próxima ao
              cloro de uma molécula pode atrair a região parcialmente positiva próxima
              ao hidrogênio de outra molécula.
            </p>

            <Image
              src="/ligDiDi.png"
              width={600}
              height={400}
              alt="Representação da interação dipolo-dipolo"
              className={styles.imgRep2}
            />

            <br></br><br></br>

            <h3>Dipolo induzido</h3>

            <p className={styles.pinfo}>
              O dipolo induzido, também conhecido como <span>força de London</span>,
              pode ocorrer em todas as moléculas e representa a principal interação
              intermolecular entre substâncias apolares.

              <br></br><br></br>

              Mesmo em uma molécula apolar, os elétrons estão em movimento constante.
              Em determinado instante, essa movimentação pode provocar uma
              <span> distribuição momentaneamente desigual dos elétrons</span>, criando
              uma região parcialmente negativa e outra parcialmente positiva.

              <br></br><br></br>

              Esse dipolo temporário pode provocar uma alteração semelhante na distribuição
              eletrônica de uma molécula próxima, gerando uma nova atração entre elas.

              <br></br><br></br>

              Um exemplo pode ser observado nas moléculas de <span>Cl₂</span>. Quando
              estão próximas, pequenas variações momentâneas na distribuição dos elétrons
              podem produzir dipolos temporários e gerar atração intermolecular.
            </p>

            <Image
              src="/ligDiIn.png"
              width={600}
              height={400}
              alt="Representação de dipolo induzido"
              className={styles.imgRep2}
            />
          </div>

        </div>

      </main>

    </div>
  );
}