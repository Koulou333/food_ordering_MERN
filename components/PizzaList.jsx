import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList }) => {
    return (
            <div className={styles.container}>
                <h1 className={styles.title}>NOS PIZZA</h1>
                <p className={styles.desc}>
                Découvrez notre pizzeria artisanale et dégustez nos pizzas fraîchement préparées avec des ingrédients de première qualité. Notre pâte à pizza faite maison est préparée chaque jour pour garantir sa fraîcheur. Commandez en ligne et profitez d une expérience culinaire exceptionnelle !
                </p>
                <div className={styles.wrapper}>
                    {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                    ))}
                </div>
            </div>        
    )
}

export default PizzaList;