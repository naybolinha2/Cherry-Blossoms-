import { useState } from "react";

const categories = [
  { id: "all", label: "Todas", emoji: "🍒" },
  { id: "sobremesas", label: "Sobremesas", emoji: "🍰" },
  { id: "bebidas", label: "Bebidas", emoji: "🍵" },
  { id: "salgados", label: "Salgados", emoji: "🥟" },
  { id: "cafe", label: "Café da Manhã", emoji: "🌅" },
  { id: "japonesa", label: "Japonesa", emoji: "🍱" },
];

const recipes = [
  {
    id: 1,
    title: "Sakura Mochi",
    category: "japonesa",
    emoji: "🍡",
    time: "40 min",
    difficulty: "Médio",
    servings: 12,
    tags: ["tradicional", "primavera", "doce"],
    description:
      "Doce japonês tradicional de arroz glutinoso com pasta de feijão azuki, perfumado com essência de cerejeira.",
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80",
    ingredients: [
      "200g de farinha de arroz glutinoso",
      "180ml de água",
      "60g de açúcar",
      "1 colher de chá de essência de sakura",
      "300g de pasta de feijão azuki (an)",
      "Corante alimentar rosa (opcional)",
      "Folhas de cerejeira em conserva para decorar",
    ],
    steps: [
      "Misture a farinha de arroz, água, açúcar e essência de sakura até formar uma massa lisa.",
      "Adicione corante rosa aos poucos até obter a cor desejada.",
      "Cozinhe a massa no vapor por 20 minutos, coberta com filme.",
      "Deixe esfriar e divida em 12 porções iguais.",
      "Aplane cada porção e envolva com uma colher de pasta de azuki.",
      "Feche bem, modele em oval e decore com folha de cerejeira.",
    ],
  },
  {
    id: 2,
    title: "Matcha Latte Gelado",
    category: "bebidas",
    emoji: "🍵",
    time: "10 min",
    difficulty: "Fácil",
    servings: 2,
    tags: ["bebida", "refrescante", "matcha"],
    description:
      "Cremoso matcha latte gelado com leite de aveia e um toque de xarope de baunilha. Elegante e revigorante.",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80",
    ingredients: [
      "2 colheres de chá de matcha cerimonial",
      "60ml de água quente (70°C)",
      "300ml de leite de aveia",
      "2 colheres de sopa de xarope de baunilha",
      "Gelo a gosto",
      "Pitada de sal marinho",
    ],
    steps: [
      "Peneire o matcha em um bowl para evitar grumos.",
      "Adicione a água quente e bata com batedor de chá até dissolver completamente.",
      "Em um copo alto, coloque bastante gelo.",
      "Adicione o xarope de baunilha e o leite de aveia.",
      "Despeje o matcha concentrado por cima devagar.",
      "Finalize com uma pitada de sal e sirva imediatamente.",
    ],
  },
  {
    id: 3,
    title: "Hanami Cheesecake",
    category: "sobremesas",
    emoji: "🍰",
    time: "3h",
    difficulty: "Difícil",
    servings: 8,
    tags: ["sobremesa", "festa", "cremoso"],
    description:
      "Cheesecake japonês estilo fluffy com geleia de cereja e pétalas cristalizadas. Delicado como uma manhã de hanami.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    ingredients: [
      "250g de cream cheese em temperatura ambiente",
      "100ml de leite integral",
      "60g de manteiga sem sal",
      "3 ovos (claras e gemas separadas)",
      "60g de farinha de trigo",
      "20g de amido de milho",
      "80g de açúcar",
      "1 colher de sopa de suco de limão",
      "Geleia de cereja para cobertura",
      "Pétalas de rosa cristalizadas para decorar",
    ],
    steps: [
      "Pré-aqueça o forno a 150°C. Forre uma forma redonda com papel manteiga.",
      "Derreta o cream cheese, leite e manteiga em banho-maria, misturando até ficar homogêneo.",
      "Retire do calor, acrescente as gemas, farinha, amido e limão. Misture bem.",
      "Bata as claras em neve firme com o açúcar até formar picos.",
      "Incorpore delicadamente as claras à mistura de cream cheese em três adições.",
      "Despeje na forma e asse em banho-maria por 60-70 minutos.",
      "Deixe esfriar dentro do forno desligado por 1h. Decore com geleia e pétalas.",
    ],
  },
  {
    id: 4,
    title: "Onigiri de Salmão",
    category: "japonesa",
    emoji: "🍱",
    time: "30 min",
    difficulty: "Fácil",
    servings: 4,
    tags: ["salgado", "prático", "saudável"],
    description:
      "Bolinhos de arroz japonês recheados com salmão temperado e envoltos em nori crocante.",
    image:
      "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=600&q=80",
    ingredients: [
      "400g de arroz japonês de grão curto",
      "200g de salmão fresco",
      "2 colheres de sopa de shoyu",
      "1 colher de chá de óleo de gergelim",
      "Cebolinha verde picada",
      "Folhas de nori cortadas em tiras",
      "Sal a gosto",
    ],
    steps: [
      "Cozinhe o arroz japonês conforme as instruções. Deixe amornar.",
      "Grelhe o salmão com shoyu e óleo de gergelim. Desfie e misture com cebolinha.",
      "Umedeça as mãos com água salgada para evitar que o arroz grude.",
      "Pegue uma porção de arroz, abra uma cavidade e coloque o recheio.",
      "Feche o arroz e molde em formato triangular pressionando firmemente.",
      "Envolva a base com uma tira de nori e sirva imediatamente.",
    ],
  },
  {
    id: 5,
    title: "Pancakes de Sakura",
    category: "cafe",
    emoji: "🌅",
    time: "25 min",
    difficulty: "Fácil",
    servings: 4,
    tags: ["café da manhã", "doce", "fofo"],
    description:
      "Panquecas fofas tingidas de rosa com essência de cerejeira, servidas com calda de hibisco e chantilly.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    ingredients: [
      "1 xícara de farinha de trigo",
      "1 colher de chá de fermento em pó",
      "2 colheres de sopa de açúcar",
      "1 pitada de sal",
      "1 ovo",
      "200ml de leite",
      "2 colheres de sopa de manteiga derretida",
      "1 colher de chá de essência de sakura",
      "Corante rosa a gosto",
      "Calda de hibisco e frutas vermelhas para servir",
    ],
    steps: [
      "Misture os ingredientes secos: farinha, fermento, açúcar e sal.",
      "Em outro bowl, bata o ovo, leite, manteiga e essência de sakura.",
      "Una os ingredientes úmidos aos secos, mexendo levemente.",
      "Adicione corante rosa até atingir a coloração desejada.",
      "Aqueça uma frigideira antiaderente em fogo médio-baixo com manteiga.",
      "Despeje porções de massa e cozinhe até borbulhar. Vire e doure do outro lado.",
      "Sirva com calda de hibisco e frutas vermelhas.",
    ],
  },
  {
    id: 6,
    title: "Gyoza de Cogumelo",
    category: "salgados",
    emoji: "🥟",
    time: "50 min",
    difficulty: "Médio",
    servings: 6,
    tags: ["salgado", "vegetariano", "crocante"],
    description:
      "Dumplings crocantes recheados com shitake, gengibre e legumes, servidos com molho ponzu.",
    image:
      "https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?w=600&q=80",
    ingredients: [
      "30 wrappers de gyoza prontos",
      "250g de shitake picado",
      "100g de repolho chinês",
      "2 dentes de alho",
      "1 pedaço de gengibre fresco",
      "2 colheres de sopa de shoyu",
      "1 colher de chá de óleo de gergelim",
      "Cebolinha verde a gosto",
      "Molho ponzu para servir",
    ],
    steps: [
      "Refogue alho e gengibre em óleo quente. Adicione o shitake e cozinhe até murchar.",
      "Acrescente o repolho, shoyu e óleo de gergelim. Cozinhe 2 minutos. Reserve e esfrie.",
      "Coloque uma colher do recheio no centro de cada wrapper.",
      "Umedeça as bordas e feche dobrando em meias-luas, franzindo a borda superior.",
      "Aqueça óleo em frigideira e frite os gyozas por 2-3 minutos até dourar na base.",
      "Adicione água para cobrir metade dos gyozas, tampe e cozinhe até evaporar.",
      "Sirva imediatamente com molho ponzu e cebolinha.",
    ],
  },
  {
    id: 7,
    title: "Smoothie Cereja & Rosa",
    category: "bebidas",
    emoji: "🍒",
    time: "5 min",
    difficulty: "Fácil",
    servings: 2,
    tags: ["bebida", "saudável", "frutas"],
    description:
      "Smoothie vibrante com cerejas congeladas, água de rosas e iogurte grego. Lindo e nutritivo.",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&q=80",
    ingredients: [
      "200g de cerejas congeladas",
      "150g de iogurte grego",
      "200ml de leite de coco",
      "1 colher de sopa de água de rosas",
      "1 colher de sopa de mel",
      "Gelo a gosto",
      "Pétalas de rosa para decorar",
    ],
    steps: [
      "Coloque as cerejas, iogurte e leite de coco no liquidificador.",
      "Adicione a água de rosas e o mel.",
      "Bata em alta velocidade por 1-2 minutos até ficar cremoso.",
      "Prove e ajuste o adoçante se necessário.",
      "Sirva em copos altos com gelo e decore com pétalas de rosa.",
    ],
  },
  {
    id: 8,
    title: "Tamagoyaki Primavera",
    category: "cafe",
    emoji: "🌅",
    time: "20 min",
    difficulty: "Médio",
    servings: 2,
    tags: ["café da manhã", "proteína", "japonês"],
    description:
      "Omelete japonês enrolado e adocicado com recheio de espinafre e ervilhas frescas.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    ingredients: [
      "4 ovos grandes",
      "2 colheres de sopa de dashi",
      "1 colher de sopa de mirin",
      "1 colher de chá de shoyu",
      "1 colher de chá de açúcar",
      "Folhas de espinafre baby",
      "Ervilhas frescas cozidas",
      "Óleo para frigideira",
    ],
    steps: [
      "Bata os ovos com dashi, mirin, shoyu e açúcar delicadamente, sem espumar.",
      "Aqueça a frigideira de tamagoyaki (retangular) com um fio de óleo.",
      "Despeje 1/3 da mistura, espalhe espinafre e ervilhas e enrole.",
      "Empurre o rolo para o início e repita com mais 1/3 da mistura.",
      "Continue enrolando com a última parte da mistura.",
      "Modele com esteira de bambu e corte em rodelas.",
    ],
  },
];

