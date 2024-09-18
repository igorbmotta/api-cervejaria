let cervejas = [
    { id: 1, nome: 'Heineken', abv: 4.5, tipo: 'Lager', nacionalidade: 'Holanda' },
    { id: 2, nome: 'Corona', abv: 5.2, tipo: 'Pielsen', nacionalidade: 'México' },
    { id: 3, nome: 'Patagônia', abv: 4.2, tipo: 'Amber Ale', nacionalidade: 'Argentina' },
    { id: 4, nome: 'Saint’Beer', abv: 3.5, tipo: 'IPA', nacionalidade: 'Brasil' },
    { id: 5, nome: 'Duff Bee', abv: 3.5, tipo: 'Pielsen', nacionalidade: 'EUA' },
    { id: 6, nome: 'Coruja', abv: 3.5, tipo: 'Lager', nacionalidade: 'Brasil' },
    { id: 7, nome: 'Brugse Zot', abv: 6.2, tipo: 'IPA', nacionalidade: 'Bélgica' }
]

exports.mostrarNome = (req, res) => {
    const nome = req.params.nome
    const cerveja = cervejas.find(c => c.nome.toLowerCase() === nome.toLowerCase())
    if (cerveja) {
        res.json(cerveja)
    } else {
        res.status(404).json({ message: 'Cerveja não encontrada' })
    }
}

exports.mostrarNacionalidade = (req, res) => {
    const nacionalidade = req.params.nacionalidade
    const resultado = cervejas.filter(c => c.nacionalidade.toLowerCase() === nacionalidade.toLowerCase())
    res.json(resultado)
}

exports.mostrarMaiorAbv = (req, res) => {
    const maiorAbv = cervejas.sort((a, b) => b.abv - a.abv)
    res.json(maiorAbv)
}

exports.mostrarTipo = (req, res) => {
    const tipo = req.params.tipo
    const resultado = cervejas.filter(c => c.tipo.toLowerCase() === tipo.toLowerCase())
    res.json(resultado)
}

exports.mostrarNomeParcial = (req, res) => {
    const parcialNome = req.params.parcialNome.toLowerCase()
    const resultado = cervejas.filter(c => c.nome.toLowerCase().includes(parcialNome))
    res.json(resultado)
}