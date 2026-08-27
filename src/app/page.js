import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/header";

export default function Home() {
  return (
    <div className={styles.page}>

      <Header />

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

          <div className={styles.title}>
            <h3>Átomo</h3>
            <h2>Estrutura e composição da matéria</h2>
          </div>

          <div className={styles.infoConfig}>
            <h2>Prótons</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer vitae justo nec neque tincidunt facilisis. Praesent
                ullamcorper, sapien non consequat tincidunt, nisl lorem
                vestibulum ipsum, vitae fermentum erat magna sed neque.</span>
            </p>

            <h2>Elétrons</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec vitae libero sed augue tincidunt consequat. Curabitur
                tincidunt, sapien vel consequat malesuada, lorem lacus
                vestibulum erat, at tincidunt magna ipsum vitae nisl.</span>
            </p>

            <h2>Nêutrons</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Sed vitae augue nec libero consequat
                interdum.</span>
            </p>
            <h2>Íons</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer vitae justo nec neque tincidunt facilisis. Praesent
                ullamcorper, sapien non consequat tincidunt, nisl lorem
                vestibulum ipsum, vitae fermentum erat magna sed neque.
              </span>
            </p>

            <h2>Cátions</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec vitae libero sed augue tincidunt consequat. Curabitur
                tincidunt, sapien vel consequat malesuada, lorem lacus
                vestibulum erat, at tincidunt magna ipsum vitae nisl.
              </span>
            </p>

            <h2>Ânions</h2>
            <p className={styles.pinfo}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Sed vitae augue nec libero consequat
                interdum.
              </span>
            </p>
            <h2>Quarks</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse potenti. Aliquam erat volutpat. Nam vitae purus
                interdum, elementum justo vitae, malesuada libero.</span>
            </p>

            <h2>Bósons</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus consequat, neque sed tincidunt faucibus, sapien ipsum
                fermentum lorem, vitae malesuada erat velit non nisl.</span>
            </p>

            <h2>Fóton</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque consectetur sapien vitae magna volutpat, sed tincidunt
                justo faucibus. Integer consequat neque vitae nisl tincidunt.</span>
            </p>

            <h2>Glúon</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean malesuada ipsum vitae libero tincidunt, at tincidunt
                mauris faucibus. Donec euismod ligula sit amet lorem.</span>
            </p>

            <h2>Bósons W e Z</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi tincidunt, lorem vel malesuada tincidunt, justo lacus
                facilisis erat, vitae aliquet neque libero non urna.</span>
            </p>

            <h2>Bóson de Higgs</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.</span>
            </p>

            <h2>Massa</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nam suscipit, ligula vitae tincidunt commodo, libero neque
                consequat nunc, vitae feugiat sapien ipsum vel justo.</span>
            </p>

            <h2>Número atômico</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam erat volutpat. Sed tincidunt lacus sed felis consequat,
                vel posuere sapien elementum.</span>
            </p>

            <h2>Como calcular prótons, nêutrons, elétrons e número atômico</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras posuere, sapien vitae commodo tincidunt, erat neque
                consectetur lorem, eget facilisis ipsum nisl vitae justo.</span>
            </p>

            <h2>Ligações</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec faucibus, sapien vitae pulvinar malesuada, libero justo
                consequat augue, vitae fermentum sapien neque vitae nisl.</span>
            </p>

            <h2>Ligações iônicas</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum feugiat, sapien vel tincidunt consequat, massa
                sapien tincidunt lorem, vitae interdum purus augue nec justo.</span>
            </p>

            <h2>Ligações covalentes</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer facilisis ipsum sed ligula consequat, vitae tincidunt
                neque pellentesque. Suspendisse potenti.</span>
            </p>

            <h2>Ligações metálicas</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vitae ipsum at libero tincidunt consequat. Sed
                ullamcorper, augue vitae commodo malesuada, lacus erat.</span>
            </p>

            <h2>Cristalização</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vitae neque id libero faucibus consequat. Donec
                elementum, sapien sed tincidunt malesuada, justo nisl.</span>
            </p>

            <h2>Extra: Spin</h2>
            <p className={styles.pinfo}>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce tincidunt sapien vitae magna malesuada, quis tincidunt
                justo elementum. Integer vitae libero nec lorem facilisis.</span>
            </p>
          </div>

        </div>
        <div className={styles.tituloSecao}>
          <h3>Nomenclatura IUPAC</h3>
          <p>Tabela</p>
        </div>


        <div className={styles.tabelas}>

          <table>
            <thead>
              <tr>
                <th>Prefixo</th>
                <th>Número de carbonos</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>met</td><td>1</td></tr>
              <tr><td>et</td><td>2</td></tr>
              <tr><td>prop</td><td>3</td></tr>
              <tr><td>but</td><td>4</td></tr>
              <tr><td>pent</td><td>5</td></tr>
              <tr><td>hex</td><td>6</td></tr>
              <tr><td>hept</td><td>7</td></tr>
              <tr><td>oct</td><td>8</td></tr>
              <tr><td>non</td><td>9</td></tr>
              <tr><td>dec</td><td>10</td></tr>
              <tr><td>undec</td><td>11</td></tr>
              <tr><td>dodec</td><td>12</td></tr>
            </tbody>
          </table>


          <table>
            <thead>
              <tr>
                <th>Infixo</th>
                <th>Ligação</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>an</td><td>Ligação simples</td></tr>
              <tr><td>en</td><td>Ligação dupla</td></tr>
              <tr><td>in</td><td>Ligação tripla</td></tr>
              <tr><td>dien</td><td>Duas ligações duplas</td></tr>
              <tr><td>diin</td><td>Duas ligações triplas</td></tr>
              <tr><td>trien</td><td>Três ligações duplas</td></tr>
              <tr><td>triin</td><td>Três ligações triplas</td></tr>
              <tr><td>enin</td><td>Uma ligação dupla e uma tripla</td></tr>
            </tbody>
          </table>


          <table>
            <thead>
              <tr>
                <th>Sufixo</th>
                <th>Função</th>
              </tr>
            </thead>

            <tbody>
              <tr><td>o</td><td>Hidrocarbonetos</td></tr>
              <tr><td>ol</td><td>Álcool</td></tr>
              <tr><td>al</td><td>Aldeído</td></tr>
              <tr><td>ona</td><td>Cetona</td></tr>
              <tr><td>óico</td><td>Ácido carboxílico</td></tr>
              <tr>
                <td>Éster</td>
                <td>[Nome do ácido]+oato de [nome do radical]+a</td>
              </tr>
              <tr><td>Amina</td><td>Amina</td></tr>
              <tr><td>Amida</td><td>Amida</td></tr>
              <tr><td>Ácido sulfônico</td><td>Sulfônico</td></tr>
              <tr>
                <td>Éter</td>
                <td>
                  Oficial: [Menor radical]+óxi+
                  [Hidrocarboneto correspondente ao maior radical].
                  Usual: Éter + nome dos radicais em ordem alfabética
                  terminados em -ico.
                </td>
              </tr>
            </tbody>
          </table>

        </div>

      </main>

    </div>
  );
}