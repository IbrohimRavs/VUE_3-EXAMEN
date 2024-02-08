import ru from "./ru.json"
import uz from "./uz.json"

const local = window.localStorage.getItem("Toxirrrr")

const defaultLocale = local || 'ru'

const languages = {
    ru,
    uz
}

export{ defaultLocale, languages }