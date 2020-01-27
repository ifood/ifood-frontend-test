export default {

    textMatch(keywords, value){

        return keywords.every(keyword => {

            if(keyword){

                let

                normalizedText = this.normalizeText(value),
                normalizedKeyword = this.normalizeText(keyword)

                return normalizedText.includes(normalizedKeyword)

            } else {

                return false

            }

        })

    },

    normalizeText(value){

        return value.toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    }

}
