import './cards.css'


const products = [
    {
        id: 1,
        type: "tops",
        name: "Basic Hoodie",
        description: "Heckin good boys and girls floofs very hand that feed shibe super chub very good spot bork such treat, smol stop it fren puggo long woofer. Very jealous pupper heckin good boys most angery pupper I have ever seen, tungg."
    },
    {
        id: 2,
        type: "bottoms",
        name: "Basic Chino",
        description: "Vvv borkf borking doggo woofer the neighborhood pupper long bois he made many woofs, such treat borkf bork long water shoob dat tungg tho I am bekom fat length boy, vvv snoot ur givin me a spook extremely cuuuuuute lotsa pats."
    },
    {
        id: 3,
        type: "tops",
        name: "Tulo Hoodie",
        description: "Very good spot woofer shoob you are doing me the shock pupper, shibe sub woofer. Blep h*ck he made many woofs boof borkf wow such tempt, wrinkler long woofer dat tungg tho very good spot, blep clouds very good spot bork."
    },
    {
        id: 4,
        type: "shoes",
        name: "The Goat Loafer",
        description: "Blep doggo much ruin diet heckin good boys and girls, dat tungg tho ur givin me a spook. Wow such tempt shoob bork aqua doggo heckin good boys, snoot heckin good boys ruff, stop it fren pupperino noodle horse."
    },
]

export default function Cards() {
  return (
        <div className="card-container, cards-container">
            {products.map((product) => (
            <div key={product.id} className="card bg-secondary mb-3" style={{ maxWidth: "20rem" }}>
                <div className="card-header">{product.type}</div>
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.description}</p>
                </div>
            </div>
            ))}
        </div>
  );
}