const difficultyColor = {
  Fácil: "#4a7a4a",
  Médio: "#b5813a",
  Difícil: "#9b1c1c",
};

const PETALS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${5 + i * 8}%`,
  delay: `${i * 1.1}s`,
  duration: `${6 + (i % 4)}s`,
  size: 10 + (i % 3) * 4,
}));

function Petal({ left, delay, duration, size }) {
  return (
    <div
      style={{
        position: "fixed",
        top: -20,
        left,
        width: size,
        height: size,
        pointerEvents: "none",
        animation: `petalFall ${duration} ${delay} infinite linear`,
        zIndex: 0,
      }}
    >
      <svg viewBox="0 0 24 28" width={size} height={size}>
        {/* Cherry pair */}
        <circle cx="8" cy="18" r="5" fill="#9b1c1c" opacity="0.75" />
        <circle cx="16" cy="20" r="5" fill="#c0392b" opacity="0.7" />
        {/* Stem */}
        <path d="M8 13 Q12 4 16 15" stroke="#4a7a4a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Small leaf */}
        <ellipse cx="14" cy="8" rx="3" ry="1.5" fill="#4a7a4a" opacity="0.7" transform="rotate(-30 14 8)" />
      </svg>
    </div>
  );
}

function RecipeModal({ recipe, onClose }) {
  const [activeTab, setActiveTab] = useState("ingredients");

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(58,32,24,0.45)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        animation: "fadeInUp 0.25s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fefaf6",
          borderRadius: 24,
          maxWidth: 600,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 32px 80px rgba(58,32,24,0.25)",
          animation: "fadeInUp 0.3s ease",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", height: 240, overflow: "hidden", borderRadius: "24px 24px 0 0" }}>
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(58,32,24,0.6) 0%, transparent 60%)"
          }} />
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 16, right: 16,
              background: "rgba(255,250,247,0.9)",
              border: "none", borderRadius: "50%",
              width: 36, height: 36,
              cursor: "pointer", fontSize: 18, lineHeight: "36px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#3a2018",
            }}
          >✕</button>
          <div style={{ position: "absolute", bottom: 16, left: 20, right: 20 }}>
            <div style={{ fontSize: 28 }}>{recipe.emoji}</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 28, fontWeight: 600,
              color: "#fff", margin: "4px 0 0",
            }}>{recipe.title}</h2>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 32px" }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#7a5c52", fontSize: 14, lineHeight: 1.7,
            marginBottom: 20,
          }}>{recipe.description}</p>

          {/* Meta row */}
          <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
            {[
              { icon: "⏱", label: recipe.time },
              { icon: "👥", label: `${recipe.servings} porções` },
              { icon: "📊", label: recipe.difficulty, color: difficultyColor[recipe.difficulty] },
            ].map((m) => (
              <div key={m.label} style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "#fdf2f2", borderRadius: 20, padding: "6px 14px",
                fontSize: 13, fontFamily: "'Space Grotesk', sans-serif",
                color: m.color || "#3a2018", fontWeight: 500,
              }}>
                <span>{m.icon}</span> {m.label}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
            {recipe.tags.map((t) => (
              <span key={t} style={{
                fontSize: 11, fontFamily: "'Space Grotesk', sans-serif",
                background: "#f5c4c4", color: "#5c0f0f",
                borderRadius: 12, padding: "3px 10px", letterSpacing: "0.5px",
                textTransform: "uppercase", fontWeight: 500,
              }}>#{t}</span>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 20, borderBottom: "1px solid #f5c4c4", paddingBottom: 0 }}>
            {["ingredients", "steps"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: "none", border: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14, fontWeight: 500, cursor: "pointer",
                  padding: "8px 16px",
                  borderBottom: activeTab === tab ? "2px solid #c0392b" : "2px solid transparent",
                  color: activeTab === tab ? "#9b1c1c" : "#a08878",
                  transition: "all 0.2s",
                  marginBottom: -1,
                }}
              >
                {tab === "ingredients" ? "🧂 Ingredientes" : "👩‍🍳 Modo de Preparo"}
              </button>
            ))}
          </div>

          {activeTab === "ingredients" ? (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {recipe.ingredients.map((ing, i) => (
                <li key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  padding: "10px 0",
                  borderBottom: i < recipe.ingredients.length - 1 ? "1px solid #fdf2f2" : "none",
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: "#3a2018",
                }}>
                  <span style={{ color: "#9b1c1c", fontSize: 14, marginTop: 1 }}>🍒</span>
                  {ing}
                </li>
              ))}
            </ul>
          ) : (
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {recipe.steps.map((step, i) => (
                <li key={i} style={{
                  display: "flex", gap: 14, padding: "12px 0",
                  borderBottom: i < recipe.steps.length - 1 ? "1px solid #fdf2f2" : "none",
                }}>
                  <div style={{
                    minWidth: 28, height: 28,
                    background: "linear-gradient(135deg, #c0392b, #7b1111)",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 14, fontWeight: 600, flexShrink: 0,
                  }}>{i + 1}</div>
                  <p style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 14,
                    color: "#3a2018", lineHeight: 1.7, margin: 0,
                  }}>{step}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

function RecipeCard({ recipe, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(recipe)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fefaf6",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 20px 48px rgba(58,32,24,0.18)"
          : "0 2px 16px rgba(58,32,24,0.07)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        border: "1px solid #f5c4c4",
      }}
    >
      <div style={{ position: "relative", height: 180, overflow: "hidden" }}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.5s ease",
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(155,28,28,0.35) 0%, transparent 60%)"
            : "linear-gradient(to top, rgba(58,32,24,0.25) 0%, transparent 60%)",
          transition: "background 0.3s",
        }} />
        <div style={{
          position: "absolute", top: 12, right: 12,
          background: "rgba(255,250,247,0.92)",
          borderRadius: 12, padding: "4px 10px",
          fontSize: 11, fontFamily: "'Space Grotesk', sans-serif",
          color: difficultyColor[recipe.difficulty],
          fontWeight: 600, letterSpacing: "0.3px",
        }}>{recipe.difficulty}</div>
      </div>
      <div style={{ padding: "16px 18px 20px" }}>
        <div style={{ fontSize: 22, marginBottom: 6 }}>{recipe.emoji}</div>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 18, fontWeight: 600, color: "#3a2018",
          margin: "0 0 6px", lineHeight: 1.25,
        }}>{recipe.title}</h3>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12, color: "#a08878", lineHeight: 1.6,
          margin: "0 0 14px",
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{recipe.description}</p>
        <div style={{ display: "flex", gap: 12 }}>
          {[`⏱ ${recipe.time}`, `👥 ${recipe.servings}`].map((m) => (
            <span key={m} style={{
              fontSize: 12, fontFamily: "'Space Grotesk', sans-serif",
              color: "#7a5c52",
            }}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = recipes.filter((r) => {
    const matchCat = activeCategory === "all" || r.category === activeCategory;
    const matchSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #fdf6f0; overflow-x: hidden; }
        @keyframes petalFall {
          0% { transform: translateY(-30px) rotate(0deg) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.4; }
          100% { transform: translateY(100vh) rotate(540deg) translateX(60px); opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes headerReveal {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #f5ede8; }
        ::-webkit-scrollbar-thumb { background: #c0392b; border-radius: 3px; }
        .recipe-grid { animation: fadeInUp 0.5s ease both; }
        .category-btn:hover { background: #f5c4c4 !important; color: #5c0f0f !important; }
      `}</style>

      {/* Falling petals */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        {PETALS.map((p) => <Petal key={p.id} {...p} />)}
      </div>

      <div style={{
        minHeight: "100vh",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative", zIndex: 1,
      }}>
        {/* Header */}
        <header style={{
          background: "linear-gradient(135deg, #fdf2f2 0%, #fdf6f0 50%, #fdf2f2 100%)",
          borderBottom: "1px solid #e8b4b4",
          padding: "40px 24px 32px",
          textAlign: "center",
          animation: "headerReveal 0.6s ease both",
        }}>
          <img
            src="https://i.pinimg.com/1200x/4f/6c/cb/4f6ccb6be81d15259eb2f0a7aa023e0f.jpg"
            alt="Cherry Blossoms header"
            style={{
              width: "100%",
              maxWidth: 420,
              height: "auto",
              display: "block",
              margin: "0 auto 8px",
              borderRadius: 12,
            }}
          />
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 700, color: "#3a2018",
            letterSpacing: "-2px", lineHeight: 1.05,
            marginBottom: 8,
          }}>
            <span style={{ color: "#7b1111" }}>Cherry Blossoms</span>
          </h1>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#a08878", fontSize: 12, letterSpacing: "3px",
            textTransform: "uppercase", marginBottom: 28,
          }}>
            culinária japonesa & inspirações primavera
          </p>

          {/* Search */}
          <div style={{
            maxWidth: 420, margin: "0 auto",
            position: "relative",
          }}>
            <span style={{
              position: "absolute", left: 16, top: "50%",
              transform: "translateY(-50%)", fontSize: 16, color: "#c0392b",
            }}>🔍</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar receitas, ingredientes, tags..."
              style={{
                width: "100%", padding: "12px 16px 12px 44px",
                borderRadius: 50, border: "1.5px solid #f5c4c4",
                background: "#fefaf6", color: "#3a2018",
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 14,
                outline: "none",
                boxShadow: "0 2px 12px rgba(192,57,43,0.1)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#c0392b";
                e.target.style.boxShadow = "0 4px 20px rgba(192,57,43,0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#f5c4c4";
                e.target.style.boxShadow = "0 2px 12px rgba(192,57,43,0.1)";
              }}
            />
          </div>
        </header>

        {/* Category nav */}
        <nav style={{
          padding: "20px 24px",
          display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap",
          background: "#fefaf6",
          borderBottom: "1px solid #f0e0d8",
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="category-btn"
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "8px 18px",
                borderRadius: 50,
                border: activeCategory === cat.id ? "1.5px solid #c0392b" : "1.5px solid #f5c4c4",
                background: activeCategory === cat.id
                  ? "linear-gradient(135deg, #c0392b, #7b1111)"
                  : "#fdf2f2",
                color: activeCategory === cat.id ? "#fff" : "#7a5c52",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13, fontWeight: 500,
                cursor: "pointer",
                display: "flex", alignItems: "center", gap: 6,
                transition: "all 0.2s",
                boxShadow: activeCategory === cat.id
                  ? "0 4px 16px rgba(155,28,28,0.3)"
                  : "none",
              }}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          ))}
        </nav>

        {/* Grid */}
        <main style={{ padding: "32px 24px 64px", maxWidth: 1200, margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{
              textAlign: "center", padding: "80px 24px",
              color: "#a08878", fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 24,
            }}>
              🍒 Nenhuma receita encontrada...
            </div>
          ) : (
            <>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#a08878", fontSize: 13,
                marginBottom: 24, letterSpacing: "1px",
                textTransform: "uppercase",
              }}>
                {filtered.length} {filtered.length === 1 ? "receita" : "receitas"}
              </p>
              <div
                className="recipe-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 24,
                }}
              >
                {filtered.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} onClick={setSelectedRecipe} />
                ))}
              </div>
            </>
          )}
        </main>

        {/* Footer */}
        <footer style={{
          textAlign: "center", padding: "24px",
          borderTop: "1px solid #e8b4b4",
          background: "#fdf2f2",
          fontFamily: "'Space Grotesk', sans-serif",
          color: "#a08878", fontSize: 13,
        }}>
          🍒 Cherry Blossoms — feito com amor e matcha
        </footer>
      </div>

      {selectedRecipe && (
        <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
      )}
    </>
  );
}
