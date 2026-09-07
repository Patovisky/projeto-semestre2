'use client'

import Image from "next/image";
import styles from "./page.module.css";

export default function Fisico() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>


        <div className={styles.all}>

          <div className={styles.title}>
            <h3>Físico-Química</h3>

            <h2>
              A <span>Físico-Química</span> é a área da Química que utiliza
              princípios e leis da Física para explicar os processos químicos,
              buscando compreender o comportamento da matéria em
              <span> nível atômico e molecular</span>.
            </h2>

            <h2>
              Essa área combina conhecimentos de <span>Química, Física e
              Matemática</span> para estudar as propriedades das substâncias
              e os fenômenos envolvidos nas transformações químicas.
            </h2>

            <h2>
              A Físico-Química envolve diferentes campos de estudo, como
              <span> Termoquímica, Cinética Química, Equilíbrio Químico,
              Eletroquímica, Radioatividade e Soluções</span>.
            </h2>

            <h2>
              Seu estudo permite compreender quantitativamente como a matéria
              se comporta e como ocorrem as <span>transformações químicas</span>,
              relacionando propriedades microscópicas com fenômenos observáveis.
            </h2>
          </div>

          <div className={styles.infoConfig}>
            <h2>Termoquímica</h2>

            <p className={styles.pinfo}>
              A <span>Termoquímica</span> é o ramo da Físico-Química que
              estuda as transferências de energia na forma de
              <span> calor</span> envolvidas nas transformações químicas,
              utilizando princípios da Termodinâmica.
            </p>

            <h2>Entalpia</h2>

            <p className={styles.pinfo}>
              A <span>entalpia (H)</span> é uma grandeza utilizada para
              analisar a energia envolvida em processos químicos. Em
              condições de <span>pressão constante</span>, a variação de
              entalpia corresponde numericamente ao calor trocado pelo sistema.
            </p>

            <p className={styles.pinfo}>
              A variação de entalpia é representada por
              <span> ΔH = Hprodutos − Hreagentes</span>.
            </p>

            <h2>Processos Endotérmicos</h2>

            <p className={styles.pinfo}>
              Em uma reação <span>endotérmica</span>, o sistema absorve calor
              do ambiente. Por isso, a variação de entalpia é
              <span> positiva (ΔH &gt; 0)</span>. Um exemplo é a fotossíntese,
              que necessita de energia para ocorrer.
            </p>

            <h2>Processos Exotérmicos</h2>

            <p className={styles.pinfo}>
              Em uma reação <span>exotérmica</span>, ocorre liberação de calor
              para o ambiente. Nesse caso, a variação de entalpia é
              <span> negativa (ΔH &lt; 0)</span>. A combustão de combustíveis
              é um exemplo desse tipo de processo.
            </p>

            <h2>Equações Termoquímicas</h2>

            <p className={styles.pinfo}>
              As <span>equações termoquímicas</span> representam as reações
              químicas acompanhadas dos valores de energia ou de variação
              de entalpia envolvidos no processo.
            </p>

            <h2>Lei de Hess</h2>

            <p className={styles.pinfo}>
              A <span>Lei de Hess</span> estabelece que a variação de entalpia
              total de uma reação é igual à soma das variações de entalpia
              das etapas que a compõem.
            </p>

            <p className={styles.pinfo}>
              Quando uma reação é invertida, o sinal de <span>ΔH</span> também
              é invertido. Quando uma equação é multiplicada por determinado
              fator, sua variação de entalpia é multiplicada pelo mesmo fator.
            </p>

            <h2>Aplicações</h2>

            <p className={styles.pinfo}>
              A Termoquímica possui aplicações no estudo de
              <span> combustíveis, produção de energia e calorimetria</span>,
              incluindo a análise energética dos alimentos.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Cinética Química</h2>

            <p className={styles.pinfo}>
              A <span>Cinética Química</span> estuda a velocidade com que
              as reações químicas ocorrem e os fatores que influenciam
              essa velocidade.
            </p>

            <h2>Velocidade das Reações</h2>

            <p className={styles.pinfo}>
              A velocidade média de uma reação relaciona a
              <span> variação da concentração</span> de uma espécie química
              com o intervalo de tempo em que essa alteração ocorre.
            </p>

            <p className={styles.pinfo}>
              Para um reagente, pode ser representada por
              <span> v = −Δ[M]/Δt</span>, em que a concentração diminui
              durante a reação.
            </p>

            <h2>Lei de Velocidade</h2>

            <p className={styles.pinfo}>
              A velocidade de uma reação pode ser expressa por uma
              <span> lei de velocidade</span>, como
              <span> v = k[A]ᵐ[B]ⁿ</span>, em que k é a constante de
              velocidade e os expoentes indicam a ordem da reação em relação
              a cada reagente.
            </p>

            <h2>Teoria das Colisões</h2>

            <p className={styles.pinfo}>
              Segundo a <span>Teoria das Colisões</span>, uma reação química
              ocorre quando as partículas dos reagentes colidem de maneira
              adequada e possuem energia suficiente para superar a
              <span> energia de ativação</span>.
            </p>

            <h2>Fatores que Influenciam a Velocidade</h2>

            <p className={styles.pinfo}>
              A velocidade das reações pode ser alterada por fatores como
              <span> concentração, temperatura, superfície de contato e
              presença de catalisadores</span>.
            </p>

            <p className={styles.pinfo}>
              O aumento da <span>temperatura</span> geralmente aumenta a
              velocidade da reação, pois eleva a energia cinética das partículas.
            </p>

            <p className={styles.pinfo}>
              O aumento da <span>concentração</span> aumenta a frequência de
              colisões entre as partículas. Já o aumento da superfície de
              contato pode favorecer o contato entre os reagentes.
            </p>

            <h2>Catalisadores</h2>

            <p className={styles.pinfo}>
              Os <span>catalisadores</span> aumentam a velocidade de uma reação
              ao fornecerem um caminho reacional com menor energia de ativação,
              sem serem consumidos permanentemente no processo.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Equilíbrio Químico</h2>

            <p className={styles.pinfo}>
              O <span>Equilíbrio Químico</span> ocorre em reações reversíveis
              quando as velocidades das reações direta e inversa se tornam
              iguais.
            </p>

            <h2>Equilíbrio Dinâmico</h2>

            <p className={styles.pinfo}>
              O equilíbrio químico é <span>dinâmico</span>, pois as reações
              direta e inversa continuam ocorrendo simultaneamente. Entretanto,
              suas velocidades são iguais, mantendo constantes as concentrações
              das espécies químicas.
            </p>

            <h2>Constante de Equilíbrio</h2>

            <p className={styles.pinfo}>
              A <span>constante de equilíbrio (K)</span> expressa a relação
              entre as concentrações ou pressões das espécies envolvidas
              quando o sistema atinge o equilíbrio.
            </p>

            <h2>Deslocamento do Equilíbrio</h2>

            <p className={styles.pinfo}>
              O equilíbrio químico pode ser deslocado quando ocorre uma
              alteração nas condições do sistema, como mudanças de
              <span> concentração, pressão ou temperatura</span>.
            </p>

            <h2>Princípio de Le Chatelier</h2>

            <p className={styles.pinfo}>
              Segundo o <span>Princípio de Le Chatelier</span>, quando um
              sistema em equilíbrio sofre uma perturbação, ele tende a se
              deslocar no sentido que reduz o efeito dessa alteração.
            </p>

            <p className={styles.pinfo}>
              A adição de um reagente tende a favorecer o sentido que
              <span> consome esse reagente</span>. Alterações de pressão
              podem deslocar o equilíbrio em sistemas gasosos, enquanto a
              temperatura pode alterar a posição do equilíbrio de acordo com
              o caráter <span>endotérmico ou exotérmico</span> da reação.
            </p>

            <h2>Catalisadores no Equilíbrio</h2>

            <p className={styles.pinfo}>
              Um <span>catalisador</span> aumenta as velocidades das reações
              direta e inversa, permitindo que o equilíbrio seja atingido
              mais rapidamente, mas não altera sua posição.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Eletroquímica</h2>

            <p className={styles.pinfo}>
              A <span>Eletroquímica</span> estuda as relações entre reações
              químicas e energia elétrica, analisando principalmente a
              conversão de <span>energia química em elétrica</span> e de
              energia elétrica em química.
            </p>

            <h2>Reações de Oxirredução</h2>

            <p className={styles.pinfo}>
              As reações de <span>oxirredução</span>, ou reações redox,
              envolvem transferência de elétrons entre espécies químicas.
            </p>

            <p className={styles.pinfo}>
              A <span>oxidação</span> corresponde à perda de elétrons,
              enquanto a <span>redução</span> corresponde ao ganho de elétrons.
            </p>

            <p className={styles.pinfo}>
              O <span>agente redutor</span> é a espécie que sofre oxidação,
              enquanto o <span>agente oxidante</span> é a espécie que sofre
              redução.
            </p>

            <h2>Pilhas Eletroquímicas</h2>

            <p className={styles.pinfo}>
              Uma <span>pilha galvânica ou voltaica</span> converte energia
              química em energia elétrica por meio de uma reação espontânea
              de oxirredução.
            </p>

            <p className={styles.pinfo}>
              Na pilha, a <span>oxidação ocorre no ânodo</span> e a redução
              ocorre no <span>cátodo</span>. O ânodo é o polo negativo e o
              cátodo é o polo positivo.
            </p>

            <h2>Exemplo de Pilha</h2>

            <p className={styles.pinfo}>
              Um exemplo de reação eletroquímica é:
              <span> Zn(s) + Cu²⁺(aq) → Cu(s) + Zn²⁺(aq)</span>.
              Nesse processo, o zinco sofre oxidação e os íons cobre sofrem
              redução.
            </p>

            <h2>Eletrólise</h2>

            <p className={styles.pinfo}>
              A <span>eletrólise</span> utiliza energia elétrica para provocar
              uma reação química não espontânea. Nesse processo, o ânodo é
              positivo e ocorre oxidação, enquanto o cátodo é negativo e
              ocorre redução.
            </p>

            <h2>Aplicações</h2>

            <p className={styles.pinfo}>
              A Eletroquímica possui aplicações na produção e funcionamento
              de <span>pilhas e baterias, proteção contra corrosão,
              galvanização, purificação de metais, produção de substâncias
              químicas e células a combustível</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Radioatividade</h2>

            <p className={styles.pinfo}>
              A <span>Radioatividade</span> é o fenômeno no qual núcleos
              atômicos instáveis emitem energia na forma de partículas ou
              radiação eletromagnética, buscando alcançar maior estabilidade.
            </p>

            <h2>Decaimento Radioativo</h2>

            <p className={styles.pinfo}>
              Durante o <span>decaimento radioativo</span>, um núcleo instável
              transforma-se em outro núcleo, podendo ocorrer alterações no
              número de prótons e nêutrons.
            </p>

            <h2>Radiação Alfa</h2>

            <p className={styles.pinfo}>
              A radiação <span>alfa (α)</span> é constituída por dois prótons
              e dois nêutrons. Possui carga positiva, massa relativamente
              elevada e <span>baixo poder de penetração</span>.
            </p>

            <p className={styles.pinfo}>
              Na emissão alfa, o número de massa diminui em
              <span> 4 unidades</span> e o número atômico diminui em
              <span> 2 unidades</span>.
            </p>

            <h2>Radiação Beta</h2>

            <p className={styles.pinfo}>
              A radiação <span>beta (β)</span> apresenta partículas leves e
              possui maior poder de penetração que a radiação alfa. Na emissão
              beta negativa, o número de massa permanece constante e o
              <span> número atômico aumenta em 1 unidade</span>.
            </p>

            <h2>Radiação Gama</h2>

            <p className={styles.pinfo}>
              A radiação <span>gama (γ)</span> é uma radiação eletromagnética
              que não possui massa nem carga elétrica. Apresenta
              <span> elevado poder de penetração</span> e pode acompanhar
              emissões alfa ou beta.
            </p>

            <h2>Leis do Decaimento</h2>

            <p className={styles.pinfo}>
              Na emissão alfa, o processo pode ser representado por
              <span> ᴬZX → ᴬ⁻⁴Z⁻²Y + ⁴₂α</span>.
            </p>

            <p className={styles.pinfo}>
              Na emissão beta negativa, pode ser representado por
              <span> ᴬZX → ᴬZ⁺¹Y + ⁰₋₁β</span>.
            </p>

            <h2>Meia-Vida</h2>

            <p className={styles.pinfo}>
              A <span>meia-vida (t½)</span> corresponde ao intervalo de tempo
              necessário para que metade dos núcleos radioativos de uma amostra
              sofra decaimento.
            </p>

            <p className={styles.pinfo}>
              Após uma meia-vida, resta <span>1/2</span> da quantidade inicial.
              Após duas, resta <span>1/4</span>; após três, resta
              <span> 1/8</span>. O decaimento radioativo apresenta comportamento
              exponencial.
            </p>

            <h2>Aplicações</h2>

            <p className={styles.pinfo}>
              A radioatividade possui aplicações na
              <span> medicina, radioterapia, esterilização, irradiação de
              alimentos, produção de energia nuclear e análises químicas</span>.
            </p>
          </div>

          <div className={styles.infoConfig}>
            <h2>Soluções</h2>

            <p className={styles.pinfo}>
              Uma <span>solução</span> é uma mistura homogênea constituída por
              duas ou mais substâncias. O <span>soluto</span> é a substância
              dissolvida, enquanto o <span>solvente</span> é a substância
              responsável por dissolver o soluto.
            </p>

            <h2>Concentração</h2>

            <p className={styles.pinfo}>
              A <span>concentração</span> expressa a quantidade de soluto
              presente em determinada quantidade de solução ou solvente,
              dependendo da grandeza utilizada.
            </p>

            <p className={styles.pinfo}>
              A concentração comum pode ser representada por
              <span> C = m/V</span>, relacionando a massa do soluto com o
              volume da solução.
            </p>

            <h2>Concentração em Quantidade de Matéria</h2>

            <p className={styles.pinfo}>
              A concentração em quantidade de matéria, também chamada de
              <span> molaridade</span>, relaciona a quantidade de matéria do
              soluto com o volume da solução e pode ser expressa por
              <span> M = n/V</span>.
            </p>

            <h2>Porcentagem e Partes por Milhão</h2>

            <p className={styles.pinfo}>
              As soluções também podem ter sua concentração expressa em
              <span> porcentagem em massa, porcentagem em volume ou porcentagem
              massa/volume</span>, de acordo com a relação utilizada.
            </p>

            <p className={styles.pinfo}>
              A unidade <span>ppm (partes por milhão)</span> é utilizada para
              representar concentrações muito pequenas de uma substância
              presente em uma mistura.
            </p>

            <h2>Diluição</h2>

            <p className={styles.pinfo}>
              A <span>diluição</span> ocorre quando uma solução tem sua
              concentração reduzida pela adição de solvente, sem alteração da
              quantidade de soluto.
            </p>

            <p className={styles.pinfo}>
              Para uma diluição, pode-se utilizar a relação
              <span> C₁V₁ = C₂V₂</span>, em que as concentrações e volumes
              representam os estados inicial e final da solução.
            </p>

            <h2>Mistura de Soluções</h2>

            <p className={styles.pinfo}>
              A mistura de soluções pode ocorrer entre soluções que possuem
              o mesmo soluto ou entre soluções cujos componentes
              <span> reagem quimicamente</span>. Quando ocorre reação, é
              necessário considerar as relações estequiométricas entre os
              reagentes.
            </p>

            <h2>Titulação</h2>

            <p className={styles.pinfo}>
              A <span>titulação</span> é um método de análise volumétrica
              utilizado para determinar a concentração de uma solução por
              meio da reação com outra solução de concentração conhecida.
            </p>

            <p className={styles.pinfo}>
              Na <span>titulação ácido-base</span>, uma solução ácida reage
              com uma solução básica até atingir uma condição adequada para
              determinar a concentração desconhecida.
            </p>

            <h2>Propriedades Coligativas</h2>

            <p className={styles.pinfo}>
              As <span>propriedades coligativas</span> são propriedades das
              soluções relacionadas principalmente ao número de partículas
              de soluto presentes, independentemente da natureza química
              dessas partículas.
            </p>

            <p className={styles.pinfo}>
              Entre elas estão a <span>redução da pressão de vapor, elevação
              do ponto de ebulição, diminuição do ponto de congelamento e
              pressão osmótica</span>.
            </p>
          </div>

        </div>
      </main>
    </div>
  )
}