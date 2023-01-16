$(document).ready( function() {
    $("#texto").on("input keypress", function(event) {
        const redacao = $(this).val()
        const caracteresDigitados = redacao.length;
        var palavrasDigitadas = caracterSemRepeticao(redacao, ' ')
        var paragrafos = caracterSemRepeticao(redacao, '\n')
        palavrasDigitadas += Number(Boolean(redacao))
        palavrasDigitadas += paragrafos

        if (event.key) {
            impedeEspacoDuplo(redacao)
            impedeParagrafoNoInicio(redacao)
        }

        function caracterSemRepeticao(texto, caracter) {
            const caracteresDoTexto = texto.split('')
            const posicoes = []
            var quantCaracNaoRepetidos = 0
            for (i = 0; i < caracteresDoTexto.length; i++) {
                if (caracteresDoTexto[i] == caracter) {
                    posicoes.push(i)
                }
            }
            posicoes.forEach(element => {
                const caracterDepois = caracteresDoTexto[element+1]
                const caracDepoisNaoEhIgual = (caracterDepois != '\n' && caracterDepois != ' ')
                if (caracterDepois && caracDepoisNaoEhIgual){
                    quantCaracNaoRepetidos++
                }
            })
            return quantCaracNaoRepetidos;

        }
        $('#caracteres').html(`Caracteres: ${ caracteresDigitados }`)
        $('#palavras').html(`Palavras: ${ palavrasDigitadas }`)
    })
})
