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
              elétrons, conforme representação pela equação abaixo:</p>

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
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Sed vitae augue nec libero consequat
                interdum.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Quarks</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse potenti. Aliquam erat volutpat. Nam vitae purus
                interdum, elementum justo vitae, malesuada libero.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Bósons</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus consequat, neque sed tincidunt faucibus, sapien ipsum
                fermentum lorem, vitae malesuada erat velit non nisl.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Fóton</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque consectetur sapien vitae magna volutpat, sed tincidunt
                justo faucibus. Integer consequat neque vitae nisl tincidunt.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Glúon</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean malesuada ipsum vitae libero tincidunt, at tincidunt
                mauris faucibus. Donec euismod ligula sit amet lorem.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Bósons W e Z</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi tincidunt, lorem vel malesuada tincidunt, justo lacus
                facilisis erat, vitae aliquet neque libero non urna.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Bóson de Higgs</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </span>
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Modelos atômicos</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </span>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </span>
            </p>
          </div>
          

        </div>

      </main>

    </div>
  );
}