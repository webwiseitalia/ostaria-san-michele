import tagliolino from '../assets/foto/tagliolino-san-michele.webp'
import casoncelli from '../assets/foto/casoncelli-camuni.webp'
import casoncelliBurro from '../assets/foto/casoncelli-burro-salvia.webp'
import tagliere from '../assets/foto/tagliere-salumi-formaggi.webp'
import secondoCarne from '../assets/foto/secondo-carne-pancetta.webp'
import tiramisuSpongada from '../assets/foto/tiramisu-spongada.webp'
import piattoPolenta from '../assets/foto/piatto-polenta-franciacorta.webp'

const menuSections = [
  {
    title: 'Antipasti',
    items: [
      { name: 'Sarde in Saor', desc: 'Rivisitazione Slow Food con sarda di Montisola e polenta' },
      { name: 'Tomino con uova e tartufo', desc: 'Tomino fondente con uova e tartufo fresco' },
      { name: 'Tagliere della zona', desc: 'Salame, culaccia, pancetta, bresaola con giardiniera fatta in casa' },
      { name: 'Gazpacho di pomodoro e barbabietola', desc: 'Con polpetta di patate, pere e strinu' },
    ],
  },
  {
    title: 'Primi',
    items: [
      { name: 'Tagliolino San Michele', desc: 'Tagliolini fatti in casa all\'uovo tutto tuorlo con porcini dei boschi locali e trota marinata e affumicata', signature: true },
      { name: 'Spaghetto di Gragnano', desc: 'Con sarde essiccate, bottarga di salmerino e pesto di aglio orsino' },
      { name: 'Casoncelli Camuni', desc: 'Con erba di San Pietro, polenta di Erbanno e pancetta croccante di Grignaghe — premiati al concorso Alma 2022', signature: true },
    ],
  },
  {
    title: 'Carni al Forno Josper',
    items: [
      { name: 'Lagrima di suino iberico', desc: 'Con salsa brava e patate arrosto' },
      { name: 'Fiorentina di scottona', desc: 'Cottura alla griglia Josper di alto livello' },
      { name: 'Costata Ry Bay', desc: 'Selezione premium, cottura perfetta al Josper' },
      { name: 'Bocconcino di cervo in salmì', desc: 'Con polenta di Erbanno' },
    ],
  },
  {
    title: 'Dolci',
    items: [
      { name: 'Tiramisù con Spongada', desc: 'Tiramisù servito con la Spongada, dolce tipico di Breno — un\'icona camuna', signature: true },
      { name: 'Crostata ai frutti di bosco', desc: 'Con frutti freschi del territorio' },
    ],
  },
]

const galleryImages = [
  { src: tagliolino, alt: 'Tagliolino San Michele con porcini e trota' },
  { src: casoncelli, alt: 'Casoncelli Camuni' },
  { src: casoncelliBurro, alt: 'Casoncelli al burro e salvia con pancetta croccante' },
  { src: tagliere, alt: 'Tagliere di salumi e formaggi locali' },
  { src: secondoCarne, alt: 'Secondo di carne avvolto nella pancetta' },
  { src: tiramisuSpongada, alt: 'Tiramisù con Spongada di Breno' },
]

export default function LaCucina() {
  return (
    <section id="cucina" className="section-padding bg-wood-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-forest-400 font-semibold tracking-[0.2em] uppercase text-sm">Il Menù</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream-100 mt-3 mb-4">La Cucina</h2>
          <p className="text-lg md:text-xl text-cream-300/80 max-w-3xl mx-auto">
            Piatti montanari e lacustri che uniscono tradizione bresciana, camuna e influenze venete dello chef.
            Tutti gli ingredienti sono freschi, cucinati al momento, a filiera corta e dal basso impatto ambientale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mb-16 rounded-2xl overflow-hidden">
          {galleryImages.slice(0, 3).map((img, i) => (
            <div key={i} className="overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {menuSections.map((section) => (
            <div key={section.title} className="bg-wood-700/50 backdrop-blur-sm rounded-2xl p-8 border border-wood-600/30">
              <h3 className="font-serif text-2xl font-bold text-cream-200 mb-6 pb-3 border-b border-wood-600/50">
                {section.title}
              </h3>
              <div className="space-y-5">
                {section.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex items-start gap-2">
                      {item.signature && (
                        <span className="mt-1 text-xs bg-forest-600/80 text-cream-100 px-2 py-0.5 rounded-full flex-shrink-0 font-medium">
                          ★
                        </span>
                      )}
                      <div>
                        <h4 className="font-semibold text-cream-100 text-lg">{item.name}</h4>
                        <p className="text-cream-400/70 text-sm mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-3 mb-16 rounded-2xl overflow-hidden">
          {galleryImages.slice(3, 6).map((img, i) => (
            <div key={i} className="overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        <div className="bg-wood-700/30 rounded-2xl p-8 md:p-12 border border-wood-600/20">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-forest-600/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-cream-100 mb-2">Filiera corta, dal territorio alla tavola</h3>
              <p className="text-cream-300/70 leading-relaxed">
                Ogni piatto nasce dalla collaborazione con piccoli produttori locali: ortaggi dall'Azienda Agricola Solato di Pian Camuno,
                sarde dalla pescheria Soardi di Montisola, pane artigianale dal fornaio di Fraine, burro di malga e formaggi nostrani
                da Montecampione, pancetta di Grignaghe e polenta di Erbanno.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-forest-600/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-forest-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-cream-100 mb-2">Pizza a legna & Forno Josper</h3>
              <p className="text-cream-300/70 leading-relaxed">
                La pizza cotta nel forno a legna e le carni grigliate nel forno Josper — un sistema di cottura alla brace
                di alto livello che esalta il sapore naturale delle carni migliori: fiorentina di scottona, costata Ry Bay,
                galletto e molto altro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
